class   Sides{
    constructor(x,y,width,height){

var options= {

    isStatic:true
}
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
            World.add(world,this.body)
    }
display(){

    var map = this.body.position
    var angle= this.body.angle
  
    rectMode(CENTER)
fill("red")
rect(map.x,map.y,this.width,this.height)

}
    

    
};   



