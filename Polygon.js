class Hexagon{
    constructor(x,y,width,height,angle){
        var options={
            'frictionAir' : 0.04,
            'density' : 0.1
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.image=loadImage("hexagon.png");
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,20,20)
        ellipse(0,0,this.width,this.height)
        pop()
    }
}