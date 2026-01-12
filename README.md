# Chatbooks

Aplicación móvil desarrollada en **React Native** que permite consumir datos desde una API REST, visualizarlos de forma clara y mantener disponibilidad básica en modo offline.

Este proyecto demuestra conocimientos en consumo de APIs, manejo de estado, renderizado de listas y persistencia local.

---

## Instalación

```bash
git clone https://github.com/Bryan12sd/chatbooks.git
```

```bash
cd chatbooks
```

```bash
npm install
```

```bash
npx react-native run-android
```

```bash
npx react-native run-ios
```

## Características

- Consumo de APIs REST usando **fetch / axios**.
- Visualización de datos en listas dinámicas.
- Manejo de estados de carga y errores
- Almacenamiento local para uso offline.
- Actualización de datos cuando hay conexión.
- Diseño responsive compatible con Android e iOS.

---

## Tecnologías Utilizadas

- **React Native**
- **JavaScript / TypeScript**
- **Axios / Fetch API**
- **AsyncStorage** (persistencia local)
- **Hooks** (`useState`, `useEffect`)
- **Flexbox** para diseño

---

## Funcionamiento

1. La aplicación consulta una API REST al iniciar.
2. Los datos recibidos se almacenan localmente.
3. Si el dispositivo no tiene conexión:
   - Se cargan los datos almacenados previamente.
4. Cuando la conexión regresa:
   - Se sincronizan los datos nuevamente con la API.

Esto permite una experiencia básica **offline-first**.

---

## Ejemplo de Uso

- Visualización de listados (usuarios, productos, posts, etc.).
- Actualización automática al detectar conexión.
- Mensajes informativos cuando no hay internet.

---

## Instalación

```bash
git clone https://github.com/tu-usuario/react-native-api-viewer.git
```

```bash
cd chatbooks
```

```bash
npm install
```

```bash
npx react-native run-android
```

```bash
npx react-native run-ios
```

## Objetivo del Proyecto

Este proyecto fue creado con fines de aprendizaje y demostración de habilidades en:

- Consumo de servicios REST.
- Manejo de datos asincrónicos.
- Persistencia local.
- Buenas prácticas básicas en React Native.

---

## Autor

**Bryan Cordero**
