////////////////////////
//                    //
// ALL CODE WRITTEN   //
// BY THOMAS MCeLMEEL //
// + MATTHEW RAUPP    //////////////////////////
// This sketch creates typography generated   //
// with frames from classic experimental film //
//                                            //
////////////////////////////////////////////////


// let imgNum = 279;
// let i = 0;
let ptArray;
let myFont;
let fontSize = 500;
let imgSize;
let inputStr;
let div;
let sampleFctr;
var buttonArray = [];
let numButtons = 4;
let maxFrameRate = 0.1;
let ctx;
let glyph = "A";


// num: 280
// num: 230
// num: 286
// num: 300

// 229
// 229
// 229
// 229

let images = [
  { num: 5, array: [], path: "data0/img", ext: ".jpg" },
  { num: 5, array: [], path: "data1/image", ext: ".png" },
  { num: 5, array: [], path: "data2/image", ext: ".png" },
  { num: 5, array: [], path: "data3/image", ext: ".jpg" }
];


function preload() {
  myFont = loadFont("assets/cinetype.otf");
  for (let img of images) {
    for (let i = 0; i < img.num; i++) {
      img.array[i] = loadImage(img.path + i + img.ext);
    }
  }
}

function setup() {
  inputStr = "A";
  div = 6.0;
  sampleFctr = 0.0
  ctx = createCanvas(windowWidth, 600);
  imageMode(CENTER);
  textFont();
  textSize(fontSize);
  print(ptArray);
  frameRate(30);

  fontSize = 300;
  // imgSize = fontSize * 0.28;
  imgSize = fontSize * 0.20;
  let buttonPos = p5.Vector = createVector(imgSize, fontSize + 0.8 * imgSize);

  buttonArray[0] = new myButton(0, buttonPos.x, buttonPos.y, imgSize);
  buttonArray[1] = new myButton(1, buttonPos.x, buttonPos.y, imgSize);
  buttonArray[2] = new myButton(2, buttonPos.x, buttonPos.y, imgSize);
  buttonArray[3] = new myButton(3, buttonPos.x, buttonPos.y, imgSize);

  G.cArr = images[G.activeImgSet].array;
}


function draw() {
  G.index ++;
  background(255);

  ptArray = myFont.textToPoints(
    glyph, 0, 0, fontSize, {sampleFactor: sampleFctr}
    );


    // The sampleFactor should go up
    // until it reaches maxFrameRate ( max speed )
    if( sampleFctr < maxFrameRate ){
      sampleFctr = G.index * 0.001;
    }

  div = 2.0;
  
  for (let n = 0; n < ptArray.length; n++){
    image(
      G.cArr[ int(frameCount*div) % G.cArr.length ],
      (ptArray[n].x) + (width * 0.1),
      ptArray[n].y + height * 0.5,
      imgSize,
      imgSize
      );
  }

  buttonArray.forEach( e => {
    e.checkClick();
    if(G.activeImgSet == e.id) e.handleActive();
    else e.handleInactive();
    e.display();
  });
  mouseIsReleased = false;
}
