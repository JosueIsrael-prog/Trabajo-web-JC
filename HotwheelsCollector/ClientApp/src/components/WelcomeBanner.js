import React from 'react';
import '../styles/WelcomeBanner.css';

export default function WelcomeBanner({ username }) {
  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buenos días';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  };

  return (
    <div className="welcome-banner">
      <div className="banner-content">
        <h1>{getTimeGreeting()}, <span>{username}</span>! 🏎️</h1>
        <p>Bienvenido a tu colección de Hotwheels</p>
      </div>
      <div className="banner-decoration">
        <span className="decoration-emoji">🏁</span>
      </div>
    </div>
  );
}
