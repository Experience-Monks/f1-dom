var getTransformMatrix = require('../lib/getTransformMatrix');
var stringify = require('mat4-css-stringify');

module.exports = function(target, state) {
  
  var transform = getTransformMatrix(state);
  var cssValue;
  var perspective;

  if( transform ) {

    perspective = -1 / transform[ 11 ];
    cssValue = 'perspective(' + perspective + 'px) ' + stringify(transform);

    target.style.transform = cssValue;
    target.style.webkitTransform = cssValue;
    target.style.msTransform = cssValue;
    target.style.mozTransform = cssValue;
    target.style.ieTransform = cssValue;
  }
};