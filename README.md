# PostCSS Exact Width [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

Gives you the exact width and height desired when applied to flex items.

```css
.example {
	width: 50%;
}
```

```css
.example {
	/* Prevents flex-grow when height added aswell */
	--width-grow: 0;
	/* Checks for flex-direction then if height applied, then if flex-grow already applied */
	flex-grow: var(--row-grow, var(--height-grow, var(--flex-grow, 0)));
	flex-shrink: 0;
	flex-basis: auto;
	width: 50%;
}
```

## Setup

```bash
npm install postcss-gutters --save-dev
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
