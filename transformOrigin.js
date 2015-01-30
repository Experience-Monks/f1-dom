module.exports = function( item, data ) {

  var anchor = data.anchor || [ 0.5, 0.5 ],
      cssValue = Math.round( anchor[ 0 ] * 100 ) + '% ' + Math.round( anchor[ 1 ] * 100 ) + '%';

  item.style[ 'transform-origin' ] = cssValue;
  item.style[ '--webkit-transform-origin' ] = cssValue;
  item.style[ '--ms-transform-origin' ] = cssValue;
  item.style[ '--moz-transform-origin' ] = cssValue;
};