class Box{
    constructor(x,y){
        var options={}
       this.body=Bodies.rectangle(x,y,50,50,options);
       this.x=x;
       this.y=y;
    World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,50*1,50*1)
        pop();
    }
}

class BoxStrip{
    constructor(x,y){
        var options={
            density:0.00001,
            isStatic:true
        }
       this.body=Bodies.rectangle(x,y,500,50,options);
       this.x=x;
       this.y=y;
    World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,500*1,50*1)
        pop();
    }
}