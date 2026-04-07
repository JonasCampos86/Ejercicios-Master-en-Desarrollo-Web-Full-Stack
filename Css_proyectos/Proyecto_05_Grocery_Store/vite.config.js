import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Usa rutas relativas en los enlaces generados en html
  server: {
    host: true, // Permite acceder desde cualquier dispositivo de tu red (responsive en móvil/tablet)
    watch: {
      usePolling: true, // Recomendado para WSL: detecta cambios en archivos
    },
  },
});
