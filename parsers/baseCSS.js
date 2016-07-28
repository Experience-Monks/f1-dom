var style = require('dom-css');

module.exports = function(target, state) {
  try{
    if(state.style) {
      style(target, state.style);  
    }
  }
  catch(err){
    console.error("Missing a style object in a state belonging to", target.getAttribute('data-f1'))
  }
};