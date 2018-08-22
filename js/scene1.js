class Scene1 extends Phaser.Scene {
  constructor() {
    super({
      key: "Scene1"
    });
  }

  preload() {
    this.load.image("GFS", "assets/background.jpg");
  }

  create() {
    this.image = this.add.image(400, 300, "GFS");
  }

  update() {}
}
