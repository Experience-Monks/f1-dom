var scientificToDecimal = require('scientific-to-decimal');

module.exports = function getTransformMatrix(data) {
  if(data.style && (data.style.translate || data.style.scale || data.style.rotate)) {
    
    var translation = data.style.translate || [ 0, 0, 0 ];
    var scale = data.style.scale || [ 1, 1, 1 ];
    var rotate = data.style.rotate || [ 0, 0, 0 ];
    var transform = '';

    while( translation.length < 3 ) {

      translation.push( 0 );
    }

    while( rotate.length < 3 ) {

      rotate.push( 0 );
    }

    while( scale.length < 3 ) {

      scale.push( 1 );
    }

    // we need to ensure no values are set to be scientific because Safari doesn't like
    // scientific notation
    transform += 'translate3d(' + translation.map(scientificToDecimal).join('px, ') + 'px) ';
    transform += 'rotateX(' + scientificToDecimal(rotate[ 0 ]) + 'deg) ';
    transform += 'rotateY(' + scientificToDecimal(rotate[ 1 ]) + 'deg) ';
    transform += 'rotateZ(' + scientificToDecimal(rotate[ 2 ]) + 'deg) ';
    transform += 'scale3d(' + scale.map(scientificToDecimal).join(', ') + ') ';
    
    return transform;
  } else {
    
    return null;
  }
};