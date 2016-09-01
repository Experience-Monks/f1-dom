module.exports = function(propertyStyle, target, state) {
   
  if(state.style && Array.isArray(state.style[ propertyStyle ])) {

    var style;
    var rounded = state.style[ propertyStyle ].map(Math.round);

    if(state.style[ propertyStyle ].length == 3) {
      style = 'rgb(' + rounded.join(',') + ')';
    } else if(state.style[ propertyStyle ].length == 4) {
      // we want alpha to be not rounded
      rounded[ 3 ] = state.style[ propertyStyle ][ 3 ];
      style = 'rgba(' + rounded.join(',') + ')';
    } else {
      throw new Error('unsupported ' + propertyStyle + ' of type', state.style[ propertyStyle ]);
    }

    target.style[ propertyStyle ] = style;
  }
};