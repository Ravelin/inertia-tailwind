const mix = require('laravel-mix');
const path = require('path')
require('laravel-mix-tailwind')

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        output: {
            chunkFilename: 'js/[name].js?id=[chunkhash]'
        },
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.runtime.esm.js',
                '@': path.resolve('resources/js'),
            },
        }
    })
    .browserSync({
        proxy: 'inertia-tailwind.test',
        port: 8000
    })
    .tailwind('./tailwind.config.js');

mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
})


/*
    .options({
        processCssUrls: false,
        postCss: [
            require('./tailwind.config.js')
        ]
    })
*/
