import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import PartnerLogo from '../molecules/PartnerLogo';
import FeatureCard from '../molecules/FeatureCard';
import styles from './PartnersFeatures.module.css';

const PartnersFeatures = () => {
  return (
    <section className={styles.section} id="about">
      {/* Background Dekoratif */}
      <div className={styles.decorativeBg}></div>

      <div className={styles.container}>
        {/* --- Bagian Mitra Kami --- */}
        <SectionTitle 
          title="Mitra Kami" 
          subtitle="We have been working with some Fortune 500+ clients" 
        />
        <div className={styles.partnersWrapper}>
          {/* Render 6 placeholder logo */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
             <PartnerLogo key={item} />
          ))}
        </div>

        {/* --- Bagian Kenapa Memilih CareLink --- */}
        <div style={{ marginTop: '120px' }}> 
            <SectionTitle 
              title="Kenapa Memilih CareLink?" 
              color="var(--color-accent-red)"
            />
            <div className={styles.featuresWrapper}>
              <FeatureCard 
                icon="👥" 
                title="Terpercaya & Terverifikasi"
                description="Semua pengasuh dan penyedia layanan telah melalui proses verifikasi dokumen dan sertifikasi resmi agar keluarga merasa aman."
              />
              <FeatureCard 
                icon="🔍"
                title="Kemudahan Pencarian"
                description="Temukan pengasuh atau layanan berdasarkan lokasi, kebutuhan, hingga sertifikasi khusus dengan fitur pencarian cerdas."
              />
              <FeatureCard 
                icon="📊"
                title="Kelola Semua Dalam Satu Tempat"
                description="Dari pencarian, booking, pembayaran, hingga penilaian layanan — semua bisa dilakukan melalui satu dashboard terpadu."
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersFeatures;