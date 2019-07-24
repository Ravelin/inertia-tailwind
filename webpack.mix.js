const mix = require('laravel-mix');
const path = require('path')
// const tailwindcss = require('tailwindcss')
require('laravel-mix-tailwind')

mix.js('resources/js/app.js', 'public/js')
    .tailwind('./tailwind.config.js')
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
    });

mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
})
