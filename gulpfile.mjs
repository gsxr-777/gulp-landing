import { src, dest, series, parallel } from 'gulp'
import htmlmin from 'gulp-htmlmin'

import clear from './gulp/tasks/clear.mjs'
import server from './gulp/tasks/server.mjs'
import { modernizrBuild } from './gulp/tasks/modernizr.mjs'
import { assetsBuild, assetsWatch } from './gulp/tasks/assets.mjs'
import { imagesBuild, imagesWatch } from './gulp/tasks/images.mjs'
import { faviconBuild, faviconWatch } from './gulp/tasks/favicons.mjs'
import { spritesBuild, spritesWatch } from './gulp/tasks/sprites.mjs'
import { pugBuild, pugWatch } from './gulp/tasks/pug.mjs'
import { stylesBuild, stylesWatch } from './gulp/tasks/styles.mjs'
import { webpackBuild, webpackWatch } from './gulp/tasks/webpack.mjs'

import config from './gulp/config.mjs'

config.setEnv()

// Задача минификации HTML
const minifyHTML = () => {
  return src('build/**/*.html')
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> dd143dbb9a2e859c10f824d9ce29867bfe0a85f3
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      }),
    )
<<<<<<< HEAD
=======
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
>>>>>>> d3a24cd2dc0180d4baf89e25ede94c95b7d23644
=======
>>>>>>> dd143dbb9a2e859c10f824d9ce29867bfe0a85f3
    .pipe(dest('build'))
}

export const proxy = server

export const modernizr = modernizrBuild

export const build = series(
  clear,
  spritesBuild,
  faviconBuild,
  imagesBuild,
  stylesBuild,
  webpackBuild,
  pugBuild,
  assetsBuild,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> dd143dbb9a2e859c10f824d9ce29867bfe0a85f3
  minifyHTML, // Добавляем минификацию HTML в конец сборки
)

export const buildServe = series(
  clear,
  spritesBuild,
  faviconBuild,
  imagesBuild,
  stylesBuild,
  webpackBuild,
  pugBuild,
  assetsBuild,
  minifyHTML,
  server
<<<<<<< HEAD
=======
  minifyHTML // Добавляем минификацию HTML в конец сборки
>>>>>>> d3a24cd2dc0180d4baf89e25ede94c95b7d23644
=======
>>>>>>> dd143dbb9a2e859c10f824d9ce29867bfe0a85f3
)

export const watch = series(
  build,
  server,

  parallel(
    spritesWatch,
    faviconWatch,
    imagesWatch,
    stylesWatch,
    webpackWatch,
    pugWatch,
    assetsWatch,
    // ...
  ),
)

export default watch
