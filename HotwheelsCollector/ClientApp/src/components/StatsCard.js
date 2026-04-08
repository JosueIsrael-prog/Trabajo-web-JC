import React from 'react';
import '../styles/StatsCard.css';

export default function StatsCard({ icon, label, value, color }) {
  return (
    <div className={`stats-card stats-${color}`}>
      <div className="stats-icon">{icon}</div>
      <div className="stats-content">
        <p className="stats-label">{label}</p>
        <h3 className="stats-value">{value}</h3>
      </div>
    </div>
  );
}
