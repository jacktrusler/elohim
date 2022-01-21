# ELOHIM 

We made this svelte app to be able to quickly add friends to two teams. Mostly made for LAN games but can be used whenever you want to include skill levels of any kind. There's an option to randomize the teams if you prefer or add players to each team manually, but the original idea was to balance the teams by ELO hence the name.

## How Balancing Works 

The code for balancing the teams can be found in elohim.ts. The way it works is by finding the mean and then find every permutation of every team and whichever team when added up is closest to the mean will be one team. The remainder will be on the other team, and consequently second closest from the mean. 

## Preview

[![ELOHIMscreenshot.png](https://i.postimg.cc/hPLXby4X/ELOHIMscreenshot.png)](https://postimg.cc/ZCqYJLdm)
