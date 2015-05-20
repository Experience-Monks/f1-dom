var matCreate = require( 'gl-mat4/create' ),
    matTranslate = require( 'gl-mat4/translate' ),
    matScale = require( 'gl-mat4/scale' );
    matRotateX = require( 'gl-mat4/rotateX' ),
    matRotateY = require( 'gl-mat4/rotateY' ),
    matRotateZ = require( 'gl-mat4/rotateZ' );

module.exports = function( item, data ) {
  
  if( data.position || data.scale || data.rotation || data.perspective !== undefined ) {
    
    var translation = data.position || [ 0, 0, 0 ],
        scale = data.scale || [ 1, 1, 1 ],
        rotation = data.rotation || [ 0, 0, 0 ],
        perspective = data.perspective || 1000,
        transform = matCreate(),
        cssValue;

    while( translation.length < 3 ) {

      translation.push( 0 );
    }

    while( rotation.length < 3 ) {

      rotation.push( 0 );
    }

    while( scale.length < 3 ) {

      scale.push( 1 );
    }

    matTranslate( transform, transform, translation );
    matScale( transform, transform, scale );
    matRotateX( transform, transform, rotation[ 0 ] );
    matRotateY( transform, transform, rotation[ 1 ] );
    matRotateZ( transform, transform, rotation[ 2 ] );

    cssValue = 'perspective( ' + perspective + 'px ) matrix3d(' + Array.prototype.join.call( transform, ',' ) + ')';

    item.style[ 'transform' ] = cssValue;
    item.style[ '-webkit-transform' ] = cssValue;
    item.style[ '-ms-transform' ] = cssValue;
    item.style[ '-moz-transform' ] = cssValue;
  }
};