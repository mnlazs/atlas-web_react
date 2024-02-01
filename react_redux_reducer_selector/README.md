# Guía de Redux, Selectores, Pruebas, Immutable.js y Normalizr 🚀

Este proyecto proporciona ejemplos y prácticas recomendadas para trabajar con Redux, selectores, escribir pruebas, y utilizar Immutable.js y Normalizr en aplicaciones de React.

## 📚 Documentacion

### Reducers
- 📖 [Reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)
  - Aprende cómo los reducers actualizan el estado de la aplicación en respuesta a acciones enviadas al store.

### Selectores
- 📖 [Selectors](https://redux.js.org/recipes/computing-derived-data)
  - Descubre cómo extraer y reutilizar lógica para obtener datos del estado con selectores.

### Escribir Pruebas
- 📖 [Writing tests](https://redux.js.org/recipes/writing-tests)
  - Explora las mejores prácticas para escribir pruebas en aplicaciones que usan Redux.

### Immutable Map Documentation
- 📖 [Immutable Map documentation](https://immutable-js.github.io/immutable-js/docs/#/Map)
  - Profundiza en la documentación de Immutable.js para entender cómo trabajar con estructuras de datos inmutables.

### Normalizr
- 📖 [Normalizr](https://github.com/paularmstrong/normalizr)
  - Aprende a normalizar y desnormalizar tus datos con Normalizr para facilitar el trabajo con datos anidados o complejos.

### Normalizando la Forma del Estado
- 📖 [Normalizing State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)
  - Entiende la importancia de normalizar la forma del estado y cómo implementarlo en tus reducers.

## 🌟 Características

Este proyecto incluye ejemplos de código para:

- **Reducers**: Cómo manejar acciones en Redux.
- **Selectores**: Utilizar `reselect` para crear selectores memorizados.
- **Pruebas**: Cómo escribir pruebas para tus reducers y selectores.
- **Immutable.js**: Utilizar Map de Immutable.js para manejar el estado.
- **Normalizr**: Ejemplo de cómo normalizar los datos de la API.

## 🚀 Ejemplo

```javascript
import { normalize, schema } from 'normalizr';

// Definir esquema
const course = new schema.Entity('courses');
const mySchema = { courses: [course] };

// Datos de ejemplo
const originalData = { courses: [{ id: 1, title: 'Redux for Beginners' }] };

// Normalizar datos
const normalizedData = normalize(originalData, mySchema);

console.log(normalizedData);
```

## 🧪 Ejecutar Pruebas
Para ejecutar las pruebas en este proyecto:
```
npm run  test
```
