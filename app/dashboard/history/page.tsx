"use client";

import { Download, Search, Filter } from "lucide-react";

const historyData = [
  { id: "GT-7102", type: "Izin Impor", commodity: "Suku Cadang Otomotif", date: "10 Mar 2026", status: "Selesai" },
  { id: "GT-6890", type: "Customs Clearance", commodity: "Alat Kesehatan", date: "15 Feb 2026", status: "Selesai" },
  { id: "GT-6541", type: "Izin Ekspor", commodity: "Kopi Arabika", date: "28 Jan 2026", status: "Selesai" },
  { id: "GT-6105", type: "Konsultasi", commodity: "-", date: "05 Jan 2026", status: "Selesai" },
  { id: "GT-5992", type: "Izin Impor", commodity: "Bahan Kimia Industri", date: "12 Des 2025", status: "Dibatalkan" },
];

export default function HistoryService() {
  return (
    <div>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '0.5rem' }}>History Layanan</h1>
          <p style={{ color: 'var(--color-text-light)' }}>Riwayat seluruh layanan perizinan yang pernah Anda ajukan.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            <Download size={16} /> Export Data
          </button>
        </div>
      </div>

      <div className="card">
        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ marginBottom: 0, flex: 1, minWidth: '200px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }}>
                <Search size={18} />
              </div>
              <input type="text" className="form-input" placeholder="Cari ID Layanan atau Komoditas..." style={{ paddingLeft: '2.5rem' }} />
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: 0, width: '200px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }}>
                <Filter size={18} />
              </div>
              <select className="form-input" style={{ paddingLeft: '2.5rem' }}>
                <option value="">Semua Status</option>
                <option value="selesai">Selesai</option>
                <option value="dibatalkan">Dibatalkan</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                <th style={{ padding: '1rem', color: 'var(--color-text-light)', fontWeight: 600 }}>ID Tiket</th>
                <th style={{ padding: '1rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Tanggal</th>
                <th style={{ padding: '1rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Jenis Layanan</th>
                <th style={{ padding: '1rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Komoditas</th>
                <th style={{ padding: '1rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Status</th>
                <th style={{ padding: '1rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid var(--color-border)', transition: 'background-color 0.2s ease' }} className="table-row-hover">
                  <td style={{ padding: '1rem', fontWeight: 500, color: 'var(--color-primary)' }}>{item.id}</td>
                  <td style={{ padding: '1rem' }}>{item.date}</td>
                  <td style={{ padding: '1rem' }}>{item.type}</td>
                  <td style={{ padding: '1rem' }}>{item.commodity}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '1rem', 
                      fontSize: '0.75rem', 
                      fontWeight: 600,
                      backgroundColor: item.status === 'Selesai' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                      color: item.status === 'Selesai' ? 'var(--color-success)' : 'var(--color-error)'
                    }}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <button style={{ color: 'var(--color-secondary)', fontWeight: 500, fontSize: '0.875rem' }}>Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Dummy */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', color: 'var(--color-text-light)', fontSize: '0.875rem' }}>
          <div>Menampilkan 1 - 5 dari 24 layanan</div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button style={{ padding: '0.5rem 1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface)' }} disabled>Sebelumnya</button>
            <button style={{ padding: '0.5rem 1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-primary)', color: 'white' }}>1</button>
            <button style={{ padding: '0.5rem 1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface)' }}>2</button>
            <button style={{ padding: '0.5rem 1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface)' }}>3</button>
            <button style={{ padding: '0.5rem 1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-surface)' }}>Selanjutnya</button>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .table-row-hover:hover {
          background-color: var(--color-surface);
        }
      `}} />
    </div>
  );
}
