import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  create () {
    // 添加图片
    this.add.image(400, 300, 'sky')
    // 添加文字
    this.showMsg = this.add.text(16, 16, 'Hello Phaser!',
        { fontSize: '32px', fill: '#fff' });
    // 添加声音
    let music = this.sound.add('thud')
    // 设置循环播放
    music.loop = true;
    // 播放声音
    music.play();
    // 添加视频
    let video = this.add.video(0, 0, "trailer")
    // 设置循环播放
    video.setLoop(true)
    // 播放视频
    video.play();
  }

  update () {
  }
}
