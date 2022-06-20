import Bomb  from './bomb.js';
import Explosion from './explosion.js';

export default class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, id) {
        super(scene, x, y);
        this.scene = scene;
        this.id = id;
        this.name = "name";
        this.isAlive = true;

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.setPosition(x,y);
        this.setTexture('player');
        this.body.setCollideWorldBounds(true);
        this.setScale(1);


    }
    
    destroyObj(obj){
        obj.setActive(false);
        obj.setVisible(false);
    }
}