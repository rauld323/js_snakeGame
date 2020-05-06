const cvs = document.getElementById('snakeCanvas');

const ctx = cvs.getContext('2d'); // This will allow to draw on the canvas

let box = 18;

//Loading Images and Audio Files
const lemon = new Image();
lemon.src = "img/lemon.png"; //Will show background image;

let audioName= new Audio();
audioName.src = "";
audioName.play();

const ground = new Image();
ground.src = "https://i.ytimg.com/vi/xKYX2r0-mkA/hqdefault.jpg";

let snake =[];
snake[0]= {x: 10* box, y:9* box};
snake[1] = { x: 8 * box, y:10* box };

let food = {
   x:Math.floor(Math.random()* 17 +1)*box,
   y:Math.floor(Math.random()* 15 +3)*box };

let score = 0;

function draw(){
    ctx.drawImage(lemon, 40, 50, 25, 25);
    ctx.drawImage(ground,0,0)
    for(let i = 0; i < snake.length; i++){
        ctx.fillStyle=(i == 0)? "blue":"green";
        ctx.fillRect(snake[i].x, snake[i].y, box,box);
        
        ctx.strokeStyle="red";
        ctx.strokeRect(snake[i].x, snake[i].y,box,box)
    }


}
let game = setInterval(draw,100);

//Draw Snake
ctx.fillStyle= "red";
ctx.fillRect(100, 300,30,30);
