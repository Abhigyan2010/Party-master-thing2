song1="";
song2="";
song3="";
song4="";
song5="";
function preload(){
    song1=loadSound("Geomtry Dash _ Stereo Madness (FULL VER) All Coin - ♬ Partition (320  kbps)");
    song2=loadSound("DJVI - Dry Out (320  kbps)");
    song3=loadSound("07.Geometry Dash Jumper");
    song4=loadSound("06.DJVI - Can't Let Go");
    song5=loadSound("02. DJVI - Back On Track");   
}
function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,350,350);
}