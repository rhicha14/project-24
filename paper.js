class Paper {
    constructor(x, y, diameter) {
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:0.3,
          density:1.2
      }
      this.body = Bodies.circle(x, y, diameter, options);
      this.diameter=diameter;
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(RADIUS);
      image(this.image,0,0,this.diameter,this.diameter);
      pop();
    }
  }
  