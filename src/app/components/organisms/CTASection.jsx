import React from 'react';
import Button from '../atoms/Button';
import styles from './CTASection.module.css';

const CTASection = () => {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Mulai Perjalanan Perawatan yang Lebih <br />
          <span className={styles.highlightGreen}>Tenang</span> Bersama 
          <span className={styles.highlightGreen}> CareLink</span>
        </h2>
        <p className={styles.description}>
          Bergabung sekarang dan temukan pengasuh yang peduli dan profesional, hanya dalam beberapa klik.
        </p>
        <Button variant="primary">
          Cari Pengasuh Sekarang →
        </Button>
      </div>

      {/* Area Ilustrasi */}
      <div className={styles.illustrationWrapper}>
        {/* Placeholder Ilustrasi Utama */}
        <div className={styles.illustrationPlaceholder}>
          <img src="/orangtuaNgobrol.png" alt="orangtua Ngobrol" className={styles.ctaimgae} />
        </div>
      </div>
    </section>
  );
};

export default CTASection;