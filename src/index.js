import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './app/store/store';
import { Provider } from 'react-redux';
import App from './App';
import SongSaver from './app/store/SongSaver';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Something went wrong!</div>,
    children: [
      {
        path: '/',
        element: <SongSaver />
      },
      {
        path: 'about',
        element: <div>About Page!</div>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
