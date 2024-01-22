module.exports = {
  presets: [
    "@babel/preset-env", // Transpila ES6+ a ES5
    "@babel/preset-react" // Transpila JSX a JavaScript
  ],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"] // Opcional, para características como async/await
    }
  }
};
