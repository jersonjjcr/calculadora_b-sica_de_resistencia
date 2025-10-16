# Despliegue en Vercel

## Pasos para desplegar en Vercel:

1. **Conectar repositorio:**
   - Ve a [Vercel](https://vercel.com)
   - Importa tu repositorio de GitHub
   - Selecciona `calculadora_b-sica_de_resistencia`

2. **Configuración del proyecto:**
   - Framework Preset: **Vite**
   - Root Directory: `./` (raíz del proyecto)
   - Build Command: `npm run build:vercel`
   - Output Directory: `dist`

3. **Variables de entorno (opcional):**
   - No se requieren para este proyecto

4. **Deploy:**
   - Haz click en "Deploy"
   - Vercel automáticamente detectará la configuración del `vercel.json`

## Comandos importantes:

```bash
# Para desarrollo local
npm run dev

# Para build de GitHub Pages
npm run build
npm run deploy

# Para build de Vercel (usado automáticamente por Vercel)
npm run build:vercel
```

## Diferencias entre plataformas:

- **GitHub Pages**: Usa `base: '/calculadora_b-sica_de_resistencia/'`
- **Vercel**: Usa `base: '/'`

El archivo `vercel.json` configura automáticamente las redirecciones necesarias para el SPA.