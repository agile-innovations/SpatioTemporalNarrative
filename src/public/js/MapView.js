MapView = (function() {

  function MapView(options) {
    this.options = options || {}; 
    this.model = options.model || undefined;
    this.modelView = options.modelView || undefined;
    this.setElement(options.el); 
    this.initialize(); 
    this._delegateEvents();
  }

  _.extend(MapView.prototype, Backbone.Events, {

    setElement: function(el) {
      if (!el)
        throw new Error("View requires a container element");
      this.el = el instanceof $ ? el.get(0) : el;
      this.$el = el instanceof $ ? el : $(el);
    },

    initialize: function() {
      var self = this;

      this.listenTo(this.modelView, "setup", _.bind(this.renderFromScratch, this)); 
      this.listenTo(this.modelView, "scroll:at", function(id) {
        self.renderScrolled(this.model.get("events")[id]);  
      });
    },

    renderFromScratch: function() {
      var mapOptions = {
        center: new google.maps.LatLng(47.61, -122.33),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.SATELLITE
      };
      map = new google.maps.Map(this.el, mapOptions);
      var self = this; 
      addMarkers(); 

      function addMarkers() {

        function createMarker(latlng) {
          var marker = new google.maps.Marker({
            position: latlng,  
            map: map,
            animation: google.maps.Animation.DROP,
            title: ""
          });
          map.panTo(latlng); 
        }

        function createArea(coords) {
          var area = new google.maps.Polygon({
            paths: coords,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.25
          });
          area.setMap(map);
        }

        var geocoder = new google.maps.Geocoder(); 
        function addressToLatLng(address, callback) {
          var request = {
            address: address
          }
          geocoder.geocode(request, function(result, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              callback(result, status); 
            }
          }); 
        }

        // var geocoder = new google.maps.Geocoder(); 
        var locations = self.model.get("map").poi; 

        for (i in locations) {
          var location = locations[i]; 

          if (location.type == "address") {
            addressToLatLng(location.value, function(result, status) {
              createMarker(result[0].geometry.location); 
            }); 

          } else if (location.type == "point") {
            var latlng = new google.maps.LatLng(location.lat, location.lng); 
            createMarker(latlng); 

          } else if (location.type == "area") {
            var addressCoords = []; 
            var pointCoords = []; 
            var subPoints = location.value; 
            var length = subPoints.length; 
            for (i in subPoints) {
              var subPoint = subPoints[i]; 
              if (subPoint.type == "address") {
                addressToLatLng(subPoint.value, function(result, status) {
                  addressCoords.push(result[0].geometry.location); 
                  if (i == length - 1) {
                    createArea(addressCoords); 
                  }
                }); 

              } else if (subPoint.type == "point") {
                var latlng = new google.maps.LatLng(subPoint.lat, subPoint.lng); 
                pointCoords.push(latlng); 
                if (i == length - 1) {
                  createArea(pointCoords); 
                }
              }
            }
          } /*else if (location.type == "list") {
            var subPoints = location.value; 
            for (int i = 0; i < subPoints.length - 1; i++) {
              if (subPoint.type == "address") {

              } else if (subPoint.type == "point") {

              }
            }
          }*/
        }
      }
      return this; 
    },


    renderScrolled: function(event) {
      //this.$el.html("SCROLL AT " + event.spatial);
    },
    
    clear: function() {

      return this;
    },

    _delegateEvents: function() {
      //Where we hook up UI event handlers
      var self = this;

    },

  });

  return MapView;

})();

