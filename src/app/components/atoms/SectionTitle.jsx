import React from 'react';

const SectionTitle = ({ title, subtitle, color = 'var(--color-accent-red)' }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h2 style={{ 
        color: color, 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        marginBottom: '10px' 
      }}>
        {title}
      </h2>
      {subtitle && <p style={{ color: 'var(--color-text-gray)', fontSize: '1.1rem' }}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;