"use client";

import { Quote } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    quote: "GlobalTrade sangat membantu proses perizinan ekspor rempah-rempah kami ke Eropa. Proses yang dulunya berbulan-bulan kini selesai dalam hitungan minggu. Sangat direkomendasikan!",
    name: "Budi Santoso",
    company: "PT Alam Rempah Nusantara",
    initial: "B"
  },
  {
    quote: "Dashboard tracking mereka adalah fitur terbaik. Kami bisa memantau posisi dokumen dan izin impor alat berat kami kapan saja. Sangat transparan dan profesional.",
    name: "Siti Rahma",
    company: "CV Mitra Konstruksi",
    initial: "S"
  },
  {
    quote: "Pendampingan konsultan regulasi mereka menyelamatkan kami dari denda kepabeanan. Tim yang responsif dan benar-benar paham aturan lartas terkini.",
    name: "David Wijaya",
    company: "PT Teknologi Logistik",
    initial: "D"
  }
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">Apa Kata Klien Kami</h2>
        
        <div className={styles.grid}>
          {testimonials.map((testi, index) => (
            <div key={index} className={styles.card}>
              <Quote size={80} className={styles.quoteIcon} />
              <p className={styles.quote}>"{testi.quote}"</p>
              
              <div className={styles.author}>
                <div className={styles.avatar}>{testi.initial}</div>
                <div className={styles.authorInfo}>
                  <h4>{testi.name}</h4>
                  <p>{testi.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
