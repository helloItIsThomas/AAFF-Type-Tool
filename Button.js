
class myButton {
    constructor(_id, _x, _y) {
      this.id = _id;
      this.x = _x;
      this.y = _y;
      this.w = 20.0;
      this.h = 20.0;
      this.fill = color(255, 0, 0);
    }
  
    checkClick() {
      if (mouseX > this.x && mouseX < this.x + this.w &&
        mouseY > this.y && mouseY < this.y + this.h) {
            console.log(this.id);
            // this.fill = color(0, 255, 0);
            if(mouseIsPressed){
                G.activeImgSet = this.id;
            } 
        }
    }

    handleInactive() {
        this.fill = color(255, 0, 0);
    }

    handleActive() {
        this.fill = color(0, 255, 0);
        G.cArr = images[G.activeImgSet].array;
    }
    
    display() {
        fill(this.fill);
        rect(this.x, this.y, this.w, this.h);
    }
  }


