"use client";

import styles from "./AboutSection.module.css";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/about.png" alt="Tentang GlobalTrade" />
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>Partner Terpercaya Bisnis Internasional Anda</h2>
          <p className={styles.description}>
            Kami adalah penyedia layanan perizinan ekspor dan impor terkemuka yang berdedikasi untuk mempermudah birokrasi perdagangan internasional. Dengan pengalaman bertahun-tahun, kami membantu ribuan perusahaan mengembangkan bisnis mereka ke pasar global tanpa hambatan regulasi.
          </p>
          <p className={styles.description}>
            Sistem tracking modern kami memastikan Anda selalu mengetahui status perizinan secara real-time.
          </p>
          
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 color="var(--color-secondary)" /> Proses Cepat & Transparan
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 color="var(--color-secondary)" /> Dukungan Ahli Regulasi
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 color="var(--color-secondary)" /> Platform Digital Terintegrasi
            </li>
          </ul>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10k+</span>
              <span className={styles.statLabel}>Izin Selesai</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99%</span>
              <span className={styles.statLabel}>Kepuasan Klien</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
