"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Ship, Lock, Mail, ArrowRight } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', backgroundColor: 'var(--color-primary)' }}>
      {/* Left Side - Image/Illustration */}
      <div style={{ flex: 1, display: 'none', position: 'relative', overflow: 'hidden' }} className="login-image-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/login.png" alt="Secure Portal" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.4) 100%)' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', right: '10%', color: 'white' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-white)' }}>Portal Pelanggan</h2>
          <p style={{ fontSize: '1.25rem', color: '#cbd5e1' }}>Akses mudah ke seluruh dokumen perizinan dan pantau status pengiriman Anda secara real-time.</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-background)', padding: '2rem' }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '1rem' }}>
              <Ship color="var(--color-secondary)" size={36} />
              GlobalTrade
            </Link>
            <h1 style={{ fontSize: '1.5rem', color: 'var(--color-text-dark)', marginBottom: '0.5rem' }}>Selamat Datang Kembali</h1>
            <p style={{ color: 'var(--color-text-light)' }}>Silakan masuk ke akun Anda</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group" style={{ position: 'relative' }}>
              <label className="form-label">Email</label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }}>
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  className="form-input" 
                  style={{ paddingLeft: '3rem' }} 
                  placeholder="email@perusahaan.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>

            <div className="form-group" style={{ position: 'relative' }}>
              <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                Password
                <a href="#" style={{ color: 'var(--color-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>Lupa Password?</a>
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }}>
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  className="form-input" 
                  style={{ paddingLeft: '3rem' }} 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
              Masuk ke Dashboard <ArrowRight size={18} />
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
            Belum punya akun? <a href="#" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Daftar sekarang</a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 992px) {
          .login-image-wrapper {
            display: block !important;
          }
        }
      `}} />
    </div>
  );
}
