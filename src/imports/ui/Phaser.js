class PhaserJS{
	//phaser requires you to load phaserJS externally first to use it with catamaranJS.

   /**
   * Represents PhaserJS integration into Catamaran window.CATAMARAN.ui.tow.PhaserJS for use requires orginal constructor to have usesPhaser enabled. Requires
   * Phaser to be included and loaded before this can be intialized. The goal of this is to speed up the use of PhaserJS by creating helpers, json obj for loading of scenes.
   * @constructor
   * 
   */

	constructor() {
            this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-stage', { preload: self.preload, create: self.create, update: self.update });
	}	
    //http://www.html5gamedevs.com/topic/7281-creating-a-progressbar/
    preload() {
        this.preloadBar = game.add.graphics(0, 50);
        this.preloadBar.lineStyle(3, 0xffffff, 1);
        this.preloadBar.moveTo(0, 0);
        this.preloadBar.lineTo(game.width, 0);
        this.preloadBar.scale.x = 0; // set the bar to the beginning position
    }

    loadUpdate() {
      // every frame during loading, set the scale.x of the bar to the progress (an integer between 0
      // and 100) divided by 100 to give a float between 0 and 1
      this.preloadBar.scale.x = game.load.progress * 0.01;
    }


    create() {
        
    }

    update() {
        
    }
}

module.exports = PhaserJS;