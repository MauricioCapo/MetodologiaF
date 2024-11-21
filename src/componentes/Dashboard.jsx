import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <div>
      <h2>Bienvenido, {user.username}!</h2>
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Dashboard;