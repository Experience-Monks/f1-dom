var applyFilter = require('../lib/applyFilter');

module.exports = function(target, state) {

  var targetName = target.getAttribute('data-f1');

  if(state.style.blur){
    state.style.blur, "blur", targetName;
  }

  if(state.style.brightness){
    state.style.brightness, "brightness", targetName;
  }

  if(state.style.contrast){
    state.style.contrast, "contrast", targetName;
  }

  if(state.style.dropShadow){
    state.style.dropShadow, "dropShadow", targetName;
  }

  if(state.style.grayscale){
    state.style.grayscale, "grayscale", targetName;
  }

  if(state.style.hueRotate){
    state.style.hueRotate, "hueRotate", targetName;
  }

  if(state.style.saturate){
    state.style.saturate, "saturate", targetName;
  }

  if(state.style.sepia){
    state.style.sepia, "sepia", targetName;
  }
  var cssValue = applyFilter(state);

  if(cssValue) {
    target.style.filter = cssValue;
    target.style.webkitFilter = cssValue;
  }
};