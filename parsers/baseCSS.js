var style = require('dom-css');

module.exports = function(target, state) {
  try{
    if(state.style) {
      style(target, state.style);  
    }
  }
  catch(err){
    throw new Error("Missing a valid state definition or style object belonging to "+ target.getAttribute('data-f1'));
  }
};