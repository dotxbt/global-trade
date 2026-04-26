"use client";

import { MapPin, Phone, Mail, Send } from "lucide-react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        
        <div>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Hubungi Kami</h2>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '3rem', fontSize: '1.125rem' }}>
            Punya pertanyaan seputar layanan perizinan? Tim ahli kami siap membantu Anda memberikan solusi terbaik untuk kebutuhan ekspor dan impor.
          </p>
          
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <MapPin />
              </div>
              <div className={styles.infoContent}>
                <h4>Alamat Kantor</h4>
                <p>Gedung Perdagangan Global Lt. 8<br/>Jl. Jend. Sudirman Kav. 12<br/>Jakarta Selatan, 12190</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Phone />
              </div>
              <div className={styles.infoContent}>
                <h4>Telepon</h4>
                <p>+62 21 5555 7890<br/>+62 812 3456 7890 (WhatsApp)</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Mail />
              </div>
              <div className={styles.infoContent}>
                <h4>Email</h4>
                <p>info@globaltrade.co.id<br/>support@globaltrade.co.id</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className={styles.formCard}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Kirim Pesan</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label">Nama Lengkap</label>
                <input type="text" className="form-input" placeholder="Masukkan nama Anda" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="Masukkan email Anda" />
              </div>
              <div className="form-group">
                <label className="form-label">Perusahaan</label>
                <input type="text" className="form-input" placeholder="Nama perusahaan Anda" />
              </div>
              <div className="form-group">
                <label className="form-label">Pesan</label>
                <textarea className="form-textarea" rows={4} placeholder="Tuliskan pertanyaan Anda di sini..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Kirim Pesan <Send size={18} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
