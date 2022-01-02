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
