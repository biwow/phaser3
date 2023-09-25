import {Scene} from 'phaser'
import bear from '@/game/assets/xiong.png'
import up from '@/game/assets/up-bubble.png'
import down from '@/game/assets/down-bubble.png'

export default class BootScene extends Scene {
    constructor() {
        super({key: 'BootScene'});
    }

    preload() {
        // 加载图片素材
        this.load.image("bear", bear)
        this.load.image("up", up)
        this.load.image("down", down)
    }

    create() {
        this.scene.start('PlayScene')
    }
}
