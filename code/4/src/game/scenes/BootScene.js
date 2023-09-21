import { Scene } from 'phaser'
import background from '@/game/assets/background.png'
import card_back from '@/game/assets/card_back.png'
import fighter_hero from '@/game/assets/fighter_hero.png'
import fishman_baby from '@/game/assets/fishman_baby.png'
import freshwater_crocodile from '@/game/assets/freshwater_crocodile.png'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' });
  }
  showMsg = null

  preload () {
    // 加载图片素材
    this.load.image("background", background)
    this.load.image("card_back", card_back)
    this.load.image("fighter_hero", fighter_hero)
    this.load.image("fishman_baby", fishman_baby)
    this.load.image("freshwater_crocodile", freshwater_crocodile)
  }

  create () {    
    this.scene.start('PlayScene')
  }
}
