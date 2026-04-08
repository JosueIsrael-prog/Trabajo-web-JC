import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { hotwheelsService } from '../services/api';
import Navbar from '../components/Navbar';
import WelcomeBanner from '../components/WelcomeBanner';
import UserProfile from '../components/UserProfile';
import StatsCard from '../components/StatsCard';
import HotwheelsList from '../components/HotwheelsList';
import HotwheelsForm from '../components/HotwheelsForm';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [hotwheels, setHotwheels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
      return;
    }
    fetchHotwheels();
  }, [navigate]);

  const fetchHotwheels = async () => {
    setLoading(true);
    try {
      const response = await hotwheelsService.getAll();
      setHotwheels(response.data);
      setError('');
    } catch (err) {
      setError('Error al cargar los hotwheels');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = () => {
    const totalValue = hotwheels.reduce((sum, h) => sum + (h.estimatedValue || 0), 0);
    const conditions = {};
    hotwheels.forEach(h => {
      conditions[h.condition] = (conditions[h.condition] || 0) + 1;
    });
    return {
      totalValue,
      totalCount: hotwheels.length,
      conditions,
      mostCondition: Object.entries(conditions).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'
    };
  };

  const stats = calculateStats();

  const handleAddNew = () => {
    setEditingId(null);
    setEditingData(null);
    setShowForm(true);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditingData(item);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este hotwheels?')) {
      try {
        await hotwheelsService.delete(id);
        setHotwheels(hotwheels.filter(h => h.id !== id));
      } catch (err) {
        setError('Error al eliminar');
        console.error(err);
      }
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingId(null);
    setEditingData(null);
  };

  const handleFormSubmit = async () => {
    await fetchHotwheels();
    handleFormClose();
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <Navbar user={user} onLogout={handleLogout} />

      <main className="dashboard-main">
        <WelcomeBanner username={user.username} />

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Cargando tu colección...</p>
          </div>
        ) : (
          <>
            <section className="dashboard-section">
              <h2 className="section-title">Perfil</h2>
              <UserProfile user={user} hotwheelsCount={stats.totalCount} />
            </section>

            <section className="dashboard-section">
              <h2 className="section-title">Estadísticas de tu Colección</h2>
              <div className="stats-grid">
                <StatsCard 
                  icon="🏎️" 
                  label="Total de Hotwheels" 
                  value={stats.totalCount}
                  color="blue"
                />
                <StatsCard 
                  icon="💰" 
                  label="Valor Total" 
                  value={`$${stats.totalValue.toFixed(2)}`}
                  color="green"
                />
                <StatsCard 
                  icon="🏆" 
                  label="Condition Dominante" 
                  value={stats.mostCondition}
                  color="orange"
                />
                <StatsCard 
                  icon="📊" 
                  label="Valor Promedio" 
                  value={stats.totalCount > 0 ? `$${(stats.totalValue / stats.totalCount).toFixed(2)}` : '$0.00'}
                  color="purple"
                />
              </div>
            </section>

            <section className="dashboard-section">
              <div className="section-header">
                <h2 className="section-title">Mi Colección</h2>
                <button className="btn-primary" onClick={handleAddNew}>
                  + Agregar Hotwheels
                </button>
              </div>

              {showForm && (
                <HotwheelsForm
                  editingId={editingId}
                  editingData={editingData}
                  onClose={handleFormClose}
                  onSubmit={handleFormSubmit}
                />
              )}

              {stats.totalCount === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">🚗</div>
                  <p>No tienes hotwheels aún. ¡Comienza a agregar tu colección!</p>
                  <button className="btn-primary" onClick={handleAddNew}>
                    Agregar mi primer Hotwheels
                  </button>
                </div>
              ) : (
                <HotwheelsList
                  hotwheels={hotwheels}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
