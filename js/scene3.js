class Scene3 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene3" });
  }

  preload() {
    this.load.audio("test", "assets/sword.wav");
  }

  create() {
    this.soundFX = this.sound.add("test", { loop: "true" });
    this.soundFX.play();
    this.soundFX.rate = 1;

    this.input.keyboard.on("keydown_L", () => {
      this.soundFX.loop = !this.soundFX.loop;
      if (this.soundFX.loop) {
        this.soundFX.play();
      }
    });
    this.input.keyboard.on("keydown_P", () => {
      if (this.soundFX.isPlaying) {
        this.soundFX.pause();
      } else {
        this.soundFX.resume();
      }
    });
  }
}
