module.exports = function( item, data ) {

  item.style.opacity = data.alpha !== undefined ? data.alpha : 1;
};