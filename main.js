nose_x=0;
nose_y=0;

function preload(){
    mushy=loadImage('m.png');
}

function setup(){
    canvas=createCanvas(450,400);
    canvas.position(400,150);
    video=createCapture(VIDEO);
    video.size(450,400);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("Nose X="+results[0].pose.nose.x);
        console.log("Nose Y="+results[0].pose.nose.y);

        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
    }
}

function draw(){
    image(video,0,0,450,400);
    image(mushy,nose_x-30,nose_y,65,50);
}

function take_snapshot(){
    save('myClownNoseFilter.png');
}