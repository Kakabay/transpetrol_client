import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import HomePage from './pages/HomePage.tsx';
import CompanyPage from './pages/CompanyPage.tsx';
import ContactsPage from './pages/ContactsPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'company',
        element: <CompanyPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
