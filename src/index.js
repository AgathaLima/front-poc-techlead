import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import CadastrarUsuario from './routes/cadastrar-usuario';
import ErrorPage from './routes/errorPage';
import Departamento from './routes/departamento';
import EditarUsuario from './routes/editar-usuario';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cadastrar-usuario",
        element: <CadastrarUsuario />
      },
      {
        path: "/departamento",
        element: <Departamento />
      },
      {
        path: "/editar-usuario/:id",
        element: <EditarUsuario />
      },
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);