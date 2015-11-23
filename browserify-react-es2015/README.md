# Gulp with Browserify, Watchify + Babelify with React and ES2015

The source would be in the `assets/src` directory, its using `assets/src/app.js` as the main js file. It will compile to `assets/dist/` directory.

The commands:
```
> gulp js
```
To compile and minify the js files. It will do browserify, and tranlating any react and ES2015 syntax with babelify.

```
> gulp js:watch
```
To run the js compilation stuff and watch for any changes.
