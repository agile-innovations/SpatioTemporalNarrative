SpatioTemporalNarrative
=======================
   
This project enables storytelling in the style of the NYT "Snow Fall: The Avalanche at Tunnel Creek" article. We visualize and provide interaction along space, time and narrative structures. This was a warmup project for Niels Joubert's 2013 CURIS Students, teaching them a JavaScript stack (NodeJS with Backbone), Literate Programming, and Github etiquette.

Spatio-Temporal Narratives explore stories based around movement through space and time on the iPad

## [Read the annotated code](http://stanfordhci.github.io/SpatioTemporalNarrative/)

We extensively commented the code with explanations and elaborations. We suggest reading it from front-to-back in the order we wrote it - it isn't very much! - so kick it off with the server.js entrypoint! It's rendered in a literate programming style using [docco-husky](https://github.com/mbrevoort/docco-husky).

- #### The node.js server entrypoint is [src/server.js](http://stanfordhci.github.io/SpatioTemporalNarrative/src/server.js.html)

- #### The client entrypoint is [src/public/client.js](http://stanfordhci.github.io/SpatioTemporalNarrative/src/public/js/client.js.html)

## The Interface for the iPad

All the text in this comes from the NYT boston bomber aticle. It is reproduced here purely for educational purposes to demonstrate a system.

#### When you open the app, you see a list of stories, each incorporating events over time and space:

![Opening page](https://github.com/StanfordHCI/SpatioTemporalNarrative/blob/master/images/photo%201.PNG?raw=true)

#### Touching a story title loads the timeline, text and map showing the events.

![Opening page](https://github.com/StanfordHCI/SpatioTemporalNarrative/blob/master/images/photo%202.PNG?raw=true)

#### Scrolling the text highlights the current event on the map and the timeline

![Opening page](https://github.com/StanfordHCI/SpatioTemporalNarrative/blob/master/images/photo%203.PNG?raw=true)

#### Scrolling further moves the map and the timeline to new events

![Opening page](https://github.com/StanfordHCI/SpatioTemporalNarrative/blob/master/images/photo%204.PNG?raw=true)

#### Touching locations on the map or events on the timeline updates the text accordingly

![Opening page](https://github.com/StanfordHCI/SpatioTemporalNarrative/blob/master/images/photo%205.PNG?raw=true)


## Example Narratives:

- [Hunt for the Boston Marathon Bomber Suspects](http://www.nytimes.com/interactive/2013/04/19/us/boston-marathon-manhunt.html?_r=1&)
- [Snowfall, the avalanche](http://www.nytimes.com/projects/2012/snow-fall/#/?part=descent-begins)

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/c5208b051863537ad70f70fc614a71f7 "githalytics.com")](http://githalytics.com/StanfordHCI/SpatioTemporalNarrative)
