////////////////////////
//                    //
// ALL CODE WRITTEN   //
// BY THOMAS MCeLMEEL //
// + MATTHEW RAUPP    //////////////////////////
// This sketch creates typography generated   //
// with frames from classic experimental film //
//                                            //
////////////////////////////////////////////////


let imgNum = 279;
let i = 0;
let imgArray = [];
let ptArray;
let myFont;
let fontSize = 600;
let imgSize = 100;
let inputStr = "AAFF";
let div;
let sampleFctr;


function preload() {
  myFont = loadFont("assets/cinetype.otf");
  for (var i = 0; i< imgNum; i++) {
    imgArray[i] = loadImage("data/img" + i + ".jpg");
  }
}

function setup() {
  div = 6.0;
  sampleFctr = 0.0
  noCursor();
  createCanvas(windowWidth, 600);
  imageMode(CENTER);
  textFont();
  textSize(fontSize);
  print(ptArray);
  frameRate(30);
}

function draw() {
background(255);
  fontSize = 300
  imgSize = fontSize * 0.28


  ptArray = myFont.textToPoints(
    inputStr,
    0,
    0,
    fontSize,
    {sampleFactor: sampleFctr}
    );

    if(sampleFctr < 0.1){
      sampleFctr = frameCount * 0.001;
    }

    // if(div > 3.5){
      // div = map(frameCount % 600, 0, 600, 6.0, 0.0)
    // } else div = 3.5 

  div = 2.0;

  for (let n = 0; n < ptArray.length; n++){
    image(
      imgArray[(n + int(frameCount * (div))) % imgArray.length],
      (ptArray[n].x) + (width * 0.1),
      ptArray[n].y + height * 0.5,
      imgSize,
      imgSize
      );
  }
}
