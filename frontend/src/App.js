import React from 'react';
import './App.css';

import MovieCardDetails from './Components/MovieCardDetails';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <div className="App">
      <MovieCardDetails />

      <UserProfile />
    </div>
  );
}

export default App;

