import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './app/store/store';
import { Provider } from 'react-redux';
import App from './App';
import SongSaver from './app/store/Feature/SongSaver/SongSaver';

import '../node_modules/bulma/css/bulma.min.css';
import About from './components/About';

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
        element: <About />
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
