module.exports = {
  init: [],
  update: [
    require('./copy'),
    require('./baseCSS'),
    require('./backgroundColor'),
    require('./color'),
    require('./fill'),
    require('./stroke'),
    require('./transform'),
    require('./transformOrigin')
  ]
};