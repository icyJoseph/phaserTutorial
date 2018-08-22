class Scene2 extends Phaser.Scene {
  constructor() {
    super({
      key: "Scene2"
    });
  }

  create() {
    this.text = this.add.text(0, 0, "Welcome to Scene 2", {
      font: "40px Impact"
    });

    var tween = this.tweens.add(
      {
        targets: this.text,
        x: 200,
        y: 250,
        duration: 2000,
        ease: "Elastic",
        easeParams: [1.5, 0.5],
        delay: 1000,
        onComplete: (src, tgt) => {
          tgt[0].x = 0;
          tgt[0].y = 0;
          tgt[0].setColor("red");
        }
      },
      this
    );

    this.key_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
  }

  update(delta) {
    if (this.key_1.isDown) {
      this.scene.start("Scene1");
    }
  }
}
