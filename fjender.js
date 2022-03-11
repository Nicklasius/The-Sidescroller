class Fjende {      // Classen med alle dens egenskaber
    constructor() {
        this.r = 25;
        this.x = width;
        this.y = height - random(240, 450);
        
    }

   // her kan vi få classen Fjende til at bevæge sig
    move() {
        this.x -= 14 + speed;
        
    }
    // viser billedet
    show() {
        
        image(bImg, this.x, this.y, 50, 50);
        
    }
}