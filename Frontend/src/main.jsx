import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './pages/Login'; 
import GlobalStyle from './Components/GlobalStyle';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GlobalStyle/>
    <Login />
  </StrictMode>
);
