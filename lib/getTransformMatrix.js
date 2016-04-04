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

    transform += 'translate3d(' + translation.join('px, ') + 'px) ';
    transform += 'rotateX(' + rotate[ 0 ] + 'deg) ';
    transform += 'rotateY(' + rotate[ 1 ] + 'deg) ';
    transform += 'rotateZ(' + rotate[ 2 ] + 'deg) ';
    transform += 'scale3d(' + scale.join(', ') + ') ';
    
    return transform;
  } else {
    
    return null;
  }
};