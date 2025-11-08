'use client';
import React from 'react';

const Button = ({ children, onClick, variant = 'primary' }) => {
  const baseStyle = {
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    transition: 'all 0.3s ease',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'transparent',
      border: '2px solid var(--color-primary)',
      color: 'var(--color-primary)',
    }
  };

  return (
    <button style={{ ...baseStyle, ...variants[variant] }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;