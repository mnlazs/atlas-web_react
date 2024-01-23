![Nombre del GIF](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGdjNWc1dXY5ZDVpa3AzYTg0emRxMjYyZ21saTJ3aDRvZ3Yxd2xqeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FtXWChRfsZX1z3rOGn/giphy.gif)

# React state :dart:

##  What the State of a Component or a Container Is?  🌟
En React, el estado de un componente o contenedor se refiere a un objeto que almacena valores de datos que pueden cambiar con el tiempo. Cada componente puede tener su propio estado local, que controla el comportamiento del componente y cómo se renderiza. El estado es esencial para los componentes dinámicos en aplicaciones React, ya que permite que tu aplicación responda a diferentes entradas y acciones del usuario.

## Objetivos de Aprendizaje

### 🌟 Entender el Estado de un Componente o Contenedor
- **¿Qué es?**
  - El estado (`state`) de un componente o contenedor en React es un objeto que almacena los valores dinámicos que controlan el comportamiento del componente.
- **Ejemplo de Código:**
  ```javascript
  class ExampleComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
    // ...
  }


### 🔄 Ciclo de Vida de un Componente
- **¿Qué es?**
  - El ciclo de vida de un componente en React se refiere a las diferentes etapas por las que pasa un componente, desde su montaje (mounting) hasta su desmontaje (unmounting).
- **Ejemplo de Código:**

  ```javascript
  componentDidMount() {
  console.log("El componente se ha montado");
}

### ✏️ Modificar un Estado y Ejecutar Código en el Orden Correcto
- **¿Cómo?**
 - El estado se modifica mediante la función setState, y React se encarga de ejecutar las actualizaciones de manera eficiente y en el orden correcto.
- **Ejemplo de Código:**
  ```javascript

  this.setState({ count: this.state.count + 1 });

### 🎛️ Componente Controlado
- **¿Qué es?**
  - Un componente controlado en React es aquel cuyo estado es controlado por React, como un input de formulario.
- **Ejemplo de Código:**
```javascript
<input type="text" value={this.state.value} onChange={this.handleChange} />
```

### 📝 Uso de Formularios en React
- **¿Cómo?**
  - Los formularios en React típicamente manejan los datos de entrada mediante el estado del componente.
- **Ejemplo de Código:**
```javascript
<form onSubmit={this.handleSubmit}>
  <input type="text" value={this.state.value} onChange={this.handleChange} />
  <button type="submit">Submit</button>
</form>
```

### ♻️ Reutilización de Componentes Pequeños
- **¿Cómo?**
  - Los componentes pequeños se mantienen puros y su estado se eleva a contenedores principales para su reutilización.
- **Ejemplo de Código:**
```javascript
<MySmallComponent prop1={this.state.someValue} />
```
### 🪝 Uso y Creación de un React Hook
-**¿Qué es?**
  - Los Hooks en React permiten usar estado y otras características de React sin escribir una clase.
- **Ejemplo de Código:**
```javascript
const [count, setCount] = useState(0);
```

### 🧪 Pruebas de Cambios de Estado con Enzyme
- **¿Cómo?**
Se utilizan herramientas como Enzyme para simular eventos y verificar los cambios en el estado del componente.
- **Ejemplo de Código:**
```javascript
wrapper.find('button').simulate('click');
expect(wrapper.state('count')).toEqual(1);
```
### Requisitos

Todos los archivos serán interpretados/compilados en Ubuntu 18.04 LTS usando node 12.x.x y npm 6.x.x.
Editores permitidos: vi, vim, emacs, Visual Studio Code.
Todos los archivos deben terminar con una nueva línea.
Un archivo README.md, en la raíz de la carpeta del proyecto, es obligatorio.


Preparado con ❤️ por Mnlazs

