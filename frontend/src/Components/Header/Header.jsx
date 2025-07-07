import React from "react";
import { Search, Bell, User } from "lucide-react";
import logo from "../../assets/images/LogoCinebuzzV1.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <img
          src={logo}
          alt="CineBuzz"
          className="logo"
          width="100"
          height="65"
        />

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
          <Bell className="notification-icon" />
          <div className="user-avatar">
            <User className="user-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
