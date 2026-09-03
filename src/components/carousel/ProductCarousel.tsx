import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { products } from '../../data/products'
import { CarouselControls } from './CarouselControls'
import { CarouselPagination } from './CarouselPagination'
import { ProductSlide } from './ProductSlide'

export function ProductCarousel() {
  const [current, setCurrent] = useState(0)
  const [position, setPosition] = useState(1)
  const [snapping, setSnapping] = useState(false)
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
  const slides = [products.at(-1)!, ...products, products[0]]
  const select = useCallback((index:number) => {
    const normalized = (index + products.length) % products.length
    setCurrent(normalized)
    setPosition(normalized + 1)
  },[])
  const move = useCallback((direction: -1 | 1, steps = 1) => {
    setPosition(value => {
      const next = Math.max(0, Math.min(products.length + 1, value + direction * Math.min(steps, products.length)))
      setCurrent((next - 1 + products.length) % products.length)
      return next
    })
  }, [])
  const onWheel = (event: React.WheelEvent) => {
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
    if (Math.abs(delta) < 18 || wheelLock.current) return
    event.preventDefault()
    wheelLock.current = true
    move(delta > 0 ? 1 : -1)
    window.setTimeout(() => wheelLock.current = false, 560)
  }
  return <div className="product-carousel">
    <div className="carousel-viewport" ref={viewport} onWheel={onWheel} tabIndex={0} role="region" aria-label="ONE-G 产品轮播" onKeyDown={event=>{if(event.key==='ArrowLeft')move(-1);if(event.key==='ArrowRight')move(1)}}>
      <motion.div ref={rail} className="carousel-rail" drag="x" dragConstraints={{left:offsets.at(-1)??0,right:offsets[0]??0}} dragElastic={.06} animate={{x:offsets[position]??0}} transition={snapping?{duration:0}:{duration:.62,ease:[.22,1,.36,1]}} onAnimationComplete={()=>{
        if(position===0){setSnapping(true);setPosition(products.length);requestAnimationFrame(()=>setSnapping(false))}
        else if(position===products.length+1){setSnapping(true);setPosition(1);requestAnimationFrame(()=>setSnapping(false))}
      }} onDragEnd={(_,info)=>{
        const slideDistance = offsets.length > 1 ? Math.abs(offsets[1]-offsets[0]) : 1
        const steps = Math.max(1,Math.round(Math.abs(info.offset.x)/slideDistance))
        if(info.offset.x < -55 || info.velocity.x < -450) move(1,steps)
        else if(info.offset.x > 55 || info.velocity.x > 450) move(-1,steps)
      }}>
        {slides.map((product,index)=>{
          const logicalIndex=(index-1+products.length)%products.length
          return <ProductSlide product={product} active={index===position} onSelect={()=>select(logicalIndex)} key={`${product.id}-${index}`}/>
        })}
      </motion.div>
    </div>
    <div className="carousel-meta"><CarouselPagination count={products.length} current={current} select={select}/><CarouselControls previous={()=>move(-1)} next={()=>move(1)}/></div>
  </div>
}
