var arrayUnion = require('array-union');

module.exports = function(el, targets, states) {
  var targetNames = [];
  var state;
  var nodes;
  var elTargetName;

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

    if(targetNames.indexOf(elTargetName) !== -1) {
      targets[ elTargetName ] = nodes[ i ];
    }
  }

  // Add the container to potential target list as well
  if (elTargetName = el.getAttribute('data-f1')) targets[ elTargetName ] = el;
};
