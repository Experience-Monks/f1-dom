module.exports = function(states, targets, transitions) {
  initPosition(states, targets);
};

function initPosition(states, targets) {
  var isUsed;
  var properyNames;

  for(var uiName in targets) {
    isUsed = false;

    for(var stateName in states) {
      properyNames = Object.keys(states[ stateName ][ uiName ]);

      if(properyNames.indexOf('position') > -1) {
        isUsed = true;
        break;
      }
    }

    // is position is used
    if(isUsed) {
      setupForPosition(targets[ uiName ]);
    }
  }
}

function setupForPosition(target) {
  target.style.position = 'absolute';
  target.style.left = target.style.top = '0px';
}