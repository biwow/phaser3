import { Scene } from 'phaser'
import knight from '@/game/assets/knight.png'
import knightJson from '@/game/assets/knight.json'
import bg from '@/game/assets/backscroll.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' });
  }
  showMsg = null

  preload () {
    // 加载图片素材
    this.load.image('bg', bg);
    this.load.atlas('knight', knight, knightJson);
  }

  create () {    
    this.scene.start('PlayScene')
  }
}
