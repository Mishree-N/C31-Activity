//create pig class using base class
class Pig extends baseClass {

    constructor (x,y){

        
        //create body
        super(x,y,50,50);
        //add image
        this.image=loadImage("sprites/enemy.png");
        //give maximum visibility
        this.Visibilty=255;

    }
    display (){
        
        //if bird hits pig soft
        if (this.body.speed < 3) {

            //show pig
            super.display ();

          //else if bird hits pig hard
        } else {

            //remove pig body
            World.remove (myWorld, this.body);
            
            push ();
            //make visibility slowly decrease
            this.Visibility = this.Visibility-3;
            //tint to decrease visibility
            tint (255,this.Visibility);
            //show image (visibility of image will decrease)
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
            pop ();
        }
    }
}







