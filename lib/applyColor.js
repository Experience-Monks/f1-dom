module.exports = function(propertyStyle, target, state) {
    
  if(Array.isArray(state[ propertyStyle ])) {

    var style;
    var rounded = state[ propertyStyle ].map(Math.round);

    if(state[ propertyStyle ].length == 3) {
      style = 'rgb(' + rounded.join(',') + ')';
    } else if(state[ propertyStyle ].length == 4) {
      // we want alpha to be not rounded
      rounded[ 3 ] = state[ propertyStyle ][ 3 ];

      style = 'rgba(' + rounded.join(',') + ')';
    } else {
      throw new Error('unsupported ' + propertyStyle + ' of type', state[ propertyStyle ]);
    }

    target.style[ propertyStyle ] = style;
  }
};