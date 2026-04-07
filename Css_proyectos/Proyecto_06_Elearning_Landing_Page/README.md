# 🚀 Sass + Vite Template

Plantilla de inicio rápido con **Vite** y **Sass** configurados y listos para usar.

## 📦 Instalación

```bash
npm install
```

## ▶️ Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.
Accesible también desde tu red local (para probar en móvil/tablet).

## 🏗️ Build

```bash
npm run build
```

## 📁 Estructura

```
sass-vite-template/
├── public/
├── src/
│   ├── assets/
│   ├── styles/
│   │   ├── abstracts/
│   │   │   ├── _variables.scss   ← colores, breakpoints
│   │   │   └── _mixins.scss      ← mixin de breakpoints
│   │   └── main.scss             ← punto de entrada de estilos
│   └── main.js                   ← punto de entrada JS
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Uso de Sass

### Variables
```scss
@use 'abstracts/variables' as v;

color: v.$color-primary;
```

### Mixins (breakpoints mobile-first)
```scss
@use 'abstracts/mixins' as m;

.mi-elemento {
  font-size: 14px;

  @include m.breakpoint(tablet) {
    font-size: 16px;
  }

  @include m.breakpoint(desktop) {
    font-size: 18px;
  }
}
```

### Breakpoints disponibles
| Nombre       | Tamaño   |
|--------------|----------|
| `mobile`     | 480px    |
| `tablet`     | 768px    |
| `desktop`    | 1024px   |
| `desktop-xl` | 1440px   |
