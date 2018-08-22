class Scene1 extends Phaser.Scene {
  constructor() {
    super({
      key: "Scene1"
    });
  }

  preload() {
    this.load.image("background", "assets/background.jpg");
  }

  create() {
    this.image = this.add.image(400, 300, "background");

    this.input.keyboard.on("keyup_D", () => (this.image.x += 10));

    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    this.input.on("pointerdown", event => {
      this.image.x = event.x;
      this.image.y = event.y;
    });
  }

  update(delta) {
    if (this.key_A.isDown) {
      this.image.x--;
    }
  }
}
