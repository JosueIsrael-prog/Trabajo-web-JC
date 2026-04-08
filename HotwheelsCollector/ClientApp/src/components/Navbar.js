import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar({ user, onLogout }) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    onLogout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="brand-icon">🏎️</div>
          <h1>Hotwheels Collector</h1>
        </div>

        <div className="navbar-menu">
          <div className="user-menu-container">
            <button 
              className="user-button"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="user-avatar">{user.username.charAt(0).toUpperCase()}</div>
              <span className="username">{user.username}</span>
              <span className="dropdown-arrow">▼</span>
            </button>

            {showUserMenu && (
              <div className="user-dropdown">
                <div className="dropdown-header">
                  <p className="user-name">{user.username}</p>
                  <p className="user-email">{user.email}</p>
                </div>
                <hr />
                <button className="dropdown-item" onClick={() => setShowUserMenu(false)}>
                  ⚙️ Configuración
                </button>
                <button className="dropdown-item logout" onClick={handleLogout}>
                  🚪 Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
