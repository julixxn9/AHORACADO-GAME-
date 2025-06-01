import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import Contador from './components/test/contador.jsx'
// import Teclado from './components/test/teclado.jsx';
// import Focos from './components/test/Focos.jsx';
// import Mayus from './components/test/Mayus.jsx';
// import Formulario from './components/formulario/Formulario.jsx';
import App from './components/App.jsx';

createRoot( document.getElementById('root') ).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
