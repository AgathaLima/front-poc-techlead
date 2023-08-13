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
import { CadastrarDeparatemento } from './routes/cadastrar-departamento';
import { EditarDepartamento } from './routes/editar-departamento';
import { Login } from './routes/login';

import AuthGuard from './hoc/authGuard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: AuthGuard(Home)
      },

      {
        path: "/cadastrar-usuario",
        Component:AuthGuard(CadastrarUsuario)
      },
      {
        path: "/departamento",
        Component: AuthGuard(Departamento)
      },
      {
        path: "/editar-usuario/:id",
        Component: AuthGuard(EditarUsuario)
      },
      {
        path: "/cadastrar-departamento",
        Component: AuthGuard(CadastrarDeparatemento)
      },
      {
        path: "/editar-departamento/:id",
        Component: AuthGuard(EditarDepartamento)
      },
      {
        path: "/login",
        Component: Login
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