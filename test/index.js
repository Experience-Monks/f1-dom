var f1Dom = require('./..');

document.body.innerHTML = '<div>' +
  '<div data-f1="item1">ITEM 1</div>' +
  '<div data-f1="item2">ITEM 2</div>' +
  '<div data-f1="item3">ITEM 3</div>' +
'</div>';

var ui = f1Dom({
  el: document.body,
  states: {
    out: {
      item1: {
        position: 'relative',
        left: 10,
        opacity: 0.3,
        color: [ 255, 0, 255 ]
      },

      item2: {
        position: 'relative',
        left: 40,
        opacity: 0.3,
        backgroundColor: [ 255, 0, 255 ]
      },

      item3: {
        transformOrigin: [ 0, 0 ],
        translate: [ 100, 0, 0 ],
        rotate: [ 0, 0, 90 ],
        scale: [ 2, 2 ]
      }
    },

    idle: {
      item1: {
        position: 'relative',
        left: 40,
        opacity: 1,
        color: [ 0, 0, 255 ]
      },

      item2: {
        position: 'relative',
        left: 10,
        opacity: 1,
        backgroundColor: [ 255, 0, 0 ]
      },

      item3: {
        transformOrigin: [ 0, 0 ],
        translate: [ 0, 0, 0 ],
        rotate: [ 0, 0, 0 ],
        scale: [ 1, 1 ]
      }
    }
  },

  transitions: [
    { from: 'out', to: 'idle', bi: true }
  ]
})
.init('out');


window.onclick = function() {
  ui.go('idle');
}