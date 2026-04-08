import React, { useState, useEffect } from 'react';
import { hotwheelsService } from '../services/api';
import '../styles/HotwheelsForm.css';

export default function HotwheelsForm({ editingId, editingData, onClose, onSubmit }) {
  const [data, setData] = useState({
    name: '',
    model: '',
    color: '',
    year: new Date().getFullYear(),
    condition: 'Excellent',
    estimatedValue: 0,
    notes: '',
    acquisitionDate: new Date().toISOString().split('T')[0],
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editingData) {
      setData({
        name: editingData.name,
        model: editingData.model,
        color: editingData.color,
        year: editingData.year,
        condition: editingData.condition,
        estimatedValue: editingData.estimatedValue,
        notes: editingData.notes || '',
        acquisitionDate: editingData.acquisitionDate.split('T')[0],
      });
    }
  }, [editingData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: name === 'year' || name === 'estimatedValue' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (editingId) {
        await hotwheelsService.update(editingId, data);
      } else {
        await hotwheelsService.create(data);
      }
      onSubmit();
    } catch (err) {
      setError(err.response?.data || 'Error al guardar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-modal-overlay" onClick={onClose}>
      <div className="form-modal" onClick={e => e.stopPropagation()}>
        <h2>{editingId ? 'Editar Hotwheels' : 'Agregar Nuevo Hotwheels'}</h2>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre *</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Modelo *</label>
              <input
                type="text"
                name="model"
                value={data.model}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Color *</label>
              <input
                type="text"
                name="color"
                value={data.color}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Año *</label>
              <input
                type="number"
                name="year"
                value={data.year}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Condición *</label>
              <select name="condition" value={data.condition} onChange={handleChange}>
                <option>New</option>
                <option>Mint</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                <option>Poor</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Valor Estimado ($) *</label>
              <input
                type="number"
                name="estimatedValue"
                value={data.estimatedValue}
                onChange={handleChange}
                step="0.01"
                required
              />
            </div>
            <div className="form-group">
              <label>Fecha de Adquisición *</label>
              <input
                type="date"
                name="acquisitionDate"
                value={data.acquisitionDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Notas</label>
            <textarea
              name="notes"
              value={data.notes}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" disabled={loading} className="btn-primary">
              {loading ? 'Guardando...' : 'Guardar'}
            </button>
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
