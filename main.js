
var canvas = new fabric.Canvas("myCanvas");

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
   fabric.Image.fromURL(get_image, function (Img){
	   block_image_object = Img;
	   block_image_object.scaleToWidth(block_image_width);
	   block_image_object.scaleToHeight(block_image_height);
	   block_image_object.set({
		   top:block_y,
		   left:block_x
	   });
	   canvas.add(block_image_object);
   });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82')
   {
	   new_image("rr.jpg");
	   console.log("r Key Pressed");
   }
   if(keyPressed == '71')
   {
	   block_x = 130;
	   new_image("gr.png");
	   console.log("g Key Pressed");
   }
   
   if(keyPressed == '89')
   {
	   block_x =400;
	   new_image("yr.png");
	   console.log("y Key Pressed");
   }
   if(keyPressed == '80')
   {
	   block_x = 600;
	   new_image("pr.png");
	   console.log("p Key Pressed");
   }
   if(keyPressed == '66')
   {
	   block_x = 770;
	   new_image("br.png");
	   console.log("b Key Pressed");
   }
   if(keyPressed == '87')
   {
	   block_x = 930;
	   new_image("images.jpg");
	   console.log("w Key Pressed");
   }
}