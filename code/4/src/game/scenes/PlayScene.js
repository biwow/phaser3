import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene'})
  }

  create () {
    // 添加图片
    this.add.image(0,0,"background").setOrigin(0)
    this.add.image(200,20,"card_back").setOrigin(0).setScale(0.4)
    this.add.image(280,20,"card_back").setOrigin(0).setScale(0.4)
    this.add.image(360,20,"card_back").setOrigin(0).setScale(0.4)
    this.add.image(0,0,"fighter_hero").setOrigin(0).setScale(0.8)
    this.add.image(0,470,"fighter_hero").setOrigin(0).setScale(0.8)
    this.add.image(150,500,"fishman_baby").setOrigin(0).setScale(0.4)
    this.add.image(230,500,"freshwater_crocodile").setOrigin(0).setScale(0.4)
  }

  update () {
  }
}
