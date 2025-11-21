'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react';
import './Navbar.css'

export default function Navbar() {
    const path = usePathname()
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="nav-wrap">
            <div className="container nav-inner">
                <Link href="/"><span className="logo">Alev Yıldırım</span></Link>

                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <Link href="/"><span className={path === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Ana Sayfa</span></Link>
                    <Link href="/projects"><span className={path === '/projects' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Projelerim</span></Link>
                </nav>

                <div className='icons'>
                    <a target='_blank' href="https://github.com/alevyldrm"> <FaGithub className='nav-icon' /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/alevyldrm/"><FaLinkedin className='nav-icon' /></a>
                    <button className="menu-btn" onClick={toggleMenu}>
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    )
}
