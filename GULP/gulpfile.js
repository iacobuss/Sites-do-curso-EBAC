const { src, dest, series } = require('gulp');

// Compilador Sass
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return src('source/main.scss')  
        .pipe(sass().on('error', sass.logError))             
        .pipe(dest('build/css'));  
}

exports.compileSass = compileSass;

// Compressor de imagens
const imagemin = require('gulp-imagemin');

function comprimeImagem() {
    return src('source/images/*')  
        .pipe(imagemin())             
        .pipe(dest('build/images/'));  
}

exports.comprimeImagem = comprimeImagem;

// Minificando JS
const uglify = require('gulp-uglify');

function minificarJs() {
    return src('source/main.js')  
        .pipe(uglify())             
        .pipe(dest('build/main.js'));  
}

exports.minificarJs = minificarJs;

exports.build = series(compileSass, comprimeImagem, minificarJs);