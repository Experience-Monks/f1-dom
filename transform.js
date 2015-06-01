var getTransformMatrix = require('./lib/getTransformMatrix');

module.exports = function( item, data ) {
  
  var transform = getTransformMatrix(data);
  var cssValue;
  var perspective;

  if( transform ) {

    perspective = -1 / transform[ 11 ];
    cssValue = 'perspective(' + perspective + 'px) matrix3d(' + Array.prototype.join.call( transform, ',' ) + ')';

    item.style.transform = cssValue;
    item.style.webkitTransform = cssValue;
    item.style.msTransform = cssValue;
    item.style.mozTransform = cssValue;
    item.style.ieTransform = cssValue;
  }
};