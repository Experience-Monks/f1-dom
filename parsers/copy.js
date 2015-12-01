module.exports = function(target, state) {
  // we want to copy everything over from the state to the target
  // except style which will be handled by other parsers
  for(var i in state) {
    if(i !== 'style') {
      target[ i ] = state[ i ];
    }
  }
};