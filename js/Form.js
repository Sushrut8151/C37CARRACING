class Form{
    constructor(){
     this.input = createInput("Name");
     this.button = createButton("Play");
     this.greeting = createElement("h3");

    }
      hideform(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide(); 
    
    }
 display(){
     var title = createElement("h2");
     title.html("CAR RACING");
     title.position(130,0);


     // creating inputs
     
     this.input.position(130,160);
     this.button.position(250,200);

    //creating mouse pressed function
    this.button.mousePressed(()=>{
        this.button.hide();
        this.input.hide(); 
         player.name = this.input.value();
         playerCount = playerCount + 1;
         player.index = playerCount;
         player.update();
         player.updateCount(playerCount);
         this.greeting.html("HELLO"+player.name);
         this.greeting.position(130,160);
     });
 }   
 
}