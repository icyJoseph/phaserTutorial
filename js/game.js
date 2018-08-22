var config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 720,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [Scene1, Scene2]
};

var game = new Phaser.Game(config);
