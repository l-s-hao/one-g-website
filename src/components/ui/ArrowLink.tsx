import { Link } from 'react-router-dom'

export function ArrowLink({ to, children, light = false }: { to: string; children: React.ReactNode; light?: boolean }) {
  return <Link className={`button ${light ? 'button-light' : 'button-dark'}`} to={to}>{children}<span>↗</span></Link>
}
