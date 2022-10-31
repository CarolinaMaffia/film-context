import React, { useState } from 'react';
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import { UserProvider } from './contexts/UserContext';


function App() {
  return (
    <div>
      <UserProvider>
        <Navbar />
        <MovieList />
      </UserProvider>
    </div>
  );
}

export default App;
