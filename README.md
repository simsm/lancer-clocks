# Preface
This is a fork of the original [Blades in the Dark Clocks Module](https://github.com/troygoode/fvtt-clocks) to handle Lancer-focused clocks. This allows for any number of themes, so long as the guidelines in "Adding More Themes" are followed.

# Foundry VTT: Clocks

Create [Blades in the Dark](https://bladesinthedark.com/)-esque [progress clocks](https://bladesinthedark.com/progress-clocks) within [Foundry VTT](https://foundryvtt.com/). Supports ~~both ad hoc Tile Clocks for use in a single scene and~~ long-lasting Actor Clocks.

## Installation

Install manually with [this Manifest URL](https://raw.githubusercontent.com/Argonius-Angelus/fvtt-clocks/main/module.json):

```
https://raw.githubusercontent.com/Argonius-Angelus/fvtt-clocks/main/module.json
```
# Known Issues
1) Tiles currently do not correctly cycle themes. As a result theme switching for tiles will be disabled.
2) Tiles do not work as of version L1.0.11. This is an intentional disabling of the activation of that part of the module due to compatability issues with Foundry 0.8.X. If you wish to attempt to get the Tiles to work in Foundry 0.8.X then you must first uncomment the lines in hooks.js, then work on improving the tiles.js code to be compatible with Foundry 0.8.X. I wholly believe such an endeavour would require a complete rewrite, which is honestly more than I am willing to do currently when the Actor portion of still works with no issues.


## Creating Clock NPC Actors
1) Create a new NPC Actor.
2) Open the Actor's sheet.
3) Click the button labelled "Sheet" with a cog next to it.
4) Change the NPC Sheet Type to lancer.ClockSheet.

## Adding More Themes

With update L1.0.8, there is now support for user created themes. To add a theme, you must follow the following guidelines:
1) A config option to select where a user's custom themes are stored can now be found in the module settings under "Lancer Clocks". The default location is "lancer-clocks".
2) Any spaces or special punctuation in a theme folder needs to be changed to an underscore (\_). While it is possible that a theme with spaces or punctuation could work, replacing them with underscores is the most reliable method. These theme folders must have unique names as well. "lancer_gms_red", "lancer_gms_red_grey", "lancer_wallflower_green" and "lancer_wallflower_green_grey" are reserved for the module itself and cannot be used as custom names.
3) Clocks inside the folder must be labeled as "\[size]clock\_\[progress].png". For example, "12clock_3.png".
4) Should a given clock theme not have sizes 2, 3, 4, 5, 6, 8, 10, or 12, then you must be willing to either use placeholder assets, create more to cover the missing size values (and appropriate progress for each), or be willing to handle the fact that said clock will be a broken image file.
5) It is recommended you also store your clocks elsewhere, as updating the module in foundry deletes any extra themes that aren't part of the github repository.

## License

This module is available as open source under the terms of the MIT License.

[MIT License](http://www.opensource.org/licenses/mit-license.php)
