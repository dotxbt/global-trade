"use client";

import { Eye, Target } from "lucide-react";
import styles from "./VisionMission.module.css";

export default function VisionMission() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Eye size={40} />
          </div>
          <h3 className={styles.title}>Visi Kami</h3>
          <p className={styles.description}>
            Menjadi platform layanan perizinan ekspor dan impor nomor satu di Indonesia yang mendigitalkan dan menyederhanakan proses birokrasi, sehingga mendorong pertumbuhan ekonomi nasional melalui perdagangan global.
          </p>
        </div>
        
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Target size={40} />
          </div>
          <h3 className={styles.title}>Misi Kami</h3>
          <p className={styles.description}>
            Memberikan layanan perizinan yang cepat, transparan, dan akurat. Menyediakan sistem tracking real-time yang informatif, serta mendampingi klien dengan solusi konsultasi regulasi kepabeanan yang komprehensif.
          </p>
        </div>
      </div>
    </section>
  );
}
