# Preface
This is a fork of the original [Blades in the Dark Clocks Module](https://github.com/troygoode/fvtt-clocks) to handle Lancer-focused clocks. This allows for any number of themes, so long as the guidelines in "Adding More Themes" are followed.

# Foundry VTT: Clocks

Create [Blades in the Dark](https://bladesinthedark.com/)-esque [progress clocks](https://bladesinthedark.com/progress-clocks) within [Foundry VTT](https://foundryvtt.com/). Supports both ad hoc Tile Clocks for use in a single scene and long-lasting Actor Clocks.

## Installation

Install manually with [this Manifest URL](https://raw.githubusercontent.com/Argonius-Angelus/fvtt-clocks/main/module.json):

```
https://raw.githubusercontent.com/Argonius-Angelus/fvtt-clocks/main/module.json
```

## Adding More Themes

With update L1.0.7, there is now support for user created themes. To add a theme, you must follow the following guidelines:
1) Any spaces or special punctuation in a theme folder needs to be changed to an underscore (\_). While it is possible that a theme with spaces or punctuation could work, replacing them with underscores is the most reliable method.
2) Clocks inside the folder must be labeled as "\[size]clock\_\[progress].png". For example, "12clock_3.png".
3) Should a given clock theme not have sizes 2, 3, 4, 5, 6, 8, 10, or 12, then you must be willing to either use placeholder assets, create more to cover the missing size values (and appropriate progress for each), or be willing to handle the fact that said clock will be a broken image file.

## License

This module is available as open source under the terms of the MIT License.

[MIT License](http://www.opensource.org/licenses/mit-license.php)
