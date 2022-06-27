const {defineConfig} = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.module
            .rule('svg-sprite')
            .use('svgo-loader')
            .loader('svgo-loader')
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/css/_global.scss";`
            }
        }
    },
    pluginOptions: {
      svgSprite: {
        dir: 'src/assets/svg-sprites',
        test: /\.(svg)(\?.*)?$/,
        loaderOptions: {
          extract: true,
          spriteFilename: 'img/icons.[hash:8].svg'
        },
        pluginOptions: {
          plainSprite: true
        }
      },
    },
})
