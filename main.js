function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(900,92);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
song = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
function preload(){
    song = loadSound("music.mp3");
    song = loadSound("music.wav");
}

function download(){

}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
    
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
    }
} 
