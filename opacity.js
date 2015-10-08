module.exports = function(target, state) {

  if(state.alpha !== undefined) {

    target.style.opacity = state.alpha;
  }
};