"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import styles from "./HeroCarousel.module.css";

export default function HeroCarousel() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero.png" alt="Global Logistics" />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.badge}>Solusi Perizinan Terpercaya</div>
        <h1 className={styles.title}>
          Layanan Perizinan <br />
          <span>Ekspor & Impor</span> Mudah
        </h1>
        <p className={styles.description}>
          Platform terpadu untuk mengurus dan melacak semua kebutuhan perizinan ekspor dan impor Anda. Cepat, aman, dan transparan.
        </p>
        <div className={styles.actions}>
          <Link href="/perizinan" className="btn btn-primary">
            Mulai Order Sekarang <ArrowRight size={18} />
          </Link>
          <Link href="#contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
            Hubungi Kami <Phone size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
