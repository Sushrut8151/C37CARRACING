var canvas,backgroundImg;
var database;
var form , player , game;
var allPlayers;
var distance = 0;
var gameState = 0;
var playerCount;
function setup(){
  canvas = createSprite(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw(){
if (playerCount === 4){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}
}

