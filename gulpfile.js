const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function compileSass() {
  return src("src/scss/index.scss")
    .pipe(sass())
    .pipe(
      purgecss({
        content: [
          "*.html",
          "src/**/*.js",
          "src/**/*ts",
          "src/**/*.jsx",
          "src/**/*tsx",
        ],
      })
    )
    .pipe(dest("src/styles"));
}

function watchSass() {
  return watch(["src/scss/**/*.scss", "src/**/*.jsx"], compileSass);
}

exports.default = series(compileSass, watchSass);
