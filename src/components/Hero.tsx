'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.p
        className={styles.greeting}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Hi, my name is
      </motion.p>
      
      <motion.h1
        className={styles.title}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Suman Mandava
      </motion.h1>
      
      <motion.p
        className={styles.description}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I’m a Software Engineer who likes building things that feel fast and useful.
        I work across full-stack and applied ML, and I contribute to Kornia (open-source computer vision).
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="#work" className={styles.cta}>
          Check out my work!
        </a>
      </motion.div>
    </section>
  )
} 