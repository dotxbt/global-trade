"use client";

import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import { Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-surface)' }}>
      <Sidebar isOpen={isSidebarOpen} />
      
      <div style={{ flex: 1, marginLeft: '260px', display: 'flex', flexDirection: 'column', transition: 'margin-left 0.3s ease' }} className="dashboard-content">
        {/* Mobile Header */}
        <div style={{ 
          display: 'none', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          backgroundColor: 'var(--color-white)',
          borderBottom: '1px solid var(--color-border)'
        }} className="mobile-header">
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>GlobalTrade</h1>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} style={{ color: 'var(--color-text)' }}>
            <Menu size={24} />
          </button>
        </div>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '2rem' }}>
          {children}
        </main>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .dashboard-content {
            margin-left: 0 !important;
          }
          .mobile-header {
            display: flex !important;
          }
        }
      `}} />
    </div>
  );
}
