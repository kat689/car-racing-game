var ball,position;
var database;
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    console.log(database)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    bposition=database.ref('ball/position')
    bposition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
function readPosition(data){
position=data.val()
console.log(position.x)
ball.x=position.x
ball.y=position.y
}
function changePosition(x,y){
    database.ref('ball/position').set({
 x:position.x+x,
 y:position.y+y


    }
    )
}
function showError(){
    console.log("error")
}
