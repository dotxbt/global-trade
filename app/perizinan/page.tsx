"use client";

import { useState } from "react";
import Navbar from "../../components/public/Navbar";
import Footer from "../../components/public/Footer";
import { Send, FileCheck } from "lucide-react";

export default function OrderPerizinan() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '100px', paddingBottom: '5rem', backgroundColor: 'var(--color-surface)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 className="section-title">Form Order Layanan Perizinan</h1>
            <p style={{ color: 'var(--color-text-light)' }}>
              Silakan lengkapi form di bawah ini untuk memulai proses pengurusan izin Anda. Tim kami akan segera menghubungi Anda setelah form disubmit.
            </p>
          </div>

          <div className="card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <FileCheck size={80} color="var(--color-success)" style={{ margin: '0 auto 1.5rem' }} />
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Order Berhasil Disubmit!</h2>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                  Terima kasih telah mempercayakan pengurusan izin Anda kepada GlobalTrade. ID Tiket Anda: <strong>GT-{Math.floor(1000 + Math.random() * 9000)}</strong>
                </p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Order Lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Informasi Perusahaan</h3>
                  <div className="form-group">
                    <label className="form-label">Nama Perusahaan</label>
                    <input type="text" className="form-input" required placeholder="PT / CV Nama Perusahaan" />
                  </div>
                  <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Nama PIC</label>
                      <input type="text" className="form-input" required placeholder="Nama lengkap penanggung jawab" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Nomor WhatsApp</label>
                      <input type="tel" className="form-input" required placeholder="081234567890" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Perusahaan</label>
                    <input type="email" className="form-input" required placeholder="email@perusahaan.com" />
                  </div>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Detail Layanan</h3>
                  <div className="form-group">
                    <label className="form-label">Jenis Layanan</label>
                    <select className="form-input" required>
                      <option value="">-- Pilih Layanan --</option>
                      <option value="ekspor">Izin Ekspor (PEB, COO, dll)</option>
                      <option value="impor">Izin Impor (PIB, SNI, dll)</option>
                      <option value="customs">Customs Clearance</option>
                      <option value="khusus">Izin Khusus Komoditas (BPOM, Karantina)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Komoditas / Jenis Barang</label>
                    <input type="text" className="form-input" required placeholder="Contoh: Alat kesehatan, rempah-rempah, sparepart mesin" />
                  </div>
                  <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Negara Asal</label>
                      <input type="text" className="form-input" placeholder="Contoh: China (untuk Impor)" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Negara Tujuan</label>
                      <input type="text" className="form-input" placeholder="Contoh: Jerman (untuk Ekspor)" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Catatan Tambahan</label>
                    <textarea className="form-textarea" rows={4} placeholder="Jelaskan secara singkat detail pengiriman atau kendala yang dihadapi..."></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                  Submit Order <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
