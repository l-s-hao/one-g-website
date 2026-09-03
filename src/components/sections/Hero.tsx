import { motion } from 'framer-motion'
import { ProductCarousel } from '../carousel/ProductCarousel'
export function Hero() {
  return <section className="hero">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-heading">
      <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.5,delay:.08}}>ONE-G</motion.h1>
      <motion.p className="tagline" initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:.45,delay:.2}}>机器人，为你的需求而生。</motion.p>
    </div>
    <motion.div className="hero-carousel-wrap" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.32,ease:[.22,1,.36,1]}}><ProductCarousel /></motion.div>
  </section>
}
