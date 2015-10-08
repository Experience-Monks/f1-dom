module.exports = function(propertyStyle, propertyData, target, state) {
    
  if(Array.isArray(state[ propertyData ])) {

    var style;
    var rounded = state[ propertyData ].map(Math.round);

    if(state[ propertyData ].length == 3) {
      style = 'rgb(' + rounded.join(',') + ')';
    } else if(state[ propertyData ].length == 4) {
      // we want alpha to be not rounded
      rounded[ 3 ] = state[ propertyData ][ 3 ];

      style = 'rgba(' + rounded.join(',') + ')';
    } else {
      throw new Error('unsupported ' + propertyData + ' of type', state[ propertyData ]);
    }

    target.style[ propertyStyle ] = style;
  }
};