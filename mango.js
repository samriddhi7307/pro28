class mango  {
    constructor(x,y,width,height){
        var op={
            isStatic:true,
            restitution:0,
            density:1,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height);
        this.width = width;
        this.height = height;
      this.image = loadImage("mango.png");
    }
  
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
  }