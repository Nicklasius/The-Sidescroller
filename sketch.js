let ironman;
let fjende = [];
let skud = [];
let kaktus = [];
let time = 0;
let timeC = 0;
let speed = 0;
let score = 0;
let hits = false;
let ramt = false;
const col = [220,110,0];
let menu = 0;
//------Billeder---------------------------------------
let img2;
let img1; 
let iImg;
let bImg;
let cImg;

//------Funktioner-------------------------------------

function preload() { // Bruges til at loade billiderne inden spillet så de loades ordentligt
iImg = loadImage('libraries/ironman.png')
bImg = loadImage('libraries/bird.png')
img2 = loadImage('libraries/background.jpg')
img1 = loadImage('libraries/scene.png');
cImg = loadImage('libraries/kaktus.png');
}

function setup() {
    createCanvas(windowWidth,500);
    
}

function resetGame() {  // functionen bruges til at resette gamet. Det nulstiller bare spillet uden at re-fresh siden
    ironman = new Ironman(); 
    fjende.length = 0;
    kaktus.length = 0;
    skud.length = 0;
    speed = 0;
    score = 0;
       
}

function keyPressed() { // Kalder jump functionen hvis ' ' (spacebar) trykkes ned
    if (key == 'W') {
        ironman.jump();
    }
    if (key == ' ') {
      skud.push(new Skud);
    }
    
}


function draw() {
    
    //print(mouseX, mouseY)
    background(255);
    fill(100, 210, 0);
    rect(50, 50, 200, 75);
    fill(255, 0, 155);
    rect(50, 200, 200, 75);
    fill(255, 0, 0);
    rect(50, 350, 200, 75);
    textSize(50)
    fill(255);
    text('START', 70, 106);
    text('EXIT', 94, 406);
    textSize(26);
    text('INSTRUCTIONS', 52, 248);
    image(img2, 400, 0, 450, 550);
    
    // Credits!
    if (menu == 1) {
        background(0, 255, 0)
        fill(0)
        textSize(20)
        text('Right Click to return to MENU', 525, 30)
        if (mouseButton == RIGHT) {
          menu = 0;
          
        }
      }


    if (menu == 2) {
        background(img1);
        for (let k of kaktus) {
          k.show();
          k.move();
          if (ironman.hits(k)) {
            console.log("SPIKED!");
            menu = 3;
          }
        }
       
        for (let f of fjende) { // gør det nemmere at kalde Fjende classen
            f.move();
            f.show();
            if (ironman.hits(f)) { //Tjekker om ironman rammer en fjende
                console.log("hit!")
                menu = 3;
            }

            
        }
        for (let s of skud) {
          s.show();
          s.move();
          
        }
        for (let s of skud) {
          for (let f of fjende) {
            if (s.alive == false) {
             // s.remove();
            }
            if (s.hits(f)) {
              console.log("fjende ramt!");
            }
          }
        }
    display();
    ironman.show();
    ironman.move();
    time += 1;
    timeC += 1;
    score += 1;
    speed += 0.005;
    //hit = collideRectRect(this.)
    if (random(1) < 0.01 && time > 100 ) { // laver et diceroll (chancen er 1 ud af 100, 60 gange i sekundet, påbegyndes et sekund efter sidste spawn)
        fjende.push(new Fjende()); //laver en ny fjende i arrayet
        console.log("Ny fjende")
        time = 0;
       }
       if (random(1) < 0.05 && timeC > 200 ) { // laver et diceroll (chancen er 1 ud af 200, 60 gange i sekundet, påbegyndes 2 sekunder efter sidste spawn)
        kaktus.push(new Kaktus()); //laver en ny kaktus i arrayet
        console.log("Stikkende!")
        timeC = 0;
       }
}
// her vises end-screen hvis kravet opfyldes
if (menu == 3) {
    Save();
    background(0);
    fill (col);
    textAlign (CENTER,CENTER);
    text ("Highscore: " +localStorage.getItem("score"), width/2,height/2 - 50);
    text ("Game Over", width/2,height/2);
    text ("Score: " +score, width/2, height/2 + 50);
    text ("Press ENTER to return to the Main Menu", width/2, height/2+100);
    //textSize (26);
    if (keyIsDown(13)) {
         menu = 0;
         setup();
      
      }
    

}
}

function display() {
    fill(255); 
    textSize (20)
    text("Score: "+score, width-120, 30); // Viser current score løbende
    
}
// for at kunne gemme sin højeste score, også efter genstart af browser eller pc
function Save(){
    
    if (localStorage.getItem("score") < score) {
        localStorage.setItem("score", score);    
    }
}


function mouseClicked() {
    if (menu == 0) {
      if (mouseX < 200 && mouseX > 50) {
        if (mouseY < 125 && mouseY > 50) {
            resetGame();
            menu = 2
          
        }
        if (mouseY < 275 && mouseY > 200) {
          menu = 1
        }
        if (mouseY < 425 && mouseY > 350) {
          menu = 1
        }
      }
    }
  }