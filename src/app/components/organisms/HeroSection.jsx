import React from 'react';
import Button from '../atoms/Button'; 
import styles from './HeroSection.module.css'; 

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* Bagian Kiri: Teks */}
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          Temukan <span className={styles.highlight}>Pengasuh Terpercaya</span> untuk Orang Tercinta
        </h1>
        <p className={styles.description}>
          CareLink hadir untuk menghubungkan keluarga dengan perawat lansia yang tepat. 
          Layanan profesional, penuh kasih sayang, dan terverifikasi untuk kenyamanan orang tua Anda.
        </p>
        <Button variant="primary">
          Cari Pengasuh Sekarang →
        </Button>
      </div>

      <div className={styles.imageContent}>
        <div className={styles.imagePlaceholder}>
          <img 
            src="/orangtua.png" 
            alt="Ilustrasi Pengasuh dan Lansia" 
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;