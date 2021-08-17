canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greycar_width = 75;
greycar_height = 150;

background_image = "parkingLot.jpg";
greycar_image = "car.png";

//greycar_x = 75;
//greycar_y = 325;
greycar_x = 5;
greycar_y= 225;

function add() {
	background_imgTag = new Image(); 				//defining a variable with a new image
	background_imgTag.onload = uploadBackground; 	// setting a function, onloading this variable
	background_imgTag.src = background_image;   	// load image

	greycar_imgTag = new Image(); 				//defining a variable with a new image
	greycar_imgTag.onload = uploadgreycar; 	// setting a function, onloading this variable
	greycar_imgTag.src = greycar_image;  		 // load image

}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreycar() {
	ctx.drawImage(greycar_imgTag, greycar_x,greycar_y, greycar_width, greycar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greycar_y >=0)
	{
		greycar_y = greycar_y - 10;
		console.log("When up arrow is pressed,  x = " + greycar_x + " | y = " +greycar_y);
		 uploadBackground();
		 uploadgreycar();
		
	}
}

function down()
{
	if(greycar_y <=350)
	{
		greycar_y =greycar_y+ 10;
		console.log("When down arrow is pressed,  x = " + greycar_x + " | y = " +greycar_y);
		uploadBackground();
		uploadgreycar();
		
	}
}

function left()
{
	if(greycar_x >= 0)
	{
		greycar_x =greycar_x - 10;
		console.log("When left arrow is pressed,  x = " + greycar_x + " | y = " +greycar_y);
		uploadBackground();
		 uploadgreycar();
		
	}
}

function right()
{
	if(greycar_x <= 750)
	{
		greycar_x =greycar_x + 10;
		console.log("When right arrow is pressed,  x = " + greycar_x + " | y = " +greycar_y);
		uploadBackground();
		uploadgreycar();
		
   }
}
