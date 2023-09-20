import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  create () {
    // 添加图片
    let player = this.physics.add.sprite(200, 200, 'flash');
    player.setScale(2); // 放大倍数

    this.anims.create({
      key: 'show',
      frames: this.anims.generateFrameNumbers('flash', { start: 0, end: 4 }),
      frameRate: 4,
      repeat: -1
    });
    player.anims.play('show', true);
  }

  update () {
  }
}
