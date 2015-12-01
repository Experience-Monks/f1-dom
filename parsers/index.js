module.exports = {
  init: [],
  update: [
    require('./copy'),
    require('./baseCSS'),
    require('./backgroundColor'),
    require('./color'),
    require('./transform'),
    require('./transformOrigin')
  ]
};