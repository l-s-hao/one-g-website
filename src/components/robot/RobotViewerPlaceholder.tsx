import { motion } from 'framer-motion'

export function RobotViewerPlaceholder({ compact=false }: { compact?: boolean }) {
  return <motion.div className={`viewer ${compact?'compact':''}`} aria-label="ONE-G R1 人形机器人产品视觉占位" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.52,ease:[.22,1,.36,1]}}>
    <div className="viewer-ring" aria-hidden="true" />
    <div className="robot-silhouette">
      <div className="r-head"><i/></div><div className="r-neck"/>
      <div className="r-shoulder"/><div className="r-body"><b>ONE-G</b><i/></div><div className="r-spine"/>
      <div className="r-arm left"><i/><b/></div><div className="r-arm right"><i/><b/></div>
      <div className="r-hip"/>
      <div className="r-leg left"><i/><b/></div><div className="r-leg right"><i/><b/></div>
    </div>
    <div className="floor-shadow"/><span className="viewer-tag">R1 / PRODUCT STUDY</span>
  </motion.div>
}
