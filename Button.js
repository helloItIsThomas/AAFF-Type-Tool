
class myButton {
    constructor(_id, _x, _y, _w) {
      this.buttonGap = _w * 0.33;
      this.id = _id;
      this.w = _w;
      this.groupW = _w*4 + this.buttonGap*3;
      this.x = ((_x+this.buttonGap) *_id) + (width - (this.groupW)) * 0.5;
      this.y = _y + (height*0.7);
      this.h = this.w;
      this.fill = color(255, 0, 0);
      this.mask = createGraphics(this.w, this.h);
      this.img = images[this.id].array[ 0 ]
      
    }
  
    checkClick() {
      if (mouseX > this.x && mouseX < this.x + this.w &&
        mouseY > this.y && mouseY < this.y + this.h) {
            if(mouseIsReleased){
                G.activeImgSet = this.id;
                resetAnim();
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
        this.img = images[this.id].array[int(frameCount*div) % G.cArr.length ];
        stroke(0);
        strokeWeight(2.5);
        rect(
            this.x,
            this.y,
            this.w,
            this.h
            );
        image(
            this.img,
            this.x + (this.w*0.5),
            //(this.y + (this.h*0.5)) + (height*0.7),
            this.y + (this.h*0.5),
            this.w,
            this.h
            );
    }
  }
