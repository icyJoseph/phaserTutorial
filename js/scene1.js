class Scene1 extends Phaser.Scene {
  constructor() {
    super({
      key: "Scene1"
    });
  }

  preload() {
    this.load.image("background", "assets/background.jpg");
    this.load.image("heart", "assets/heart.png");
  }

  create() {
    this.image = this.add.image(400, 300, "background");

    this.input.keyboard.on("keyup_D", () => (this.image.x += 10));

    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    this.input.on("pointerdown", event => {
      this.image.x = event.x;
      this.image.y = event.y;
    });

    this.input.keyboard.on("keyup_P", () => {
      var physicsImage = this.physics.add.image(400, 300, "heart");
      physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100, 100), -300);
    });

    this.input.keyboard.on("keyup", event => {
      if (event.key === "2") {
        this.scene.start("Scene2");
      }
    });
  }

  update(delta) {
    if (this.key_A.isDown) {
      this.image.x--;
    }
  }
}
