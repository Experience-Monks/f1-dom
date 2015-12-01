module.exports = function(target, state) {

  if(state.style && Array.isArray(state.style.transformOrigin)) {
    
    var anchor = state.style.transformOrigin;
    var cssValue = anchor
    .map(function(value) {
      return value * 100 + '%'
    })
    .join(' ');

    target.style[ 'transform-origin' ] = cssValue;
    target.style[ '--webkit-transform-origin' ] = cssValue;
    target.style[ '--ms-transform-origin' ] = cssValue;
    target.style[ '--moz-transform-origin' ] = cssValue;
  }
};