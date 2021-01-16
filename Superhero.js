class Superhero{
    constructor(x,y){
        var options={
            density:1,
            frictionAir:1
        }
        this.body=Bodies.circle(x,y,50,options);
        this.radius=50
        this.x=x;
        this.y=y;
        this.image=loadImage("images/Superhero-02.png")
        World.add(world,this.body);
        
    }
    display(){
        fill("orange");
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,400,150);
    }
}