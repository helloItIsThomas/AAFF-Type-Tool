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
let imgSize = 100;
let inputStr;
let div;
let sampleFctr;
var buttonArray = [];
let numButtons = 4;

// num: 280
// num: 230
// num: 286
// num: 300

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
  inputStr = "AAFF";
  div = 6.0;
  sampleFctr = 0.0
  createCanvas(windowWidth, 600);
  imageMode(CENTER);
  textFont();
  textSize(fontSize);
  print(ptArray);
  frameRate(30);
  buttonArray[0] = new myButton(0, 20.0, 100.0);
  buttonArray[1] = new myButton(1, 50.0, 100.0);
  buttonArray[2] = new myButton(2, 80.0, 100.0);
  buttonArray[3] = new myButton(3, 110.0, 100.0);

  G.cArr = images[G.activeImgSet].array;
}

//  I want to make buttons that change the image array.
//  I also want a dynamic way to change the text.

function draw() {
background(255);
  fontSize = 300
  imgSize = fontSize * 0.28

  ptArray = myFont.textToPoints(
    inputStr, 0, 0, fontSize, {sampleFactor: sampleFctr}
    );

    if(sampleFctr < 0.1){
      sampleFctr = frameCount * 0.001;
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

}
