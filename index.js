var f1 = require('f1');
var baseCSS = require('./lib/parsers/baseCSS');
var color = require('./lib/parsers/color');
var backgroundColor = require('./lib/parsers/backgroundColor');
var transformOrigin = require('./lib/parsers/transformOrigin');
var transform = require('./lib/parsers/transform');

var getTargetsFromStates = require('./lib/getTargetsFromStates');

module.exports = function(settings) {

  if(!settings.states) {
    throw new Error('You must define states before using f1-dom');
  }

  settings.el = settings.el || document.body;
  settings.parsers = settings.parsers || { init: [], update: [] };
  settings.targets = {};

  getTargetsFromStates(
    settings.el,
    settings.targets,
    settings.states
  );

  settings.parsers.update.push(
    baseCSS,
    color,
    backgroundColor,
    transformOrigin,
    transform
  );

  return f1(settings);
};