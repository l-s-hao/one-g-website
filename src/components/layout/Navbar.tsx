import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [['机器人','/robots'],['定制','/configure'],['解决方案','/custom'],['技术','/technology'],['支持','/support']]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(scrollY > 16); onScroll(); addEventListener('scroll', onScroll); return () => removeEventListener('scroll', onScroll) }, [])
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <Link className="wordmark" to="/" onClick={() => setOpen(false)}>ONE-G</Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="打开导航"><i/><i/></button>
    <nav className={open ? 'open' : ''} aria-label="主导航">{links.map(([label,to]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav>
    <Link className="nav-cta" to="/configure">开始定制 <span>↗</span></Link>
  </header>
}
