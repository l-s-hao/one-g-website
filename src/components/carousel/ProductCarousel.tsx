import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { products } from '../../data/products'
import { CarouselControls } from './CarouselControls'
import { CarouselPagination } from './CarouselPagination'
import { ProductSlide } from './ProductSlide'

export function ProductCarousel() {
  const [current, setCurrent] = useState(0)
  const [offsets, setOffsets] = useState<number[]>([])
  const viewport = useRef<HTMLDivElement>(null)
  const rail = useRef<HTMLDivElement>(null)
  const wheelLock = useRef(false)
  const measure = useCallback(() => {
    if (!viewport.current || !rail.current) return
    const center = viewport.current.clientWidth / 2
    setOffsets(Array.from(rail.current.children).map(node => {
      const el = node as HTMLElement
      return center - (el.offsetLeft + el.offsetWidth / 2)
    }))
  }, [])
  useEffect(() => { measure(); const observer=new ResizeObserver(measure); if(viewport.current) observer.observe(viewport.current); return()=>observer.disconnect() },[measure])
  const select = useCallback((index:number) => setCurrent(Math.max(0,Math.min(products.length-1,index))),[])
  const onWheel = (event: React.WheelEvent) => {
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
    if (Math.abs(delta) < 18 || wheelLock.current) return
    const nextIndex = current + (delta > 0 ? 1 : -1)
    if (nextIndex < 0 || nextIndex >= products.length) return
    event.preventDefault()
    wheelLock.current = true
    select(nextIndex)
    window.setTimeout(() => wheelLock.current = false, 560)
  }
  return <div className="product-carousel">
    <div className="carousel-viewport" ref={viewport} onWheel={onWheel} tabIndex={0} role="region" aria-label="ONE-G 产品轮播" onKeyDown={event=>{if(event.key==='ArrowLeft')select(current-1);if(event.key==='ArrowRight')select(current+1)}}>
      <motion.div ref={rail} className="carousel-rail" drag="x" dragConstraints={{left:offsets.at(-1)??0,right:offsets[0]??0}} dragElastic={.06} animate={{x:offsets[current]??0}} transition={{duration:.62,ease:[.22,1,.36,1]}} onDragEnd={(_,info)=>{
        const slideDistance = offsets.length > 1 ? Math.abs(offsets[1]-offsets[0]) : 1
        const steps = Math.max(1,Math.round(Math.abs(info.offset.x)/slideDistance))
        if(info.offset.x < -55 || info.velocity.x < -450) select(current+steps)
        else if(info.offset.x > 55 || info.velocity.x > 450) select(current-steps)
      }}>
        {products.map((product,index)=><ProductSlide product={product} active={index===current} onSelect={()=>select(index)} key={product.id}/>) }
      </motion.div>
    </div>
    <div className="carousel-meta"><CarouselPagination count={products.length} current={current} select={select}/><CarouselControls previous={()=>select(current-1)} next={()=>select(current+1)}/></div>
  </div>
}
