import {Scene, Math} from 'phaser'

export default class PlayScene extends Scene {
    constructor() {
        super({key: 'PlayScene'})
    }

    info;
    upButton;
    downButton;
    alive = 0
    total = [];

    create() {
        // 统计信息展示
        this.info = this.add.text(30, 50, '', {font: '32px 楷体', fill: '#fff'});
        // 添加按钮和事件
        this.upButton = this.add.image(400, 100, 'up').setInteractive({useHandCursor: true});
        this.downButton = this.add.image(600, 100, 'down').setInteractive({useHandCursor: true});
        this.upButton.on('pointerup', () => {
            this.alive++;
            this.events.emit('addImage', Math.Between(50, 800), Math.Between(200, 500), this.alive - 1);
        });
        this.downButton.on('pointerup', () => {
            if (this.alive > 0) {
                this.alive--;
            }
            this.events.emit('reduceImage', this.alive)
        });
        //  设置两个事件
        this.events.on('addImage', this.addHandler, this);
        this.events.on('reduceImage', this.reduceHandler, this);
        //  Emit it a few times with varying arguments
    }

    update() {
        this.info.setText('数量: ' + this.alive);
    }

    // 增加触发逻辑
    addHandler(x, y, z) {
        this.total[z] = this.add.image(x, y, 'bear');
    }

    // 减少触发逻辑
    reduceHandler(z) {
        this.total[z].setVisible(false);
    }
}
