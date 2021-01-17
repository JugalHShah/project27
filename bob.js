class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		//this.image=loadImage("paper_img.png");
		World.add(world, this.body);
		

	}
	display()
	{
			
			var bobpos=this.body.position;		
			
			push()
			translate(bobpos.x, bobpos.y);
			elipseMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
            //image(this.image,0,0,this.r);
            circle(pos.x,pos.y,20)
			pop()
			
	}

}