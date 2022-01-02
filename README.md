# `Vite React Typescript Stater`

## Steps for creating `vite-react-tailwind-css-stater` with `yarn`

### Create a new react project with `vite`

```sh
yarn create vite
```

### Go to project directory and run

```sh
yarn
yarn dev
```

### Install SCSS related packages

```sh
yarn add -D gulp gulp-purgecss gulp-sass sass
```

### Create `gulpfile.js` and write following content

```js
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function compileSass() {
  return src("src/scss/index.scss")
    .pipe(sass())
    .pipe(
      purgecss({
        content: [
          "./src/**/*.tsx",
          "./src/**/*.ts",
          "./src/**/*.js",
          "./src/**/*.jsx",
          "./*.html",
        ],
      })
    )
    .pipe(dest("src/styles"));
}

function watchSass() {
  return watch(
    [
      "src/scss/**/*.scss",
      "./src/**/*.tsx",
      "./src/**/*.ts",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./*.html",
    ],
    compileSass
  );
}

exports.default = series(compileSass, watchSass);
```
