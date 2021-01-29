class Fjende {      // Classen med alle dens egenskaber
    constructor() {
        this.r = 50;
        this.x = width;
        this.y = height - random(140, 350);
        
    }

   // her kan vi få classen Fjende til at bevæge sig
    move() {
        this.x -= 6 + speed;
        
    }
    // viser billedet
    show() {
        
        image(bImg, this.x, this.y, 50, 50);
        
    }
}