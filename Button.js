
let prevMouseX = 0, prevMouseY = 0;

class myButton {
    constructor(_id, _x, _y, w) {
      let _w = w * 3.0;
      this.buttonGap = _w * 0.99;
      this.id = _id;
      this.w = _w;
      this.groupW = _w * 4 + this.buttonGap * 3;
      this.x = ((_x + this.buttonGap) * _id) + (width - (this.groupW)) * 0.5;
      this.y = _y + (height * 0.7);
      this.h = this.w;
      this.fill = color(255);
      this.mask = createGraphics(this.w, this.h);
      // Assuming images is defined somewhere
      this.img = images[this.id].array[0];
      this.isHovering = false;
      this.alpha = { value: 255 };
      this.tweenTriggered = false;
      this.clicked = false;
      this.ease = Power4.easeInOut;
      this.d = 0.333;
      this.cursorDist = this.w*0.5;
    }
  
    checkClick() {
        let distance = dist(mouseX, mouseY, this.x + this.w / 2, this.y + this.h / 2);
        let speed = dist(mouseX, mouseY, prevMouseX, prevMouseY);
        let dynamicDuration = map(distance, 0, this.cursorDist, 0.05, this.d);
      

        // THE THRESHOLD RADIUS IS A CIRCLE
        if (distance < this.cursorDist && !this.clicked) {
          gsap.to(MyCursor, { 
            w: this.w + this.buttonGap * 0.166,
            x: this.x + this.w / 2,
            y: this.y + this.h / 2,
            duration: dynamicDuration,
            ease: this.ease
          });
          this.clicked = true;
        } else if (distance >= this.cursorDist && this.clicked) {
          gsap.to(MyCursor, {
            w: 20,
            x: mouseX,
            y: mouseY,
            duration: dynamicDuration,
            ease: this.ease
          });
          this.clicked = false;
        } else {
          MyCursor.x = mouseX;
          MyCursor.y = mouseY;
        }
      
        let localSpeed = 0.066;
        if (G.activeImgSet == this.id) {
          gsap.to(this.alpha, localSpeed, {value: 0, ease: this.ease});
        } else if (this.isHovering) {
          gsap.to(this.alpha, localSpeed, {value: 200, ease: this.ease});
        } else {
          gsap.to(this.alpha, localSpeed, {value: 255, ease: this.ease});
        }
      }
      
  


    handleInactive() {
        // MyCursor.w = 200;
        // if (this.tweenTriggered) {
            // TweenLite.to(MyCursor, 0.15, {w: 100, ease: Expo.easeOut, onComplete: () => {
                // this.tweenTriggered = false;
            //   }});
        // }
    }

    handleActive() {
        G.cArr = images[G.activeImgSet].array;
        // if (!this.tweenTriggered) {
            // TweenLite.to(MyCursor, 0.15, {w: 0, ease: Expo.easeOut, onComplete: () => {
            //   this.tweenTriggered = true;
            // }});
        //   }

    }
    
    display() {
    
        this.img = images[this.id].array[int(frameCount*div) % G.cArr.length ];
        stroke(0);
        strokeWeight(2.5);
        
        fill(this.fill);
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
                TweenLite.to(this.alpha, localSpeed, {value: 0, ease: this.ease});
              } else if (this.isHovering) {
                TweenLite.to(this.alpha, localSpeed, {value: 200, ease: this.ease});
              } else {
                TweenLite.to(this.alpha, localSpeed, {value: 255, ease: this.ease});
              }
              
            this.fill.setAlpha(this.alpha.value);
            // this.fill.setAlpha(0);
            fill(this.fill);
            rect(
                this.x,
                this.y,
                this.w,
                this.h
                );
                
    }
  }

  