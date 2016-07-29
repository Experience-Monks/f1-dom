module.exports = function(target, state) {

  try{
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
  }
  catch(err){
    console.warn("Could not apply transform to "+target.getAttribute('data-f1'));
  }
};