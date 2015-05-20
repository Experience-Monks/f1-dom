module.exports = function( item, data ) {

  if( data.alpha !== undefined ) {

    item.style.opacity = data.alpha;

    if( data.alpha === 0 && item.style.visibility !== "hidden"){

      item.style.visibility = "hidden";

    } else if(item.style.visibility === "hidden" && data.alpha !== 0){

      item.style.visibility = "visible";

    }
  }
};