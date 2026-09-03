import { motion } from 'framer-motion'

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-12%' }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}
