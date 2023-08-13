import React from 'react';
import {MyFavoritesPage} from './pages/MyFavoritesPage';
import './App.css';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import { useState } from 'react';

// localhost:3000     - disneycharacter 
// localhost:3000/favorites   - ulubione które uzytkownik zaznaczył

function App() {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomePage favoriteCharacters={favoriteCharacters} setFavoriteCharacters={setFavoriteCharacters}/>}/>
        <Route path="/my-favorite-page"  element={<MyFavoritesPage favoriteCharacters={favoriteCharacters} setFavoriteCharacters={setFavoriteCharacters}/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
