"use client";

import Link from "next/link";
import { ArrowRight, FileText, Globe2, Anchor, ShieldCheck, Box } from "lucide-react";
import styles from "./ProductsSection.module.css";

const services = [
  {
    icon: <Globe2 size={40} className={styles.icon} />,
    title: "Izin Ekspor",
    description: "Pengurusan PEB, Certificate of Origin, dan dokumen pendukung ekspor lainnya untuk memperlancar pengiriman barang ke luar negeri.",
  },
  {
    icon: <Anchor size={40} className={styles.icon} />,
    title: "Izin Impor",
    description: "Pengurusan PIB, izin kuota, sertifikasi SNI, dan persetujuan impor berbagai jenis komoditas dengan cepat dan tepat.",
  },
  {
    icon: <FileText size={40} className={styles.icon} />,
    title: "Customs Clearance",
    description: "Layanan pengeluaran barang dari pelabuhan/bandara yang efisien dengan dukungan tim ahli kepabeanan berpengalaman.",
  },
  {
    icon: <ShieldCheck size={40} className={styles.icon} />,
    title: "Konsultasi Regulasi",
    description: "Pendampingan hukum dan konsultasi aturan kepabeanan untuk memastikan kepatuhan bisnis Anda terhadap hukum yang berlaku.",
  },
  {
    icon: <Box size={40} className={styles.icon} />,
    title: "Izin Khusus Komoditas",
    description: "Pengurusan perizinan untuk barang lartas (larangan & pembatasan), BPOM, Karantina Pertanian, dan sertifikasi khusus lainnya.",
  }
];

export default function ProductsSection() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <h2 className="section-title">Produk & Layanan Kami</h2>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              {service.icon}
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <Link href="/perizinan" className={styles.link}>
                Order Layanan <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
