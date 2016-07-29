var style = require('dom-css');

module.exports = function(target, state) {
  try{
    if(state.style) {
      style(target, state.style);  
    }
  }
  catch(err){
    throw new Error("Missing a style object in a state belonging to "+ target.getAttribute('data-f1'));
    console.log("STYLE:",state,"TARGET:",target)
  }
};