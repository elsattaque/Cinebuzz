import { Search, Bell, User, PlusCircle} from "lucide-react"; // Ajoute l'icône PlusCircle
import logo from "../../assets/images/LogoCinebuzzV1.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from 'react';

const Header = () => {
  const navigate = useNavigate();

  const goToUserProfile = () => {
    navigate("/user");
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          {/* Logo */}
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
              placeholder="Search for something ..."
              className="search-input"
            />
            <Search className="search-icon" />
          </div>
        </div>

        {/* User Actions */}
        
        <div className="user-section">
          <Link to="/ajouter-film">
             <PlusCircle className="add-pluscircle-icon" />
          </Link>
          <Bell className="notification-icon" />
          <div className="user-avatar" onClick={goToUserProfile} style={{ cursor: "pointer" }}>
            <User className="user-icon" />
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
