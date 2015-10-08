# f1-dom

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

`f1` animation parsing functions for the dom. `f1-dom` exports an object that looks like this:
```javascript
{
    init: [function],
    update: [function, function, function]
}
```
Where the `Function` in the init `Array` will be run when `f1` initializes. In `f1-dom` the init function will check whether the `position` property is used if so it will set dom elements to be position absolute and in the top left corner of their container.

`update` functions will be called whenever `f1` has calculated the current state/intermediary state.

Supported properties and example values are:

```javascript
{

  position: [ 500, 100, 200 ], // 3d translate position supports 2d translation also
  scale: [ 0.5, 0.63, 0.8 ], // 3d scale supports 3d scales also
  rotation: [ 40.3, 23.4, 12 ], // 3d/2d rotation
  perspective: 20, // perspective in pixels (only for 3d transforms)
  anchor: [ 0.33, 0.8 ], // this is equivalent to transform origin in %
  alpha: 0.5, // opacity
  color: [255, 0, 255, 1], // rgba colour can also be rgb
  backgroundColor: [255, 0, 255, 1] // rgba colour can also be rgb
}
```

## Usage

[![NPM](https://nodei.co/npm/f1-dom.png)](https://www.npmjs.com/package/f1-dom)

`f1-dom` is not designed to be used alone as a module but instead the functions
that `f1-dom` exposes can be passed to `f1`.

### Example - All DOM functions

```javascript
var f1 = require( 'f1' );

var btn = f1();

btn.teach( require( 'f1-dom' ) );
```

### Example - One DOM function
```javascript
var f1 = require( 'f1' );

var btn = f1();

btn.teach( require( 'f1-dom/opacity' ) );
```

## License

MIT, see [LICENSE.md](http://github.com/jam3/f1-dom/blob/master/LICENSE.md) for details.
