import Phaser from 'phaser'
import BootScene from '@/game/scenes/BootScene'
import PlayScene from '@/game/scenes/PlayScene'

function launch(containerId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: containerId,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    scene: [BootScene, PlayScene],
    title: 'Shock and Awesome',
    version: '1.2b'
  })
}

export default launch
export { launch }