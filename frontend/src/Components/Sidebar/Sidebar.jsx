import { Menu, TrendingUp, Heart, Bookmark, User } from "lucide-react";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import React from "react";

const Sidebar = () => {
  // État pour stocker les films top notés
  const [topFilms, setTopFilms] = useState([]);

  // État pour les éléments de menu (facultatif pour highlight actif)
  const menuItems = [
    { icon: Menu, label: "Accueil", isActive: true },
    { icon: TrendingUp, label: "Tendances", isActive: false },
    { icon: Heart, label: "Abonnements", isActive: false },
    { icon: Bookmark, label: "Liste de lecture", isActive: false },
    { icon: User, label: "Contact", isActive: false },
  ];

  // Appel API pour récupérer les 3 films avec la meilleure moyenne
  useEffect(() => {
    const fetchTopFilms = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/film/top/moyenne');
        const data = await response.json();
        setTopFilms(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des top films :', error);
      }
    };

    fetchTopFilms();
  }, []);

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
      <div className="top-rated-section">
        <h4 className="sidebar-subtitle">🎖️ Top Films du jour</h4>
        <ul className="top-film-list">
          {topFilms.length > 0 ? (
            topFilms.map((film) => (
              <li key={film.Id_Film} className="top-film-item">
                <Link to={`/movie/${film.Id_Film}`} className="top-film-link">
                  <span className="top-film-title">{film.titre}</span>
                </Link>
                <span className="top-film-note">{parseFloat(film.moyenne).toFixed(2)} ⭐</span>
              </li>
            ))
          ) : (
            <p>Aucun film disponible.</p>
          )}
        </ul>
      </div>

    
      <div className="sidebar-footer">
        <div className="brand-title">CINEBUZZ</div>
      </div>
    </aside>
  );
};

export default Sidebar;
