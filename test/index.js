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
        innerHTML: 'item1 out',
        style: {
          position: 'relative',
          left: 10,
          opacity: 0.3,
          color: [ 255, 0, 255 ]
        }
      },

      item2: {
        style: {
          position: 'relative',
          left: 40,
          opacity: 0.3,
          backgroundColor: [ 255, 0, 255 ]  
        }
      },

      item3: {
        style: {
          transformOrigin: [ 0, 0 ],
          translate: [ 100, 0, 0 ],
          rotate: [ 0, 0, 90 ],
          scale: [ 2, 2 ],
          borderColor: [ 255, 0, 255 ],
          borderWidth: 20,
          borderStyle: 'solid'
        }
      }
    },

    idle: {
      item1: {
        innerHTML: 'item1 idle',
        style: {
          position: 'relative',
          left: 40,
          opacity: 1,
          color: [ 0, 0, 255 ]  
        }
      },

      item2: {
        style: {
          position: 'relative',
          left: 10,
          opacity: 1,
          backgroundColor: [ 255, 0, 0 ]
        }
      },

      item3: {
        style: {
          transformOrigin: [ 0, 0 ],
          translate: [ 0, 0, 0 ],
          rotate: [ 0, 0, 0 ],
          scale: [ 1, 1 ],
          borderColor: [ 0, 255, 0 ],
          borderWidth: 20,
          borderStyle: 'solid'
        }
      }
    },

    somethingThatDoesntExist: undefined
  },

  transitions: [
    { from: 'out', to: 'idle', bi: true, animation: { duration: 4 } }
  ]
})
.init('out')
.go('idle');

window.onclick = function() {

  if(ui.state === 'idle') {
    ui.go('out');  
  } else {
    ui.go('idle');
  }
};