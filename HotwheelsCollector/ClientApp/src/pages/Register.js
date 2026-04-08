import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import '../styles/Auth.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setLoading(true);

    try {
      const response = await authService.register(username, email, password);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data || 'Error al registrarse');
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
            <div className="auth-logo">🎉</div>
            <h1>Únete Hoy</h1>
            <p className="auth-subtitle">Comienza a coleccionar Hotwheels</p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleRegister}>
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
              <label htmlFor="email">
                <span className="field-icon">📧</span>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
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
                placeholder="Mínimo 6 caracteres"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                <span className="field-icon">✓</span>
                Confirmar Contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repite tu contraseña"
                required
              />
            </div>

            <button type="submit" disabled={loading} className="auth-button">
              {loading ? (
                <>
                  <span className="button-spinner"></span>
                  Registrando...
                </>
              ) : (
                <>Crear Cuenta</>
              )}
            </button>
          </form>

          <div className="auth-divider">O</div>

          <div className="auth-footer">
            <p className="auth-text">¿Ya tienes cuenta?</p>
            <a href="/login" className="auth-link">Inicia sesión aquí</a>
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
