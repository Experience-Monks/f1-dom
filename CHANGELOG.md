# 8.0.3

Fixes:

- Brought in the module `scientific-to-decimal` to convert all numbers passed to css `transform`. Safari does not allow for numbers in scientific notation in `transform`.

# 8.0.2

Fixes: 

- `transform` is now set via building strings of tranformations vs building a matrix. This seems to be more consistent accross browsers.


# 8.0.1

Fixes:

- A quick fix so the world doesnt break. Dropped in a perspective calculation into the matrix3d call because it seems that Chrome doesn't always render perspective properly.

# 8.0.0

Fixes:

- Needed to remove perspective handling from `f1-dom` because `perspective-origin` was completely calculated wrong. Now if developers want to have 3d transforms that use perspective you must define `perspective` on the parent container element. Sorry...