const nextIndexInArray = (arr, el) => {
  const idx = arr.indexOf(el);
  return (idx < 0 || idx >= arr.length) ? 0 : idx + 1;
}

export class Clock {
  static get sizes () {
    return [2, 3, 4, 5, 6, 8, 10, 12];
  }

  static get themes () {
    return this._themes
  }

  constructor ({ theme, size, progress } = {}) {
		this.themesPromise = FilePicker.browse("data", "modules/lancer-clocks/themes").then(data => {
		  let tempDirs = data.dirs;
		  let newDirs = [];
		  tempDirs.forEach((dirItem) => {
		    let newDirItem = dirItem.replace("modules/lancer-clocks/themes/","");
		    newDirs.push(newDirItem);
		  });
		  this._themes = newDirs;
		  this._themePaths = tempDirs;
		});
		let extraPath = game.settings.get("lancer-clocks","extraPaths")
		if (!(extraPath.endsWith("/"))) {
			extraPath = extraPath+"/"
		}
		//console.log(extraPath)
		this.extraThemesPromise = FilePicker.browse("data",extraPath).then(data => {
			let tempExtraDirs = data.dirs;
			let newExtraDirs = [];
			tempExtraDirs.forEach((extraDirItem) => {
				let newExtraDirItem = extraDirItem.replace(extraPath,"");
				newExtraDirs.push(newExtraDirItem);
			})
			//console.log(tempDirs);
			this._extraThemePaths = tempExtraDirs;
			this._extraThemes = newExtraDirs;
		}).catch(err => {
			console.error(err)
		});
    const isSupportedSize = size && Clock.sizes.indexOf(parseInt(size)) >= 0;
    this._size = isSupportedSize ? parseInt(size) : Clock.sizes[0];

    const p = (!progress || progress < 0) ? 0 : progress < this._size ? progress : this._size;
    this._progress = p || 0;

    this._theme = theme || this._themes?.[0] || "lancer_wallflower_green";
	//let testingThemes = FilePicker.browse("data", "modules/lancer-clocks/themes").then(data => {console.log(data)});
	//console.log(testingThemes);
  }

  get theme () {
    return this._theme;
  }

  get size () {
    return this._size;
  }

  get progress () {
    return this._progress;
  }

  get image () {
    return { 
      //img: `/modules/lancer-clocks/themes/${this.theme}/${this.size}clock_${this.progress}.png`,
      width: 350,
      height: 350
    };
  }

  get flags () {
    return {
      clocks: {
        theme: this._theme,
        size: this._size,
        progress: this._progress
      }
    };
  }

  cycleSize () {
    return new Clock({
      theme: this.theme,
      size: Clock.sizes[nextIndexInArray(Clock.sizes, this.size)],
      progress: this.progress
    });
  }

  cycleTheme () {
    return new Clock({
      theme: Clock._themes[nextIndexInArray(Clock._themes, this.theme)],
      size: this.size,
      progress: this.progress
    });
  }

  increment () {
    const old = this;
    return new Clock({
      theme: old.theme,
      size: old.size,
      progress: old.progress + 1
    });
  }

  decrement () {
    const old = this;
    return new Clock({
      theme: old.theme,
      size: old.size,
      progress: old.progress - 1
    });
  }

  isEqual (clock) {
    return clock
      && clock._progress === this._progress
      && clock._size === this._size
      && clock._theme === this._theme;
  }

  toString () {
    return `${this._progress}/${this._size} • ${this._theme}`;
  }
}
