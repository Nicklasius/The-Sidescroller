class Skud {     // Classen med alle dens egenskaber
    constructor() {
        this.r = 30;
        this.x = ironman.x;
        this.y = ironman.y;
        this.alive = true;
    }

    
    move() {
       this.x += 30;
    }

    hits(fjende) {  
        return collideRectRect(this.x, this.y, 50, 50, fjende.x, fjende.y, 50, 50);
     }

    show() {
        fill(50);
        rect(this.x, this.y, 30, 30);
    }
}