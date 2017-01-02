const elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss');
    // mix.webpack('app.js');
    // mix.rollup(
    //     './resources/assets/js/bootstrap/index.js',
    //     './public/js/bootstrap/index.js'
    // );
    // mix.webpack(
    //     './resources/assets/js/github/index.js',
    //     './public/js/github/index.js'
    // );
    // mix.rollup(
    //     './resources/assets/js/counter/index.js',
    //     './public/js/counter/index.js'
    // );
    // mix.webpack(
    //     './resources/assets/js/chat/index.js',
    //     './public/js/chat/index.js'
    // );
    // mix.webpack(
    //     './resources/assets/js/quiz/index.js',
    //     './public/js/quiz/index.js'
    // );
    // mix.webpack(
    //     './resources/assets/js/moviefind/src/js/index.js',
    //     './public/js/moviefind/index.js'
    // );
    // mix.webpack(
    //     './resources/assets/js/contactlist/src/index.js',
    //     './public/js/contactlist/index.js'
    // );
    // mix.webpack(
    //     './resources/assets/js/boi/index.js',
    //     './public/js/boi/index.js'
    // );
    mix.webpack(
        './resources/assets/js/sticky/index.js',
        './public/js/sticky/index.js'
    );
});
