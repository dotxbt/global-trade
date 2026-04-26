"use client";

import Link from "next/link";
import { Ship, Menu } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Ship className={styles.logoIcon} size={32} />
          <span>GlobalTrade</span>
        </Link>

        <ul className={styles.navLinks}>
          <li><Link href="/" className={styles.navLink}>Home</Link></li>
          <li><Link href="#about" className={styles.navLink}>About Us</Link></li>
          <li><Link href="#services" className={styles.navLink}>Services</Link></li>
          <li><Link href="/perizinan" className={styles.navLink}>Order Perizinan</Link></li>
          <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
        </ul>

        <div className={styles.actions}>
          <Link href="/login" className="btn btn-primary">
            Dashboard
          </Link>
          <button className={styles.mobileMenuBtn}>
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
}
