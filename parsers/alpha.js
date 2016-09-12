module.exports = function( target, state ) {
  if (state.style) {
    setAlpha(target,state,'alpha');
    setAlpha(target,state,'autoAlpha');
  }
};

function setAlpha(target,state,prop) {
  if( state.style[prop] !== undefined ) {
    target.style.opacity = state.style[prop];
    if( state.style[prop] === 0 && target.style.visibility !== "hidden"){
      target.style.visibility = "hidden";
    } else if(target.style.visibility === "hidden"){
      target.style.visibility = "visible";
    }
  }
}