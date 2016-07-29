var getTransformMatrix = require('../lib/getTransformMatrix');

module.exports = function(target, state) {
  
  var cssValue = getTransformMatrix(state);

  if( cssValue ) {
    target.style.transform = cssValue;
    target.style.webkitTransform = cssValue;
    target.style.msTransform = cssValue;
    target.style.mozTransform = cssValue;
    target.style.ieTransform = cssValue;
  }
};