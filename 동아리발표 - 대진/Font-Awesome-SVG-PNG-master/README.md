Font-Awesome-SVG-PNG
====================

This project provides a Font-Awesome build split to individual SVG and PNG files of different sizes along with Node.JS based generator to generate any other colors and sizes combinations.

## What is Font-Awesome?
Font Awesome is a full suite of 675 pictographic icons for easy scalable vector graphics on websites, created and
maintained by [Dave Gandy](http://twitter.com/davegandy). Stay up to date [@fontawesome](http://twitter.com/fontawesome).

Get started at http://fontawesome.io!

## License
- The Font Awesome font is licensed under the SIL OFL 1.1:
  - http://scripts.sil.org/OFL
- Font-Awesome-SVG-PNG is licensed under the MIT license

## How to use?
You may use already generated icons in `white` and `black` directories. You can also generate your own set:

Note: you need to have a command `rsvg-convert` available.

Install via npm: `npm install -g font-awesome-svg-png`.

Install via Bower: `bower install font-awesome-svg-png`.

The following command will generate a red set of icons at sizes of 128 and 256 pixels in directory `red`:
`font-awesome-svg-png --color red --sizes 128,256`

## PNG creation

PNG creation depends on `rsvg-convert` command being in the path.

You can skip PNG creation with `--no-png`.

### Windows support
1. Install node.js: https://nodejs.org/en/#download
2. Open cmd.exe in the Font-Awesome-SVG-PNG directory
3.  Execute `npm install .`
4. Download https://osspack32.googlecode.com/files/rsvg-convert.exe
5. Add the directory of rsvg-convert.exe to your PATH
6. Try it by executing `node font-awesome-svg-png --color gray --sizes 16`

### Mac OS X support
```
sudo port install librsvg
... or ...
brew install librsvg
```
That should give the necessary `rsvg-convert` command.

WARNING: Starting from librsvg 2.40.11 and onwards `rsvg-convert` produces empty images due to a breaking change that was introduced. At moment there's no workaround but to revert to librsvg 2.40.10 and below.

### Linux support
For Debian `rsvg-convert` in located in the `librsvg2-bin` package.
```sh
sudo apt-get install librsvg2-bin
```

## Authors
- Damian Kaczmarek <rush@rushbase.net> [@Rush](https://github.com/Rush)
- Dominykas Blyžė <hello@dominykas.com> [@dominykas](https://github.com/dominykas)

## See also

You may also be interested in the following projects:
- [Dellos7/local-icons](https://github.com/Dellos7/local-icons). List of CSS classes that allow you to use the **Font-Awesome-SVG-PNG** icons in your HTML & CSS in a very easy way. Just copy/paste - no need to import external CSS stylesheets.
