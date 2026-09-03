import { Link } from 'react-router-dom'
export function SkeletonPage({eyebrow,title,cta='返回首页'}:{eyebrow:string;title:string;cta?:string}){return <section className="skeleton-page"><p className="eyebrow"><span/>{eyebrow}</p><h1>{title}</h1><p>页面正在构建。整体视觉与 ONE-G 产品系统保持一致。</p><Link className="button button-dark" to={cta==='返回首页'?'/':'/custom'}>{cta}<span>↗</span></Link></section>}
