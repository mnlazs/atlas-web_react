module.exports = {
  // Rutas de los archivos de prueba o patrones a ignorar
  testPathIgnorePatterns: ["/node_modules/"],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: { "\\.(css|less)$": "<rootDir>/styleMock.js"},

  // Directorio donde Jest buscará los tests
  roots: ["<rootDir>/src"],

  // Soporte para importaciones de módulos
  moduleFileExtensions: ["js", "jsx", "json", "node"],

  // Configuración para transformar archivos con babel-jest
  transform: {
       "^.+\\.[t|j]sx?$": "babel-jest"
  },

  // Configuración para el uso de `@testing-library/react`
  setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect"
  ],

  // Configuración de entorno de prueba para emular el navegador
  testEnvironment: "jsdom"
};
