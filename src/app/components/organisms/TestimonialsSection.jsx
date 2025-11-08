import React from 'react';
import TestimonialCard from '../molecules/TestimonialCard';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
  // Data dummy testimoni
  const testimonials = [
    { id: 1, quote: "Ya Allah capek", name: "Aril", role: "PM" },
    { id: 2, quote: "Cukup pls", name: "Alma", role: "UI/UX" },
    { id: 3, quote: "lumayan ribet juga ya", name: "Dimas", role: "Gak mau WebDev" },
    { id: 4, quote: "entahlah", name: "Siti", role: "ucup" },
  ];

  return (
    <section className={styles.section} id="testimonial">
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleDeco}></div>
          <h2 className={styles.title}>Testimonials</h2>
        </div>
        <p className={styles.description}>
          Apa Kata Mereka Tentang CareLink: Lihat bagaimana kami membantu keluarga 
          menemukan pengasuh terbaik untuk orang tercinta.
        </p>
      </div>

      {/* Slider Container */}
      <div className={styles.sliderContainer}>
        {/* Scrollable Cards Area */}
        <div className={styles.cardsScrollWrapper}>
            <div style={{ minWidth: '5%' }}></div> 
            
            {testimonials.map((item) => (
                <div key={item.id} style={{ scrollSnapAlign: 'center' }}>
                    <TestimonialCard 
                        quote={item.quote}
                        name={item.name}
                        role={item.role}
                    />
                </div>
            ))}
            
            <div style={{ minWidth: '5%' }}></div>
        </div>

        {/* Navigation (Visual Only untuk saat ini) */}
        <div className={styles.navigation}>
           <div className={`${styles.navArrow} ${styles.arrowLeft}`}>
                <img src="/navigation/arrow.svg" alt="Previous" width="24" height="24" />
            </div>
            <div className={styles.dots}>
                <span className={`${styles.dot} ${styles.active}`}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
            </div>
            <div className={`${styles.navArrow} ${styles.arrowRight}`}>
                <img src="/navigation/arrow.svg" alt="Next" width="24" height="24" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;