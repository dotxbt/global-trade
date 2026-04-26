"use client";

import Link from "next/link";
import { Ship } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          
          <div>
            <Link href="/" className={styles.brand}>
              <Ship className={styles.brandIcon} size={32} />
              <span>GlobalTrade</span>
            </Link>
            <p className={styles.brandDesc}>
              Mitra terpercaya Anda untuk solusi perizinan ekspor dan impor yang cepat, aman, dan transparan.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook"><span style={{ fontWeight: 600 }}>Fb</span></a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter"><span style={{ fontWeight: 600 }}>Tw</span></a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram"><span style={{ fontWeight: 600 }}>Ig</span></a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><span style={{ fontWeight: 600 }}>In</span></a>
            </div>
          </div>
          
          <div>
            <h4 className={styles.title}>Layanan</h4>
            <div className={styles.links}>
              <Link href="#" className={styles.link}>Izin Ekspor</Link>
              <Link href="#" className={styles.link}>Izin Impor</Link>
              <Link href="#" className={styles.link}>Customs Clearance</Link>
              <Link href="#" className={styles.link}>Konsultasi Regulasi</Link>
            </div>
          </div>
          
          <div>
            <h4 className={styles.title}>Perusahaan</h4>
            <div className={styles.links}>
              <Link href="#about" className={styles.link}>Tentang Kami</Link>
              <Link href="#" className={styles.link}>Karir</Link>
              <Link href="#" className={styles.link}>Berita & Artikel</Link>
              <Link href="#contact" className={styles.link}>Kontak</Link>
            </div>
          </div>
          
          <div>
            <h4 className={styles.title}>Bantuan</h4>
            <div className={styles.links}>
              <Link href="#" className={styles.link}>FAQ</Link>
              <Link href="#" className={styles.link}>Syarat & Ketentuan</Link>
              <Link href="#" className={styles.link}>Kebijakan Privasi</Link>
              <Link href="/login" className={styles.link}>Login Portal</Link>
            </div>
          </div>

        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} GlobalTrade. Hak Cipta Dilindungi.</p>
          <p>Didesain untuk Efisiensi Bisnis Global.</p>
        </div>
      </div>
    </footer>
  );
}
