var escapeHtml = require( 'escape-html' );

module.exports = function(target, state) {

  if( state.text ) {

   target.innerHTML = escapeHtml(state.text);
  } else if( state.html ) {
   
   target.innerHTML = state.html;   
  }
};