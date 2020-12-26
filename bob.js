class Bob
 {
  constructor(x, y, radius) 
  {
    var options = 
    {   
        'isStatic' :true,
        'restitution':0.1,
        'friction':0.5,
        'density':1.2
    }
    this.body = Matter.Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    push();
    ellipseMode(RADIUS);
    fill("orange");
    ellipse(pos.x, pos.y, this.radius, this.radius);
    pop();
  }
}