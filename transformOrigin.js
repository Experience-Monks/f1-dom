module.exports = function( item, data ) {

  if( data.anchor ) {
    
    var anchor = data.anchor || [ 0.5, 0.5 ],
        cssValue = Math.round( anchor[ 0 ] * 100 ) + '% ' + Math.round( anchor[ 1 ] * 100 ) + '%';

    item.style.transform = cssValue;
    item.style.webkitTransform = cssValue;
    item.style.msTransform = cssValue;
    item.style.MozTransform = cssValue;
    item.style.OTransform = cssValue;
  }
};