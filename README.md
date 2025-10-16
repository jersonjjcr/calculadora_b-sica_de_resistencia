# 🔌 Calculadora Básica de Resistencias

Una calculadora interactiva de resistencias eléctricas construida con React y Vite, con diseño completamente responsive y modo oscuro/claro.

## ✨ Características

- 📱 **Completamente Responsive** - Funciona perfecto en móviles, tablets y escritorio
- 🌓 **Modo Oscuro/Claro** - Cambia entre temas con un click
- 🎨 **Interfaz Intuitiva** - Resistor visual con bandas de colores interactivas
- ⚡ **Cálculo en Tiempo Real** - Valores se actualizan automáticamente
- 🎯 **Precisión** - Incluye tolerancias y formateo automático (Ω, kΩ, MΩ)
- 💰 **Monetización Integrada** - Google AdSense con anuncios responsive

## 🚀 Demo en Vivo

- **GitHub Pages**: [Ver Demo](https://jersonjjcr.github.io/calculadora_b-sica_de_resistencia)
- **Vercel**: [Ver Demo en Vercel](https://calculadora-b-sica-de-resistencia.vercel.app) *(configurar después del deploy)*

## 📸 Capturas de Pantalla

![Desktop](./screenshots/desktop.png)
![Mobile](./screenshots/mobile.png)

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Diseño responsive con Flexbox y Grid
- **JavaScript ES6+** - Lógica moderna de la aplicación

## 🔧 Instalación y Uso

### Prerequisitos
- Node.js (v14 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jersonjjcr/calculadora_b-sica_de_resistencia.git

# Navegar al directorio
cd calculadora_b-sica_de_resistencia

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📋 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye para GitHub Pages
- `npm run build:vercel` - Construye para Vercel
- `npm run preview` - Vista previa de la build de producción
- `npm run deploy` - Despliega a GitHub Pages
- `npm run lint` - Ejecuta ESLint para revisar el código

## 🌐 Despliegue

### GitHub Pages
```bash
npm run build
npm run deploy
```

### Vercel
1. Importa el repositorio en [Vercel](https://vercel.com)
2. Configura Build Command: `npm run build:vercel`
3. Output Directory: `dist`
4. Ver [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md) para más detalles

## 💰 Monetización

Este proyecto incluye integración con Google AdSense para monetización. Ver [MONETIZATION.md](./MONETIZATION.md) para configuración completa.

### Configuración rápida:
1. Crea cuenta en Google AdSense
2. Obtén tu Publisher ID y Slot IDs
3. Actualiza `src/config/adConfig.js`
4. Deploy y espera aprobación

## 🎯 Cómo Usar

1. **Selecciona los colores** de las bandas usando los selectores
2. **Observa la resistor visual** que cambia en tiempo real
3. **Lee el valor calculado** con su tolerancia
4. **Cambia el tema** usando el botón en la esquina superior derecha

## 📱 Diseño Responsive

El proyecto incluye breakpoints optimizados para:

- **📱 Móviles** (≤575px): Layout de 1 columna
- **📱 Móviles Landscape** (576-767px): Layout de 2 columnas
- **📟 Tablets** (768-991px): Espaciado optimizado
- **💻 Desktop** (992px+): Diseño completo
- **🖥️ Pantallas Grandes** (1200px+): Contenedor limitado

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👤 Autor

**Jerson JJ**
- GitHub: [@jersonjjcr](https://github.com/jersonjjcr)

## 🙏 Reconocimientos

- Iconos y colores basados en el estándar IEC 60062
- Diseño inspirado en resistores reales
