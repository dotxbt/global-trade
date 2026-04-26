"use client";

import { useState } from "react";
import { Send, PlusCircle } from "lucide-react";

export default function AddService() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '0.5rem' }}>Tambah Layanan Baru</h1>
        <p style={{ color: 'var(--color-text-light)' }}>Request pengurusan perizinan baru langsung dari dashboard Anda.</p>
      </div>

      <div className="card" style={{ maxWidth: '800px' }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-success)', margin: '0 auto 1.5rem' }}>
              <PlusCircle size={40} />
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Request Layanan Berhasil Dibuat</h2>
            <p style={{ color: 'var(--color-text-light)' }}>
              Layanan baru Anda telah ditambahkan ke sistem. Tim kami akan segera memproses dokumen yang dibutuhkan.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Jenis Layanan</label>
              <select className="form-input" required>
                <option value="">-- Pilih Layanan --</option>
                <option value="ekspor">Izin Ekspor</option>
                <option value="impor">Izin Impor</option>
                <option value="customs">Customs Clearance</option>
                <option value="konsultasi">Konsultasi Kepabeanan</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Nama Komoditas / Barang</label>
              <input type="text" className="form-input" placeholder="Masukkan nama barang" required />
            </div>

            <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Pelabuhan Muat / Asal</label>
                <input type="text" className="form-input" placeholder="Contoh: Tanjung Priok" />
              </div>
              <div className="form-group">
                <label className="form-label">Pelabuhan Tujuan</label>
                <input type="text" className="form-input" placeholder="Contoh: Port of Singapore" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Upload Dokumen Pendukung (Opsional)</label>
              <div style={{ border: '2px dashed var(--color-border)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center', backgroundColor: 'var(--color-surface)' }}>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '1rem' }}>Drag & drop file di sini atau klik untuk memilih file</p>
                <input type="file" id="file-upload" style={{ display: 'none' }} multiple />
                <label htmlFor="file-upload" className="btn btn-outline" style={{ cursor: 'pointer' }}>
                  Pilih File
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Catatan Tambahan</label>
              <textarea className="form-textarea" rows={4} placeholder="Informasi tambahan terkait request layanan ini..."></textarea>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
              <button type="submit" className="btn btn-primary">
                Kirim Request <Send size={18} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
