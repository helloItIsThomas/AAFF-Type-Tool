
let mouseIsReleased = false;
function mousePressed() { 
    mouseIsReleased = false; 
}
function mouseReleased() {
     mouseIsReleased = true; 
}

let G = {
    activeImgSet: 0,
    cArr: [],
    index: 0,
}

function resetAnim() {
    G.index *= 0;
    sampleFctr *= 0;
}

let MyCursor = {
    x: 0,
    y: 0,
    w: 10,
    h: 10,
    fill: 0,
    stroke: 255,
    strokeWeight: 4,
    isHovering: false,
  
    //   checkDist() {
        //   let distance = dist(mouseX, mouseY, this.x + this.w / 2, this.y + this.h / 2);
        //   
        //   if (distance < 33) {
            // if (!this.tweenTriggered) {
            //   gsap.to(MyCursor, {w: 300, duration: 0.3, ease: "power1.out", onComplete: () => {
                // this.tweenTriggered = true;
            //   }});
            // }
            // this.isHovering = true;
        //   } else {
            // if (this.tweenTriggered) {
            //   gsap.to(MyCursor, {w: 20, duration: 0.3, ease: "power1.out", onComplete: () => {
                // this.tweenTriggered = false;
            //   }});
            // }
            // this.isHovering = false;
        //   }
    //   }
  }