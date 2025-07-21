import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Film from './pages/Film';
import Don from './pages/Don'; 
import MovieCardDetails from './components/MovieCardDetails.jsx';
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import UserProfile from "./components/UserProfile.js";
import "./App.css";
import React from 'react';

// import MovieCardDetails from './Components/MovieCardDetails';
// import UserProfile from './Components/UserProfile';
// import RealisateurDetails from './Components/RealisateurDetails';

// function App() {
//   return (
//       <div className="App">
//         <Routes>
//           {/* Route dynamique qui passe l'id en paramètre */}
//           <Route path="/film/:id" element={<MovieCardDetails />} />
//           <Route path="/realisateur" element={<RealisateurDetails />} />
//           {/* Route pour le profil utilisateur */}
//           {/* <Route path="/profile" element={<UserProfile />} /> */}

//           {/* Route par défaut ou autre page d'accueil */}
//           {/* <Route path="*" element={<div>Page non trouvée</div>} /> */}
//         </Routes>
//       </div>

// function Home() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <MovieCardDetails />
//         <br />
//         <Link to="/film">FilmTest</Link>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       {/* <Route path="/" element={<Home />} /> */}
//       <Route path="/film" element={<Film />} />
//       <Route path="/don" element={<Don />} />
//     </Routes>
//   );
// }

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/movie/:id" element={<MovieCardDetails />} />
          <Route path="/film/:id" element={<Film />} />
          <Route path="/don/:id" element={<Don />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </div>
    </div>

  );
};

export default App;



