
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
        this.tweenTriggered = false;
        this.clicked = false;  // Add this line to initialize the clicked flag
        this.ease = Power4.easeInOut;
        this.d = 1.333;
        this.cursorDist = 800;
    }


    checkClick() {
        let distance = dist(mouseX, mouseY, this.x + this.w / 2, this.y + this.h / 2);

        // if (distance < 33) {
        //   if (!this.tweenTriggered) {
        //     gsap.to(MyCursor, {w: 300, duration: 0.3, ease: "power1.out", onComplete: () => {
        //       this.tweenTriggered = true;
        //     }});
        //   }
        //   this.isHovering = true;
        // } else {
        //   if (this.tweenTriggered) {
        //     gsap.to(MyCursor, {w: 2000, duration: 0.3, ease: "power1.out", onComplete: () => {
        //       this.tweenTriggered = false;
        //     }});
        //   }
        if (distance < this.cursorDist && !this.clicked) {
            gsap.to(MyCursor, {w: 300, duration: this.d, ease: this.ease});
            this.clicked = true;  // Set flag to true once clicked
          } else if (distance >= this.cursorDist && this.clicked) {
            gsap.to(MyCursor, {w: 20, duration: this.d, ease: this.ease});
            this.clicked = false;  // Reset flag when out of range
          }
          this.isHovering = false;
        }


  
    // checkClick() {
    //   if (mouseX > this.x && mouseX < this.x + this.w &&
    //     mouseY > this.y && mouseY < this.y + this.h) {
    //         this.isHovering = true;
    //         if(mouseIsReleased){
    //             MyCursor.w = 300;
    //             G.activeImgSet = this.id;
    //             resetAnim();
    //         }
    //     } else {            
    //         MyCursor.w = 2000;
    //         this.isHovering = false;
    //     }
    // }

    // checkDist() {
    //     let distance = dist(mouseX, mouseY, this.x + this.w / 2, this.y + this.h / 2);
        
    //     if (distance < 33) {
    //       if (!this.tweenTriggered) {
    //         gsap.to(MyCursor, {w: 300, duration: 0.3, ease: "power1.out", onComplete: () => {
    //           this.tweenTriggered = true;
    //         }});
    //       }
    //       this.isHovering = true;
    //     } else {
    //       if (this.tweenTriggered) {
    //         gsap.to(MyCursor, {w: 2000, duration: 0.3, ease: "power1.out", onComplete: () => {
    //           this.tweenTriggered = false;
    //         }});
    //       }
    //       this.isHovering = false;
    //     }
    // }

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
            fill(this.fill);
            rect(
                this.x,
                this.y,
                this.w,
                this.h
                );
    }
  }

  