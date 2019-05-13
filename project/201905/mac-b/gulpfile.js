"use strict";

var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var bourbon = require('node-bourbon');
var webserver = require('gulp-webserver');
var node_modules_dir = path.resolve('.', 'node_modules');
var neat = require('node-neat').includePaths;
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');
var fontSpider = require('gulp-font-spider');
var rename = require("gulp-rename");


//webpack
gulp.task('webpack', function () {
    return gulp.src(['./script/app.js']).pipe(gulpWebpack({
        watch: true,
        output: {
            filename: 'dist.js'
        },
        resolve: {
            extensions: ['', '.js', '.vue'],
            alias: {
                'vue$': 'vue/dist/vue.common.js'
            }
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            // new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //         warnings: false
            //     }
            // })
        ],
        module: {
            exclude: [node_modules_dir],
            loaders: [{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            ],
            rules: []
        },
    })).on('error', onerror).pipe(gulp.dest('custom/js'));
});
//sass
gulp.task('sass', function () {
    gulp.src('scss/style.scss').pipe(sass({
        outputStyle: 'compressed',
    })).on('error', onerror)
        .pipe(rename('style.css'))
        .pipe(gulp.dest('css'));
});
//webserver
gulp.task('webserver', function () {
    gulp.src('.').pipe(webserver({
        // https: true,
        port: 1114,
        livereload: true,
        directoryListing: false,
        open: true
    }));
});
// watch
gulp.task('watch', function () {
    // gulp.watch('scss/**/*.scss', ['sass'])
    // gulp.watch('script/*.js', ['webpack']);
});
gulp.task('default', function () {
    gulp.run('webpack');
    gulp.run('watch');
    // gulp.run('webserver');
});

gulp.task('fontspider', function () {
    return gulp.src('*.html')
        .pipe(fontSpider({
            output: '../font/'
        })).on('error', onerror);
});

function onerror(error) {
    console.log(error.toString())
    this.emit('end')
}