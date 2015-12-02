var style = require('dom-css');

module.exports = function(target, state) {
  if(state.style) {
    style(target, state.style);  
  }
};