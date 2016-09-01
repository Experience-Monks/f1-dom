module.exports = function(target, state) {

    if(state.style && Array.isArray(state.style.transformOrigin)) {
      
      var anchor = state.style.transformOrigin;
      var cssValue = anchor
      .map(function(value) {
        return value * 100 + '%'
      })
      .join(' ');


      target.style.transformOrigin = cssValue;
      target.style.webkitTransformOrigin = cssValue;
      target.style.msTransformOrigin = cssValue;
      target.style.MozTransformOrigin = cssValue;
      target.style.OTransformOrigin = cssValue;
    }
    
};