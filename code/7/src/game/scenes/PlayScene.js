import {Scene, Display} from 'phaser'

export default class PlayScene extends Scene {
    constructor() {
        super({key: 'PlayScene'})
    }

    create() {

        this.barbarian = this.add.image(0,0,"barbarian").setOrigin(0)
        this.bear1 = this.add.image(0,0,"bear").setScale(0.4)
        this.bear2 = this.add.image(0,0,"bear").setScale(0.4)
        this.bear3 = this.add.image(0,0,"bear").setScale(0.4)
        this.bear4 = this.add.image(0,0,"bear").setScale(0.4)
        this.bear5 = this.add.image(0,0,"bear").setScale(0.4)
        this.bear6 = this.add.image(0,0,"bear").setScale(0.4)
        this.bear7 = this.add.image(0,0,"bear").setScale(0.4)
        this.bear8 = this.add.image(0,0,"bear").setScale(0.4)
        this.bear9 = this.add.image(0,0,"bear").setScale(0.4)
        // 相对整个场景居中
        Display.Align.In.Center(this.barbarian, this.add.zone(400, 300, 800, 600));

        //  bear位于barbarian底部居中
        Display.Align.In.BottomCenter(this.bear1, this.barbarian);
        //  bear位于barbarian左下
        Display.Align.In.BottomLeft(this.bear2, this.barbarian);
        //  bear位于barbarian右下
        Display.Align.In.BottomRight(this.bear3, this.barbarian);
        //  bear位于barbarian上部居中
        Display.Align.In.TopCenter(this.bear4, this.barbarian);
        //  bear位于barbarian左上
        Display.Align.In.TopLeft(this.bear5, this.barbarian);
        //  bear位于barbarian右上
        Display.Align.In.TopRight(this.bear6, this.barbarian);
        //  bear位于barbarian左部居中
        Display.Align.In.LeftCenter(this.bear7, this.barbarian);
        //  bear位于barbarian右侧部居中
        Display.Align.In.RightCenter(this.bear8, this.barbarian);
        //  bear位于barbarian居中
        Display.Align.In.Center(this.bear9, this.barbarian);
    }

    update() {
    }
}
