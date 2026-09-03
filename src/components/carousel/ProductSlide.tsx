import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'

export function ProductSlide({ product, active, onSelect }: { product: Product; active: boolean; onSelect: () => void }) {
  return <article className={`product-slide theme-${product.theme} ${active ? 'is-active' : ''}`} aria-hidden={!active}>
    <Link className="slide-main-link" to={product.href} aria-label={`查看 ${product.title}`} tabIndex={active ? 0 : -1}>
      <div className="slide-copy">
        <p className="slide-category">{product.category}</p>
        <h2>{product.title}</h2>
        <p className="slide-subtitle">{product.subtitle}</p>
        <p className="slide-description">{product.description}</p>
      </div>
      <picture className="product-media">
        <source media="(max-width: 600px)" srcSet={product.mobileImage} />
        <img src={product.image} alt={product.title} style={{ objectFit: product.imageFit }} draggable="false" />
      </picture>
    </Link>
    <div className="slide-actions">
      <Link className="slide-primary" to={product.href} tabIndex={active ? 0 : -1}>{product.primaryAction}<span>↗</span></Link>
      {product.secondaryAction && <Link className="slide-secondary" to={product.secondaryAction.href} tabIndex={active ? 0 : -1}>{product.secondaryAction.label}</Link>}
    </div>
    {!active && <button className="slide-select" onClick={onSelect} aria-label={`切换到 ${product.title}`} />}
  </article>
}
