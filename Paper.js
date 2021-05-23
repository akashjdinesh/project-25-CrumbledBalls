class Paper
{
	constructor(x,y,r)
	{
		var options={
	       ' isStatic': false,
			'restitution': 0.3,
			'friction': 0,
			'density': 1.2

			}

		this.x=x;
		this.y=y;
		this.r=r;
		this.image= loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
		World.add(world, this.body);

	}
	display()
	{
			
			var paperPosition=this.body.position;		
			var angle= this.body.angle;
			push()
			translate(paperPosition.x, paperPosition.y);
			rotate(angle);
			imageMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill(255);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}

}