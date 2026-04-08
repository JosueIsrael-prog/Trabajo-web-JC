import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import '../styles/Auth.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authService.login(username, password);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-decoration left-decoration">
          <div className="decoration-item">🏎️</div>
          <div className="decoration-item">🚗</div>
          <div className="decoration-item">🏁</div>
        </div>

        <div className="auth-box">
          <div className="auth-header">
            <div className="auth-logo">🏎️</div>
            <h1>Hotwheels Collector</h1>
            <p className="auth-subtitle">Gestiona tu colección de autos míticos</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">
                <span className="field-icon">👤</span>
                Usuario
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tu nombre de usuario"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <span className="field-icon">🔒</span>
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Tu contraseña"
                required
              />
            </div>

            <button type="submit" disabled={loading} className="auth-button">
              {loading ? (
                <>
                  <span className="button-spinner"></span>
                  Iniciando sesión...
                </>
              ) : (
                <>Iniciar Sesión</>
              )}
            </button>
          </form>

          <div className="auth-divider">O</div>

          <div className="auth-footer">
            <p className="auth-text">¿No tienes cuenta?</p>
            <a href="/register" className="auth-link">Crea una aquí</a>
          </div>
        </div>

        <div className="auth-decoration right-decoration">
          <div className="decoration-item">🚙</div>
          <div className="decoration-item">💨</div>
          <div className="decoration-item">⚡</div>
        </div>
      </div>
    </div>
  );
}
