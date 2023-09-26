import {Scene} from 'phaser'
import bear from '@/game/assets/bear.png'
import barbarian from '@/game/assets/barbarian.png'

export default class BootScene extends Scene {
    constructor() {
        super({key: 'BootScene'});
    }

    preload() {
        // 加载图片素材
        this.load.image("bear", bear)
        this.load.image("barbarian", barbarian)
    }

    create() {
        this.scene.start('PlayScene')
    }
}
