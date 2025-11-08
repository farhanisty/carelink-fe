import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.section}>
      {/* Lingkaran-lingkaran */}
      <div className={`${styles.decoration} ${styles.decTopRight}`}></div>
      <div className={`${styles.decoration} ${styles.decBottomLeft}`}></div>
      <div className={`${styles.decoration} ${styles.decTopLeft}`}></div>
      <div className={`${styles.decoration} ${styles.decBottomRight}`}></div>

      <div className={styles.container}>
        {/* Bagian Kiri: Teks */}
        <div className={styles.textContent}>
          <h2 className={styles.heading}>
            Sebuah Platform yang Memudahkan Keluarga dan Pengasuh untuk Terhubung.
          </h2>
        </div>

        {/* Bagian Kanan untuk (Video/Gambar nanti) */}
        <div className={styles.mediaPlaceholder}>
            {/* untuk image atau video enaknya */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;