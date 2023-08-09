import React from 'react';
import {MyFavoritesPage} from './pages/MyFavoritesPage';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {HomePage} from './pages/HomePage';

// localhost:3000     - disneycharacter 
// localhost:3000/favorites   - ulubione które uzytkownik zaznaczył
const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage/>,
  },
  {
    path: "/favorites",
    element: <MyFavoritesPage />,
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
