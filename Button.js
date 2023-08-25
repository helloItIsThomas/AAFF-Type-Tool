
class myButton {
    constructor(_id, _x, _y, w) {
        let _w = w * 3.0;
        this.buttonGap = _w * 0.99; // _w * 0.33;
        this.id = _id;
        this.w = _w ;
        this.groupW = _w*4 + this.buttonGap*3;
        this.x = ((_x+this.buttonGap) *_id) + (width - (this.groupW)) * 0.5;
        this.y = _y + (height*0.7);
        this.h = this.w;
        this.fill = color(255);
        this.mask = createGraphics(this.w, this.h);
        this.img = images[this.id].array[ 0 ]
        this.isHovering = false;
        this.alpha = { value: 255 };
    }
  
    checkClick() {
      if (mouseX > this.x && mouseX < this.x + this.w &&
        mouseY > this.y && mouseY < this.y + this.h) {
            this.isHovering = true;
            if(mouseIsReleased){
                G.activeImgSet = this.id;
                resetAnim();
            }
        } else this.isHovering = false;
    }

    handleInactive() {
    }

    handleActive() {
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
            // if (G.activeImgSet == this.id)      this.alpha.value = 0  
            // else if(this.isHovering)            this.alpha.value = 200 
            // else this.alpha.value =             this.alpha.value = 255 
            let localSpeed = 0.066
            let localEase = Power1.easeInOut;
            if (G.activeImgSet == this.id) {
                TweenLite.to(this.alpha, localSpeed, {value: 0, ease: localEase});
              } else if (this.isHovering) {
                TweenLite.to(this.alpha, localSpeed, {value: 200, ease: localEase});
              } else {
                TweenLite.to(this.alpha, localSpeed, {value: 255, ease: localEase});
              }
              
            this.fill.setAlpha(this.alpha.value);
            fill(this.fill);
            rect(
                this.x,
                this.y,
                this.w,
                this.h
                );
    }
  }

  