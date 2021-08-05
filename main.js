noseX=0;
noseY=0;
difference=0;
leftWrist=0;
rightWrist=0;
function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 100);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    //document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px"; textSize(difference);
    background('#a6a6a6');
    document.getElementById("font_size").innerHTML = "Font size of the text will be = "+ difference +"px"; 
    textSize(difference);
    fill('#006e30');
    text('Baani', 50, 400);
}
function modelLoaded() {
    console.log("Model Loaded!");
    console.log("Posenet Initialized");
}
function  gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX ="+ noseX +"noseY ="+ noseY);

        leftWristx= results[0].pose.leftWrist.x;
        rightWristx= results[0].pose.rightWrist.x;

        difference= floor(leftWristx - rightWristx);
        console.log("difference is"+ difference);

        console.log("leftWrist ="+ leftWrist +"rightWrist ="+ rightWrist);
    }
}