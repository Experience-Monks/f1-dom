var escapeHtml = require( 'escape-html' );

module.exports = function( item, data ) {

  if( data.text ) {

    item.innerHTML = escapeHtml( data.text );
  } else if( data.html ) {
   
    item.innerHTML = data.html;   
  }
};