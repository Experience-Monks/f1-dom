module.exports = {
  init: [ 
    require('./init') 
  ],
  update: [
    require( './transform' ),
    require( './transformOrigin' ),
    require( './opacity' ),
    require( './textAndHtml' ),
    require('./color'),
    require('./backgroundColor')
  ]
};