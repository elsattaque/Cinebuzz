import React from "react";
import { Menu, TrendingUp, Heart, Bookmark, User } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { icon: Menu, label: "Index", isActive: true },
    { icon: TrendingUp, label: "Trends", isActive: false },
    { icon: Heart, label: "Following", isActive: false },
    { icon: Bookmark, label: "Playlist", isActive: false },
    { icon: User, label: "Contact", isActive: false },
  ];

  const audioLevels = [65, 45, 80, 30, 90];

  return (
    <aside className="sidebar">
      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className={`nav-item ${item.isActive ? "nav-item-active" : ""}`}
            >
              <IconComponent className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </div>
          );
        })}
      </nav>

      {/* Audio Controls */}
      <div className="audio-controls">
        {audioLevels.map((level, index) => (
          <div key={index} className="audio-control">
            <div className="audio-indicator"></div>
            <div className="audio-bar">
              <div
                className="audio-progress"
                style={{ width: `${level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Brand Footer */}
      <div className="sidebar-footer">
        <div className="brand-title">CINEBUZZ</div>
        <div className="brand-subtitle">DESIGN</div>
      </div>
    </aside>
  );
};

export default Sidebar;
