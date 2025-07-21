import { Search, Bell, User, Settings, PlusCircle } from "lucide-react";
import logo from "../../assets/images/LogoCinebuzzV1.png";
import "./Header.css";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  // Simule la récupération du nom utilisateur (après login)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.prenom) {
      setUserName(storedUser.prenom);
    }
  }, []);

  const goToUserProfile = () => {
    navigate("/user");
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="CineBuzz"
            className="logo"
            width="100"
            height="65"
          />
        </Link>

        {/* Search Bar */}
        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Rechercher ..."
              className="search-input"
            />
            <Search className="search-icon" />
          </div>
        </div>

        {/* User Actions */}

        <div className="user-section">
          {/* Lien vers ajout de film */}
          <Link to="/ajouter-film">
            <PlusCircle className="add-pluscircle-icon" />
          </Link>

          {/* Lien vers l'accueil */}
          <Link to="/" className="nav-link">
            Accueil
          </Link>

          {/* Lien vers les paramètres */}
          <Link to="/settings" className="nav-link">
            <Settings className="settings-icon" />
          </Link>

          {/* Notification */}
          <Bell className="notification-icon" />

          {/* Profil utilisateur */}
          <div
            className="user-avatar"
            onClick={goToUserProfile}
            style={{ cursor: "pointer" }}
          >
            <User className="user-icon" />
          </div>

          {/* Affichage du prénom s'il est connu */}
          {userName && <span className="username">Bienvenue, {userName}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
