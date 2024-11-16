const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/GestorTareas-Plantilla/'  // Este es el prefijo para GitHub Pages
    : '/'
})
