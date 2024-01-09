# Introducción a Webpack

Webpack es una herramienta de construcción (bundler) ampliamente utilizada en el desarrollo web moderno. Permite gestionar y optimizar la manera en que se agrupan y entregan los archivos de un proyecto web, como JavaScript, CSS, imágenes y otros recursos.

## Ventajas de Webpack

- **Modularidad:** Webpack facilita la modularización del código, lo que significa que puedes dividir tu aplicación en pequeños módulos y cargarlos según sea necesario, lo que mejora la organización y el rendimiento.

- **Optimización de recursos:** Permite la optimización de recursos como la minimización de código JavaScript y CSS, lo que reduce el tamaño de los archivos y mejora la velocidad de carga de la aplicación.

- **Soporte para múltiples tipos de archivos:** Webpack es versátil y puede manejar no solo JavaScript, sino también archivos CSS, imágenes, fuentes y más, lo que simplifica la administración de activos.

- **Uso de complementos:** Webpack tiene una amplia comunidad de complementos que pueden agregar funcionalidades adicionales a tu proceso de construcción, como la generación de HTML dinámico, el manejo de archivos de configuración y la extracción de CSS.

## Configuración básica de Webpack

Para empezar a usar Webpack en tu proyecto, necesitas una configuración básica. Puedes crear un archivo de configuración llamado `webpack.config.js` y definir tus entradas y salidas, así como las reglas para procesar diferentes tipos de archivos.

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
