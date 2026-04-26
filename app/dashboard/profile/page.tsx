"use client";

import { Save, User, Building, Phone, Mail } from "lucide-react";

export default function UserProfile() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '0.5rem' }}>Informasi Profil</h1>
        <p style={{ color: 'var(--color-text-light)' }}>Kelola data profil pengguna dan informasi perusahaan Anda.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        
        {/* Left Col - Avatar */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            A
          </div>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Admin PT Alam</h2>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>Administrator Perusahaan</p>
          
          <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--color-border)', marginBottom: '1.5rem' }}></div>
          
          <div style={{ width: '100%', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-light)', fontSize: '0.875rem' }}>
              <Mail size={16} /> admin@alamrempah.co.id
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-light)', fontSize: '0.875rem' }}>
              <Phone size={16} /> +62 812 3456 7890
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-light)', fontSize: '0.875rem' }}>
              <Building size={16} /> PT Alam Rempah Nusantara
            </div>
          </div>
        </div>

        {/* Right Col - Form */}
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>Edit Informasi Profil</h3>
          
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Nama Lengkap</label>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }}>
                    <User size={18} />
                  </div>
                  <input type="text" className="form-input" style={{ paddingLeft: '2.5rem' }} defaultValue="Admin PT Alam" />
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Email</label>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }}>
                    <Mail size={18} />
                  </div>
                  <input type="email" className="form-input" style={{ paddingLeft: '2.5rem' }} defaultValue="admin@alamrempah.co.id" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Nomor Telepon</label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }}>
                  <Phone size={18} />
                </div>
                <input type="tel" className="form-input" style={{ paddingLeft: '2.5rem' }} defaultValue="+62 812 3456 7890" />
              </div>
            </div>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', marginTop: '2.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>Informasi Perusahaan</h3>
            
            <div className="form-group">
              <label className="form-label">Nama Perusahaan</label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }}>
                  <Building size={18} />
                </div>
                <input type="text" className="form-input" style={{ paddingLeft: '2.5rem' }} defaultValue="PT Alam Rempah Nusantara" />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Alamat Perusahaan</label>
              <textarea className="form-textarea" rows={3} defaultValue="Jl. Kebangsaan No. 45, Kompleks Ruko Sentra Bisnis, Jakarta Pusat"></textarea>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
              <button type="submit" className="btn btn-primary">
                Simpan Perubahan <Save size={18} />
              </button>
            </div>
          </form>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </div>
  );
}
