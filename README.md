# _Triple Triad_

A clone of the strategy game from Final Fantasy VIII, Triple Triad.

#### By
Jared Farkas, Darrion Gering, Liz Kelley

Special thanks to Ryan McLean for help on the card assets

## Description

The card minigame from Final Fantasy VIII. Each player is dealt a random starting hand and places them on the board, starting with the blue player. If a card's strength to one side is higher than the adjacent card's strength, the adjacent card is captured upon placement. Whichever player controls more cards at the end is the winner.

## Setup/Installation Requirements

* Clone the project from https://github.com/darrionkg/react-triple-triad
* Import the database in the root directory.
* Host using dotnet
* Run in browser
* Start a new game

## Known Bugs
Drag and drop does not work on mobile.

## Specs
_A player drags a card onto the board / The card's image is appended to the space dragged to_

_A player clicks a card, then clicks a spot on the board / The card's image is appended to the space clicked_

_A player places a card adjacent to a card with a lower number than the card's number / The previously placed card is captured by the player_

_A player places a card adjacent to a card with a higher number than the card's number / Nothing happens_

_A player places a card adjacent to a card with the same number as the card's number / Nothing happens_

_A game ends in a tie and sudden death is toggled / Cards are re-dealt to each player based on which were captured. The red player will move first now_

![ComponentStructure](./tt-gameplay.png)

## Technologies Used
* HTML
* CSS
* C#
* .NET
* Jquery
* React
* EF core
* MySQL

### License
This software is licensed under the MIT license

Copyright (c) 2019 **_Jared Farkas, Darrion Gering, Liz Kelley_**
