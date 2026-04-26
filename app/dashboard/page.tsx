"use client";

import { Package, Clock, CheckCircle2, AlertCircle, FileText } from "lucide-react";

const activeServices = [
  { id: "GT-8492", type: "Izin Ekspor", commodity: "Rempah-rempah", status: "Sedang Diproses", date: "25 Apr 2026", progress: 65 },
  { id: "GT-8495", type: "Customs Clearance", commodity: "Mesin Industri", status: "Menunggu Dokumen", date: "26 Apr 2026", progress: 20 },
];

export default function Dashboard() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '0.5rem' }}>Tracking Layanan</h1>
        <p style={{ color: 'var(--color-text-light)' }}>Pantau status pengurusan perizinan Anda saat ini.</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(15, 23, 42, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
            <Package size={30} />
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-dark)' }}>2</div>
            <div style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>Layanan Aktif</div>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
            <Clock size={30} />
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-dark)' }}>1</div>
            <div style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>Butuh Tindakan</div>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-success)' }}>
            <CheckCircle2 size={30} />
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-dark)' }}>14</div>
            <div style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>Selesai Bulan Ini</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>Layanan Sedang Berjalan</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {activeServices.map((service) => (
            <div key={service.id} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{service.id}</span>
                    <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'rgba(15, 23, 42, 0.05)', borderRadius: '1rem', color: 'var(--color-text-light)' }}>{service.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.125rem' }}>{service.type} - {service.commodity}</h3>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: service.progress < 50 ? 'var(--color-secondary)' : 'var(--color-primary)',
                  backgroundColor: service.progress < 50 ? 'rgba(245, 158, 11, 0.1)' : 'rgba(15, 23, 42, 0.05)',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem'
                }}>
                  {service.progress < 50 ? <AlertCircle size={16} /> : <CheckCircle2 size={16} />}
                  {service.status}
                </div>
              </div>

              <div style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
                <span>Progress Pengurusan</span>
                <span>{service.progress}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--color-border)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${service.progress}%`, height: '100%', backgroundColor: 'var(--color-secondary)', transition: 'width 1s ease' }}></div>
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                  <FileText size={16} /> Detail Dokumen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
