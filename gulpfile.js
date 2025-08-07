const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilarSass() {
    return gulp.src('./source/styles/*.scss')
           .pipe(sourcemaps.init())
           .pipe(sass({
                outputStyle: 'compressed',
           }))
           .pipe(sourcemaps.write('./maps'))
           .pipe(gulp.dest('./build/styles/'))
}

function comprimirImagens() {
    return gulp.src('./source/images/*')
           .pipe(imagemin())
           .pipe(gulp.dest('./build/images/'))
}

function comprimirJavaScript() {
    return gulp.src('./source/scripts/*.js')
           .pipe(uglify())
           .pipe(gulp.dest('./build/scripts/'))
}

exports.default = gulp.parallel(compilarSass, comprimirImagens, comprimirJavaScript);