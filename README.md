# PostCSS Exact Width [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

[PostCSS Exact Width] lets you do this in CSS.

```css
.example {}

/* becomes */

.example {}
```

## Usage

Add [PostCSS Exact Width] to your build tool:

```bash
npm install postcss-exact-width --save-dev
```

#### Node

Use [PostCSS Exact Width] to process your CSS:

```js
import exactWidth from 'postcss-exact-width';

exactWidth.process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Use [PostCSS Exact Width] as a plugin:

```js
import postcss from 'gulp-postcss';
import exactWidth from 'postcss-exact-width';

postcss([
  exactWidth()
]).process(YOUR_CSS);
```

#### Webpack

Add [PostCSS Loader] to your build tool:

```bash
npm install postcss-loader --save-dev
```

Use [PostCSS Exact Width] in your Gulpfile:

```js
import exactWidth from 'postcss-exact-width';

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [ exactWidth() ]
          } }
        ]
      }
    ]
  }
}
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS Exact Width] in your Gulpfile:

```js
import postcss from 'gulp-postcss';
import exactWidth from 'postcss-exact-width';

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    exactWidth()
  ])
).pipe(
  gulp.dest('.')
));
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS Exact Width] in your Gruntfile:

```js
import exactWidth from 'postcss-exact-width';

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
       exactWidth()
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[npm-url]: https://www.npmjs.com/package/postcss-exact-width
[npm-img]: https://img.shields.io/npm/v/postcss-exact-width.svg
[cli-url]: https://travis-ci.org/mindthetic/postcss-exact-width
[cli-img]: https://img.shields.io/travis/mindthetic/postcss-exact-width.svg
[win-url]: https://ci.appveyor.com/project/mindthetic/postcss-exact-width
[win-img]: https://img.shields.io/appveyor/ci/mindthetic/postcss-exact-width.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[PostCSS Exact Width]: https://github.com/mindthetic/postcss-exact-width
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS Loader]: https://github.com/postcss/postcss-loader
