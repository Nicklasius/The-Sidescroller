class Ironman {     // Classen med alle dens egenskaber
    constructor() {
        this.r = 150;
        this.x = 50;
        this.y = height - 100;
        this.vy = 0;
        this.gravity = 1;
    }

    jump() {
        if (this.y == height - 100) { // tjekker om ironman er på sin orginale position
        this.vy = - 25;  // giver en vector med en værdi
        }
    }
    // tjekker om ironman rammer en fjende og giver en true/false command tilbage
    hits(fjende) {  
       return collideRectRect(this.x, this.y, 50, 50, fjende.x, fjende.y, 50, 50);
    }
    // giver ironman mulighed for at bevæge sig med y kraft og gravity
    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - 100);
    }

    show() {
        image(iImg, this.x, this.y, 50, 50);
    }
}