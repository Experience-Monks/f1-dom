var arrayUnion = require('array-union');

module.exports = function(el, targets, states) {
  var targetNames = [];
  var state;
  var nodes;
  var elTargetName;
  var allTargets = [];

  // first we want to find all targets and their names
  for(var stateName in states) {
    state = states[ stateName ];

    if(state) {
      targetNames = arrayUnion(targetNames, state.constructor === Object ? Object.keys(state)  : []  );
    }
  }

  // then we'll get all elements with the `data-f1` attribute
  nodes = el.querySelectorAll('[data-f1]');

  // then we'll cross reference and grab only the nodes we want to act on
  for(var i = 0; i < nodes.length; i++) {
    elTargetName = nodes[ i ].getAttribute('data-f1');

    if(allTargets.indexOf(elTargetName)!== -1){
      console.warn("More than one data-f1 value '"+elTargetName+"' was found in the same f1 instance.");
    }

    if(targetNames.indexOf(elTargetName) !== -1) {
      targets[ elTargetName ] = nodes[ i ];
      allTargets.push(elTargetName);
    }
  }
};
