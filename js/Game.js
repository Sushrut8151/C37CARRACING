class Game {
constructor(){

}

getState(){
var getstateref = database.ref('gameState')
getstateref.on("value",function(data){
gameState  = data.val();
})

}
update(state){
    database.ref('/').update({
        gameState: state
    });

}
play()
{
    form.hideform();
    textSize(20);
    text("Game Starts",150,100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined)
    {
        var displaypos = 200;
        for(var i in allPlayers)
       {
            if(i === "player"+player.index) {
                fill("red");
            }
            else{
              fill("black");
            }
              displaypos = displaypos+20;
              textSize(15);
         text(allPlayer[i].name + ":" + allplayers[i].distance,120,displaypos);

       }
    }
    if(keyIsDown(UP_ARROW)&&player.index !== null){
     player.distance = player.distance+50;
     player.update();
    }
 }
async start(){
    if (gameState === 0){
        player = new Player();
        var playerCountref = await database.ref("playerCount").once("value");
        if(playerCountref.exists()){
            playerCount = playerCountref.val();
            player.getCount();
        }
       
        form = new Form();
        form.display();
    }
}
}