# f1-dom

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

f1 animation parsing functions for the dom.

Supported properties and exmaple values are:

```javascript
{

  position: [ 500, 100, 200 ], // 3d translate position supports 2d translation also
  scale: [ 0.5, 0.63, 0.8 ], // 3d scale supports 3d scales also
  rotation: [ 40.3, 23.4, 12 ], // 3d/2d rotation
  perspective: 20, // perspective in pixels (only for 3d transforms)
  anchor: [ 0.33, 0.8 ], // this is equivalent to transform origin in %
  alpha: 0.5 // opacity
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
