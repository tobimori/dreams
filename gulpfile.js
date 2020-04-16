const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');

function scss() {
    return src('./assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest('./assets/built/css'));
}

function watcher() {
    watch('./assets/scss/**/*.scss', scss)
}

exports.default = series(
    scss,
);
exports.develop = watcher;
