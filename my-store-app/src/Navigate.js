// src/Navigate.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navigate() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/'); // 重定向到主页
  };

  return (
    <div>
      <h1>Navigate Component</h1>
      <button onClick={handleNavigateHome}>Go to Home</button>
    </div>
  );
}

export default Navigate;