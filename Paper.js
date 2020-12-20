class Paper{
    constructor(x,y,r){
         var options={
            'isStatic':false,
             'restitution':0.3,
             'friction': 0.5,
             'density':1.2
         }
         this.body = Bodies.circle(x,y,r/2,options)
         World.add(world,this.body)
         this.r = r;  
        
     }
     display(){
        var pappos = this.body.position
        
        push();
        translate(pappos.x,pappos.y)
        rectMode(CENTER)
        strokeWeight(3);
        fill("pink")
         ellipse(0,0,this.r,this.r)
         pop();

     }


}