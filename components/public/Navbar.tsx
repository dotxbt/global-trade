"use client";

import { useState } from "react";
import Link from "next/link";
import { Ship, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Ship className={styles.logoIcon} size={32} />
          <span>GlobalTrade</span>
        </Link>

        <ul className={`${styles.navLinks} ${isMobileOpen ? styles.mobileOpen : ""}`}>
          <li><Link href="/" className={styles.navLink} onClick={() => setIsMobileOpen(false)}>Home</Link></li>
          <li><Link href="#about" className={styles.navLink} onClick={() => setIsMobileOpen(false)}>About Us</Link></li>
          <li><Link href="#services" className={styles.navLink} onClick={() => setIsMobileOpen(false)}>Services</Link></li>
          <li><Link href="/perizinan" className={styles.navLink} onClick={() => setIsMobileOpen(false)}>Order Perizinan</Link></li>
          <li><Link href="#contact" className={styles.navLink} onClick={() => setIsMobileOpen(false)}>Contact</Link></li>
          <li className={styles.mobileOnlyBtn}>
            <Link href="/login" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setIsMobileOpen(false)}>
              Dashboard
            </Link>
          </li>
        </ul>

        <div className={styles.actions}>
          <Link href="/login" className={`btn btn-primary ${styles.desktopBtn}`}>
            Dashboard
          </Link>
          <button className={styles.mobileMenuBtn} onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}

