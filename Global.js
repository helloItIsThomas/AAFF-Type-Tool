
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