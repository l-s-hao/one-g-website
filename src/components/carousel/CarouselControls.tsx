export function CarouselControls({ previous, next }: { previous: () => void; next: () => void }) {
  return <div className="carousel-arrows" aria-label="产品轮播控制">
    <button onClick={previous} aria-label="上一个产品">←</button><button onClick={next} aria-label="下一个产品">→</button>
  </div>
}
