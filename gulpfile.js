const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');
require('elixir-typescript');

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
    mix.sass('app.scss')
    .sass('admin.app.scss')
    .version('css/app.css')
    .version('css/admin.app.css')
    .webpack('app.js')
    .copy('node_modules/@angular', 'public/@angular')
    .copy('node_modules/anular2-in-memory-web-api', 'public/anular2-in-memory-web-api')
    .copy('node_modules/core-js', 'public/core-js')
    .copy('node_modules/reflect-metadata', 'public/reflect-metadata')
    .copy('node_modules/systemjs', 'public/systemjs')
    .copy('node_modules/rxjs', 'public/rxjs')
    .copy('node_modules/zone.js', 'public/zone.js')

    .typescript(
        [
            'app.component.ts',
            'app.module.ts',
            'main.ts'
        ],
        'public/app',
        {
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    )
    .scripts([
        'jquery/dist/jquery.min.js',
        'bootstrap/dist/js/bootstrap.min.js',
        'admin-lte/dist/js/app.min.js'
    ],
    'public/js/vendor.js',
    'node_modules')        // look in /node_modules/

    .scripts([
        'admin/app.js'
    ], 'public/js/admin.app.js')

    .version([             // optionally append versioning string to filename
        'js/vendor.js',    // compiled files will be in /public/build/js/
        'js/admin.app.js'
    ]);
})
;
