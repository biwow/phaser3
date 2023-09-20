import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'
import trailer from '@/game/assets/trailer.mp4'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' });
  }
  showMsg = null

  preload () {
    // 加载图片
    this.load.image("sky", sky)
    // 加载音频
    this.load.audio("thud", [thudMp3, thudOgg])
    // 加载视频
    this.load.video("trailer", trailer)
  }

  create () {    
    this.scene.start('PlayScene')
  }
}
