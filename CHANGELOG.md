# 8.0.0

Fixes:

- Needed to remove perspective handling from `f1-dom` because `perspective-origin` was completely calculated wrong. Now if developers want to have 3d transforms that use perspective you must define `perspective` on the parent container element. Sorry...