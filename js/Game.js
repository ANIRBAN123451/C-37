class Game{

constructor(){

}

getState(){
    var getStateRef=database.ref("gameState");
    getStateRef.on("value",(data)=>{gameState=data.val()});
}

update(state){
    database.ref("/").update({gameState: state});
}

//gameState 0- wait-start, gameState 1- play
async start(){
    if(gameState===0){
    player= new Player();
    var playerCountRef = await database.ref('playerCount').once("value");
    if(playerCountRef.exists()){
        playerCount= playerCountRef.val();
        player.getCount();
    }
    
    //form to be created
    form = new Form();
    form.display();
    }
}

play(){

    form.hide();
    textSize(30);
    text("GAME IS GOING TO START NOW",550,100)
    //CALLING STATIC FUNCTION USING CLASS NAME
    Player.getPlayerInfo(); //fill up the allPlayers=[ [names],[distances],[],[] ]
    if(allPlayers !== undefined){
        var display_y=130;//fixing my y postion
        for(var plr in allPlayers){
            if(plr=== "player"+player.index)
           { fill("red");}
            else
            {fill("black");}
        
            display_y= display_y+50;
            textSize(20);
    text(allPlayers[plr].name +":"+allPlayers[plr].distance, 220, display_y);
        }


       

    }

}





}