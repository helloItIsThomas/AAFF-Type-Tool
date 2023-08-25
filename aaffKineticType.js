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
let fontSize;
let imgSize;
let inputStr;
let div;
let sampleFctr;
var buttonArray = [];
let numButtons = 4;
let maxFrameRate = 0.1;
let ctx;
let glyph = "A";
let buttonSize;


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
  ctx = createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textFont();
  print(ptArray);
  frameRate(30);

  buttonSize = 50.0
  
  let buttonPos = p5.Vector = createVector(buttonSize, fontSize + 0.8 * buttonSize);


  buttonArray[0] = new myButton(0, buttonPos.x, buttonPos.y, buttonSize);
  buttonArray[1] = new myButton(1, buttonPos.x, buttonPos.y, buttonSize);
  buttonArray[2] = new myButton(2, buttonPos.x, buttonPos.y, buttonSize);
  buttonArray[3] = new myButton(3, buttonPos.x, buttonPos.y, buttonSize);

  G.cArr = images[G.activeImgSet].array;
}


function draw() {
  fontSize = height * 0.5;
  textSize(fontSize);
  imgSize = fontSize * 0.20;
  G.index ++;
  background(255);

  ptArray = myFont.textToPoints(
    glyph,
    ((width - textWidth(glyph)) * 0.5) - (imgSize * 0.42),
    imgSize,
    fontSize,
    { sampleFactor: sampleFctr }
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
      (ptArray[n].x) + (imgSize*0.5), // + (width * 0.25),
      ptArray[n].y + height * 0.5,
      imgSize,
      imgSize
      );
  }

  buttonArray.forEach( e => {
    e.x = ((buttonSize + e.buttonGap) * e.id) + (width - (e.groupW)) * 0.5;
    e.y = (fontSize + 0.8 * buttonSize) + (height*0.15);
    e.checkClick();
    if(G.activeImgSet == e.id) e.handleActive();
    else e.handleInactive();
    e.display();
  });
  mouseIsReleased = false;
}
