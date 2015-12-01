# f1-dom

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

`f1-dom` wraps [`f1`](http://npmjs.com/f1) to animate style's of dom elements. `f1` is a UI animation library where you first define all the states of your UI and then by defining transitions between those states. For more information check out [`f1`'s documentation](http://npmjs.com/f1)

## Usage

[![NPM](https://nodei.co/npm/f1-dom.png)](https://www.npmjs.com/package/f1-dom)

[See the example running here in Requirebin.com](http://requirebin.com/?gist=acd623a56bcbfe2133b1)

```javascript
var f1DOM = require('f1-dom');
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
        style: {
          padding: 10, // padding: 10px
          margin: 10, // margin: 10px
          backgroundColor: [ 255, 0, 255 ], // rgb(255, 0, 255)
          cursor: 'pointer', // we can change this so why not
          
          display: 'inline-block'
        }
      },

      text: {
        style: {
          color: [ 33, 33, 33 ], // rgb(33, 33, 33)
          rotate: [ 0, 0, 0 ] // transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)
        }
      }
    },

    over: {
      elButton: {
        style: {
          padding: 20, // padding: 20px
          margin: 0, // margin: 0px
          backgroundColor: [ 255, 0, 0 ], // change the rgb values
          cursor: 'progress', // we can change this so why not
          
          display: 'inline-block'
        }
      },

      text: {
        style: {
          color: [ 255, 255, 255 ], // rgb(255, 255, 255)
          rotate: [ 0, 0, 15 ] // transform: rotateX(0deg) rotateY(0deg) rotateZ(15deg)
        }
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
```

## CSS Handling

`f1-dom` does a few things to make css properties more animatable.

#### Adds PX to the end of certain properties

If values for properties such as `left`, `height`, `padding`, `margin`, etc. are passed in as Numbers `f1-dom` will automatically add px to the end.

#### Color handling

In order to animate color's properties such as `color` and `backgroundColor` arrays can be passed instead which are converted to either `rgb` or `rgba` css values.

#### transform and transformOrigin

To animate `transform` just pass in arrays containing values for `translate`, `scale`, and `rotate`. For instance passing in `translate: [100, 200, 300]` this will be converted to:
```
transform: translateX(100px) translateY(200px) translateZ(300px)
```

`transformOrigin` can be passed as an array such as `transformOrigin: [0, 1]` which will be converted to:
```
transformOrigin: 0% 100%
```

## License

MIT, see [LICENSE.md](http://github.com/jam3/f1-dom/blob/master/LICENSE.md) for details.
