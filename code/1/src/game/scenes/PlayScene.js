import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  create () {
    this.showMsg = this.add.text(16, 16, 'Hello Phaser!', { fontSize: '32px', fill: '#fff' });
  }

  update () {
  }
}
