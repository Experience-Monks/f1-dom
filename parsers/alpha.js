module.exports = function( target, state ) {
  if( state.style && state.style.alpha !== undefined ) {
    target.style.opacity = state.style.alpha;
    if( state.style.alpha === 0 && target.style.visibility !== "hidden"){
      target.style.visibility = "hidden";
    } else if(target.style.visibility === "hidden"){
      target.style.visibility = "visible";
    }
  }
};