import React, { useState } from 'react';
import '../styles/UserProfile.css';

export default function UserProfile({ user, hotwheelsCount }) {
  return (
    <div className="user-profile-card">
      <div className="profile-header">
        <div className="profile-avatar">{user.username.charAt(0).toUpperCase()}</div>
        <div className="profile-info">
          <h2>{user.username}</h2>
          <p className="profile-email">{user.email}</p>
          <p className="profile-member">Miembro desde {new Date(user.createdAt || Date.now()).toLocaleDateString('es-ES')}</p>
        </div>
      </div>
      
      <div className="profile-stats">
        <div className="profile-stat">
          <span className="stat-number">{hotwheelsCount}</span>
          <span className="stat-label">Hotwheels en Colección</span>
        </div>
      </div>
    </div>
  );
}
