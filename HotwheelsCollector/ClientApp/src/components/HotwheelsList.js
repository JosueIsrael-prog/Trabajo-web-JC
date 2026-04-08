import React from 'react';
import '../styles/HotwheelsList.css';

export default function HotwheelsList({ hotwheels, onEdit, onDelete }) {
  if (hotwheels.length === 0) {
    return (
      <div className="empty-state">
        <p>No tienes hotwheels aún. ¡Comienza a agregar tu colección!</p>
      </div>
    );
  }

  return (
    <div className="hotwheels-grid">
      {hotwheels.map(item => (
        <div key={item.id} className="hotwheels-card">
          <div className="card-header">
            <h3>{item.name}</h3>
            <span className={`condition-badge condition-${item.condition.toLowerCase()}`}>
              {item.condition}
            </span>
          </div>
          
          <div className="card-body">
            <div className="detail-row">
              <span className="label">Modelo:</span>
              <span className="value">{item.model}</span>
            </div>
            <div className="detail-row">
              <span className="label">Color:</span>
              <span className="value">{item.color}</span>
            </div>
            <div className="detail-row">
              <span className="label">Año:</span>
              <span className="value">{item.year}</span>
            </div>
            <div className="detail-row">
              <span className="label">Valor:</span>
              <span className="value price">${item.estimatedValue.toFixed(2)}</span>
            </div>
            <div className="detail-row">
              <span className="label">Adquirido:</span>
              <span className="value">{new Date(item.acquisitionDate).toLocaleDateString()}</span>
            </div>
            {item.notes && (
              <div className="detail-row">
                <span className="label">Notas:</span>
                <span className="value notes">{item.notes}</span>
              </div>
            )}
          </div>

          <div className="card-actions">
            <button className="btn-edit" onClick={() => onEdit(item)}>
              ✏️ Editar
            </button>
            <button className="btn-delete" onClick={() => onDelete(item.id)}>
              🗑️ Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
