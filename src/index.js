import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './app/store/store';
import { Provider } from 'react-redux';
import App from './App';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <div>Something went wrong!</div>,
    children: [
      {
        path: '/App',
        element: <App />
      }
    ]
  },
  {
    path: 'about',
    element: <div>About this app page!</div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
