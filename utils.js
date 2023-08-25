
function keyPressed() {
    if (keyCode === BACKSPACE || keyCode === DELETE) {
        glyph = "";
    //   updateList();
    } else {
      if (key >= ' ' && key <= '~' && key != 'Shift' && key != 'Meta'
      && key != 'Alt' && key != 'Control' && key != 'Dead'
      && key != 'ArrowRight' && key != 'ArrowLeft' && key != 'ArrowUp' && key != 'ArrowDown') {
        glyph = String(key).toUpperCase();
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