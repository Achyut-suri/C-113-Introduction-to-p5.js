function Preload()
{

}

function setup()
{
canvas=createCanvas(640 , 480);
canvas.position(150 , 150);
video=createCapture(VIDEO);
video.hide();
}

function draw()
{
image(video, 15 , 10 , 600 , 480);
fill(255,0,0);
circle(100 , 140,40);
}