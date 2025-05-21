/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // Intentamos deshabilitar el modo oscuro de Tailwind directamente
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/**/*.{js,ts,jsx,tsx,mdx}', // Comentado si no tienes directorio src
  ],
  theme: {
    extend: {
      // Aquí podrías extender tu tema si es necesario en el futuro
    },
  },
  plugins: [
    // Aquí podrías añadir plugins de Tailwind si los usas
  ],
}; 