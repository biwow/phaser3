import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene'})
    this.cursors = null
    this.lancelot = null
  }

  create () {
    this.cameras.main.setBounds(0, 0, 720 * 5, 176);
    for (let x = 0; x < 5; x++)
    {
      this.add.image(720 * x, 0, 'bg').setOrigin(0);
    }
    // 添加图片
    this.anims.create({
      key: 'stop',
      frames: this.anims.generateFrameNames('knight', { prefix: 'idle/frame', start: 0, end: 5, zeroPad: 4 }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNames('knight', { prefix: 'run/frame', start: 0, end: 7, zeroPad: 4 }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'attack',
      frames: this.anims.generateFrameNames('knight', { prefix: 'attack_A/frame', start: 0, end: 13, zeroPad: 4 }),
      frameRate: 4,
      repeat: -1
    });

    this.anims.create({
      key: 'attack2',
      frames: this.anims.generateFrameNames('knight', { prefix: 'attack_B/frame', start: 0, end: 13, zeroPad: 4 }),
      frameRate: 4,
      repeat: -1
    });

    this.lancelot = this.physics.add.sprite(150, 150, "knight").setOrigin(0)

    this.lancelot.setOrigin(0.5, 1);
    this.lancelot.setScale(2);

    this.cameras.main.startFollow(this.lancelot, true);

    //  输入事件
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update () {
    if (this.cursors.left.isDown)
    {
      this.lancelot.play('attack', true);
    }
    else if(this.cursors.right.isDown)
    {
      this.lancelot.setVelocityX(160);
      this.lancelot.play('run', true);
    }
    else if(this.cursors.up.isDown)
    {
      this.lancelot.play('attack2', true);
    }
    else
    {
      this.lancelot.setVelocityX(0);
      this.lancelot.play('stop', true);
    }
  }
}
