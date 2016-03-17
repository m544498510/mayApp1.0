/**
 *  gulp的配置文件
 *  用于定义各个app所需模块，之后将各个app按需合并压缩。
 *  @author: Mei XinLin
 */

//根目录为webWorkSpace
var appPath = '../webapp/';
var moduleSrcPath = './src2/modules/';
var styleSrc = './src/sass';
var srcPath = './src/';
var distPath = appPath+'dist/';

module.exports = {
    paths: {
        src:    srcPath,
        dist:   distPath,
        rev:   "src/revInfo/",

        libSrc: srcPath + 'lib/**/*.*',
        libDist: distPath + 'lib/',

        scriptSrc: moduleSrcPath + '**/*.js',
        scriptDist: distPath + 'js/',

        styleSrc: styleSrc + '**/*.scss',
        styleDist: distPath + 'css/',

        htmlSrc: [
            './src/modules/**/*.html',
            './src/modules/**/*.jsp',
            './src2/**/*.html'
        ],
        htmlDist: distPath + 'html',

        imageSrc:'./src/img/**/*.*',
//        imageSrc:[
//            appPath + 'static/pages/img/**/*.*',
//            appPath + 'static/global/img/**/*.*'
//
//        ],
        imageDist: distPath + 'img/',


        translateJson: './src/translate/**/*.jsonData',
        translateDist: distPath + 'translate/',

        oldSass: appPath + 'static/pages/css/'
    },

    apps: {
        appNames: ['testApp'],
        testApp: {
            js: [
                moduleSrcPath + 'managerApp/**/*.js',
                moduleSrcPath + 'common/**/*.js'
            ],
            styles: [
                moduleSrcPath + '/managerApp/**/*.scss',
                moduleSrcPath + 'common/**/*.scss'
            ],
            name: 'testApp'
        }
    }
};
