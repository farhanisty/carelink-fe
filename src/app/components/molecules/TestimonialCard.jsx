import React from 'react';

const TestimonialCard = ({ quote, name, role }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '300px',
      flexShrink: 0,  
    }}>
      {/* Bagian Kotak Merah (Bubble) */}
      <div style={{
        backgroundColor: 'var(--color-accent-red, #AB4E40)',
        color: 'white',
        padding: '30px',
        borderRadius: '20px',
        fontSize: '1.1rem',
        textAlign: 'center',
        position: 'relative',
        minHeight: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '20px'
      }}>
        "{quote}"
        
        {/* Balon Percakapan */}
        <div style={{
            position: 'absolute',
            bottom: '-15px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            borderTop: '15px solid var(--color-accent-red, #AB4E40)'
        }}></div>
      </div>

      {/* Bagian Info User */}
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ 
            color: 'var(--color-accent-red, #AB4E40)', 
            fontWeight: 'bold', 
            fontSize: '1.1rem',
            marginBottom: '4px'
        }}>
            {name}
        </h4>
        <p style={{ color: 'var(--color-text-dark)', fontSize: '0.9rem' }}>
            {role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;