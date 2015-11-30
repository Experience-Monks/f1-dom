var f1DOM = require('./.');
var elButton;
var button;

// data-f1 defines an association with states
// which are later defined when creating an f1 instance
document.body.innerHTML = 
'<div data-f1="elButton">' +
  '<div data-f1="text">Im a button</div>' +
'</div>';

button = f1DOM({
  // define the container where your button lives
  el: document.body,
  
  // define what your button will look like in each state: out, idle
  states: {
    idle: {
      elButton: {
        padding: 10, // padding: 10px
        margin: 10, // margin: 10px
        backgroundColor: [ 255, 0, 255 ], // rgb(255, 0, 255)
        cursor: 'pointer', // we can change this so why not
        
        display: 'inline-block'
      },

      text: {
        color: [ 33, 33, 33 ], // rgb(33, 33, 33)
        rotate: [ 0, 0, 0 ] // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)
      }
    },

    over: {
      elButton: {
        padding: 20, // padding: 20px
        margin: 0, // margin: 0px
        backgroundColor: [ 255, 0, 0 ], // change the rgb values
        cursor: 'progress', // we can change this so why not
        
        display: 'inline-block'
      },

      text: {
        color: [ 255, 255, 255 ], // rgb(255, 255, 255)
        rotate: [ 0, 0, 15 ] // transform: rotateX(0deg) rotateY(0deg) rotateZ(15deg)
      }
    }
  },

  // define transitions between states (for info on how to write
  // fancier animations check out f1's documentation)
  transitions: [
    { from: 'idle', to: 'over', bi: true }
  ]
})
.init('idle'); // initialize the button in the out state defined in states


elButton = document.querySelector('[data-f1]');

// `go` will tell the button to go to the state defined
elButton.onmouseover = function() { button.go('over'); };
elButton.onmouseout = function() { button.go('idle'); };