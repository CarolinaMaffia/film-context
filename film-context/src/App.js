import React from 'react';
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import { MoviesProvider } from './contexts/MoviesContext';
import { UserProvider } from './contexts/UserContext';

function App() {

  return (
    <div>
      <UserProvider>
        <MoviesProvider>
          <Navbar />
          <MovieList />
        </MoviesProvider>
      </UserProvider>
    </div>
  );
}

export default App;
