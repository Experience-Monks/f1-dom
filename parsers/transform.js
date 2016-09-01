var getTransformMatrix = require('../lib/getTransformMatrix');

module.exports = function(target, state) {

  var targetName = target.getAttribute('data-f1');

  if(state.style.translate){
    validateTransform(state.style.translate, "translate", targetName);
  }

  if(state.style.rotate){
    validateTransform(state.style.rotate, "rotate", targetName);
  }

  if(state.style.scale){
    validateTransform(state.style.scale, "scale", targetName);
  }

  var cssValue = getTransformMatrix(state);

  if( cssValue ) {
    target.style.transform = cssValue;
    target.style.webkitTransform = cssValue;
    target.style.msTransform = cssValue;
    target.style.mozTransform = cssValue;
    target.style.ieTransform = cssValue;
  }
};

function validateTransform(transform, transformType, targetName){

  let validation = 0;

  for (var i = 0; i < transform.length; i++){
    validation += transform[i]
    if (isNaN(validation)){
      console.warn("Invalid value in a " + transformType + " definition for '" + targetName + "'.");
      break;
    }
  }

};