"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Ship, LayoutDashboard, User, PlusCircle, History, LogOut } from "lucide-react";
import styles from "./Sidebar.module.css";

export default function Sidebar({ isOpen }: { isOpen?: boolean }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Tracking Layanan", href: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Tambah Layanan", href: "/dashboard/add", icon: <PlusCircle size={20} /> },
    { name: "History Layanan", href: "/dashboard/history", icon: <History size={20} /> },
    { name: "Informasi User", href: "/dashboard/profile", icon: <User size={20} /> },
  ];

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
      <Link href="/" className={styles.brand}>
        <Ship className={styles.brandIcon} size={28} />
        <span>GlobalTrade</span>
      </Link>

      <nav className={styles.nav}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.userInfo}>
        <div className={styles.avatar}>A</div>
        <div className={styles.userDetails}>
          <div className={styles.userName}>Admin PT Alam</div>
          <div className={styles.userCompany}>PT Alam Rempah Nusantara</div>
        </div>
        <Link href="/login" style={{ color: '#cbd5e1' }} title="Logout">
          <LogOut size={20} />
        </Link>
      </div>
    </aside>
  );
}
