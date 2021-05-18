var canvas;
var gameState = 0;
var playerCount;
var database;
var form;
var game;
var player;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}
function draw(){

}