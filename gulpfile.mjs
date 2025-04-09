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
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      }),
    )
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
  minifyHTML, // Добавляем минификацию HTML в конец сборки
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
