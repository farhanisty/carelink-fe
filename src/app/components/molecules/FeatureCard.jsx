import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '40px 30px',
      borderRadius: '16px',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      flex: 1,
      minWidth: '280px',
      maxWidth: '350px',
      zIndex: 2, 
    }}>
      {/* Icon Placeholder */}
      <div style={{ 
        fontSize: '40px', 
        marginBottom: '20px',
        color: 'var(--color-primary)',
        backgroundColor: '#F0F5ED', 
        width: '80px',
        height: '80px',
        lineHeight: '80px',
        borderRadius: '20px',
        margin: '0 auto 24px'
      }}>
        {icon} 
      </div>
      <h3 style={{ 
        fontSize: '1.5rem', 
        color: 'var(--color-text-dark)', 
        marginBottom: '16px',
        fontWeight: '700'
      }}>
        {title}
      </h3>
      <p style={{ 
        color: 'var(--color-text-gray)', 
        lineHeight: '1.6',
        fontSize: '0.95rem'
       }}>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;