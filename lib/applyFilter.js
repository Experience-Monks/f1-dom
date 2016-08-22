var scientificToDecimal = require('scientific-to-decimal');

module.exports = function applyFilter(data) {
  
    if(data.style && (data.style.blur || data.style.brightness || data.style.contrast || data.style.dropShadow || data.style.grayscale || data.style.hueRotate || data.style.invert || data.style.saturate || data.style.sepia)) {
      
      var blur = data.style.blur || 0;
      var brightness = data.style.brightness || 1
      var contrast = data.style.contrast || 1;
      var dropShadow = data.style.dropShadow || [0,0,0];
      var grayscale = data.style.grayscale || 0;
      var hueRotate = data.style.hueRotate || 0;
      var invert = data.style.invert || 0;
      var saturate = data.style.saturate || 1;
      var sepia = data.style.sepia || 0;

      var filter = '';

      while( dropShadow.length < 3 ) {

        dropShadow.push( 0 );
      }

      filter += 'blur(' + blur + 'px) ';
      filter += 'brightness(' + brightness*100 + '%) ';
      filter += 'contrast(' + contrast*100 + '%) ';
      filter += 'grayscale(' + grayscale*100 + '%) ';
      filter += 'hue-rotate(' + hueRotate + 'deg) ';
      filter += 'saturate(' + saturate + ') ';
      filter += 'sepia(' + sepia*100 + '%) ';
      filter += 'drop-shadow(' + generateShadow(dropShadow) + ') ';

      return filter;
    } 

    else {
      return null;
    }
 
};

function generateShadow(dropShadow){
  var style = '';

  for(var i in dropShadow){
    if(Array.isArray(dropShadow[i])){
      style = style.concat(generateRgb(dropShadow[i]));
    }
    else if(i < dropShadow.length-1){
      style = style.concat(scientificToDecimal(dropShadow[i]) + 'px ');
     }
  
    else{
      style = style.concat(scientificToDecimal(dropShadow[i]) + 'px rgb(0,0,0)');
    }
  } 

  return style;
};

function generateRgb(colour){

  var rounded = colour.map(Math.round);
  var style;

  if(colour.length == 3) {
    style = 'rgb(' + rounded.join(',') + ')';
  } 
  else if(colour.length == 4) {

    rounded[3] = state.style[propertyStyle][3];

    style = 'rgba(' + rounded.join(',') + ')';
  }

  return style;
};
