
function keyPressed() {
    if (keyCode === BACKSPACE || keyCode === DELETE) {
        glyph = "";
    //   updateList();
    } else {
      if (key >= ' ' && key <= '~' && key != 'Shift' && key != 'Meta'
      && key != 'Alt' && key != 'Control' && key != 'Dead'
      && key != 'ArrowRight' && key != 'ArrowLeft' && key != 'ArrowUp' && key != 'ArrowDown') {
        glyph = String(key).toUpperCase();
        resetAnim();
        // updateList();
      }
    }
    runOnceViaKeypressed();
  }

  function runOnceViaKeypressed(){
    let testSiteFromListOfPoints = [];
    listOfPoints.forEach( (e, i) => {
        if(e.x != null && e.x != undefined && i % cellDensity == 0){
            testSiteFromListOfPoints.push({x: e.x, y: e.y + pushFromTop});
        }
    })
    result = computeDiagram(testSiteFromListOfPoints, bbox);
  }

  function ease0( _e , _d ){
    this.e = _e;
    this.d = _d;
    TweenLite.to(this.e, this.d, {value: 0})
  }

  function ease1( _e , _d ){
    this.e = _e;
    this.d = _d;
    TweenLite.to(this.e.value, this.d, {value: 1})
  }