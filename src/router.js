import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import SongSaver from './components/SongSaver';
import About from './components/About';

export const router = createBrowserRouter([
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
