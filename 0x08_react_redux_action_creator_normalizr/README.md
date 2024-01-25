![Imagen del Proyecto]()
<img src="62c5368c3a321dd181302f80.png" alt="Imagen del Proyecto" width="200" height="200"/>


# Redux 📊

Este proyecto explora conceptos clave de React y Redux, incluyendo Normalizr, esquemas, normalización de JSON anidado, acciones de Redux y creadores de acciones.

## Normalizr y su Uso 🧩

Normalizr es una biblioteca que ayuda a normalizar datos anidados o profundamente anidados en JSON. Su propósito principal es convertir datos anidados en una estructura más plana y fácil de manejar.

### Ejemplo de Uso de Normalizr:

```javascript
import { normalize, schema } from 'normalizr';

const originalData = // Tu JSON anidado
const mySchema = new schema.Entity('mySchema');
const normalizedData = normalize(originalData, mySchema);
```

## Esquemas y Normalización de JSON Anidado 🔄

Normalizr permite definir esquemas para tus datos. Un esquema describe las entidades y su relación, lo que facilita la normalización de JSON anidado.

### Ejemplo de Esquema:

```javascript
const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
  commenter: user
});
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
});
```

## Conceptos Clave de Redux 🧠
Redux es una biblioteca de gestión de estado para aplicaciones JavaScript. Sus conceptos clave incluyen:

- Store: Contiene el estado de la aplicación.
- Actions: Son objetos que describen qué algo ocurrió.
- Reducers: Funciones que determinan cómo cambia el estado en respuesta a una acción.

 ## Acciones de Redux ⚡
Las acciones en Redux son objetos JavaScript que envían datos del aplicación al store. Son la única fuente de información para el store.

Ejemplo de Acción de Redux:
```javascript

const addAction = {
  type: 'ADD',
  payload: 'Learn Redux'
};
```

## Creadores de Acciones en Redux 🛠️
Los creadores de acciones son funciones que crean acciones.

Ejemplo de Creador de Acciones:
```javascript
 
function addItem(item) {
  return {
    type: 'ADD_ITEM',
    payload: item
  };
}


