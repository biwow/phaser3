import { Scene } from 'phaser'
import sprite from '@/game/assets/sprite.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' });
  }
  showMsg = null

  preload () {
    // 加载动画素材
    this.load.spritesheet('flash', sprite, { frameWidth: 23, frameHeight: 26 });
  }

  create () {    
    this.scene.start('PlayScene')
  }
}
