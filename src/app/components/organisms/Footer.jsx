import React from 'react';
import Link from 'next/link';
// import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Lingkaran Kuning (gak penting" amat) */}
      <div className={styles.decoration}></div>

      <div className={styles.container}>
        {/* Bagian Kiri */}
        <div className={styles.leftSection}>
          <img 
            src="navigation/logo.svg" 
            alt="logo CareLink" 
            className={styles.logoText}
            />
          
          <p className={styles.copyright}>
            © 2025 CareLink.id All Rights Reserved
          </p>
        </div>

        {/* Bagian Kanan */}
        <div className={styles.rightSection}>
          <h3 className={styles.taglineTitle}>
            Web Pencarian Pengasuh Profesional
          </h3>
          <p className={styles.taglineDesc}>
            Karena merawat orang yang kita cintai seharusnya tidak rumit, tapi penuh kasih.
          </p>

          {/* Social Media Icons */}
          <div className={styles.socialMedia}>
            <Link href="#" className={styles.socialIcon}><img src="/navigation/fb.png" alt="Facebook" /></Link>
            <Link href="#" className={styles.socialIcon}><img src="/navigation/ig.png" alt="Instagram" /></Link>
            <Link href="#" className={styles.socialIcon}>[YT]</Link>
            <Link href="#" className={styles.socialIcon}>[IN]</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;