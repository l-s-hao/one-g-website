import { Link } from 'react-router-dom'
export function Footer() { return <footer><div><Link className="footer-mark" to="/">ONE—G</Link><p>万机智能</p></div><nav>{[['产品','/robots'],['定制','/configure'],['技术','/technology'],['支持','/support'],['关于我们','/'],['联系我们','/custom']].map(([x,y])=><Link key={x} to={y}>{x}</Link>)}</nav><small>© 2026 ONE-G</small></footer> }
