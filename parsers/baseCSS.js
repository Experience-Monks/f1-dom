var style = require('dom-css');

module.exports = function(target, state) {

  if(!state){
     throw new Error("Missing a valid state definition or style object belonging to '" + target.getAttribute('data-f1') + "'");
  }
  
  else if(state.style) {
    style(target, state.style);  
  }
  

};