class Kaktus {      // Classen med alle dens egenskaber
    constructor() {
        this.r = 50;
        this.x = width;
        this.y = 400;
        
    }

   // her kan vi få classen Kaktus til at "bevæge" sig
    move() {
        this.x -= 6 + speed;
        
    }
    // viser billedet
    show() {
        
        image(cImg, this.x, this.y, 50, 50);
        
    }
}