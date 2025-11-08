'use client';
import React from 'react';
import Link from 'next/link';
import Button from '../atoms/Button';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img 
            src="navigation/logo.svg" 
            alt="logo CareLink" 
            className={styles.logoText}
            />
            {/* <span className={styles.logoText}>Care<span className={styles.highlight}>Link</span></span> */}
          </Link>
        </div>

        <ul className={styles.navLinks}>
          <li><Link href="/" className={styles.activeLink}>Home</Link></li>
          <li><Link href="/tentang-kami">Tentang Kami</Link></li>
          <li><Link href="/booking">Booking</Link></li>
          <li><Link href="/testimonial">Testimonial</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </ul>

        <div className={styles.navActions}>
          <Link href="/login" className={styles.loginLink}>
            Login
          </Link>
          <Button variant="primary" onClick={() => console.log('Ke halaman register')}>
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;