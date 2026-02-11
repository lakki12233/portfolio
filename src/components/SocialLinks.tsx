'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import styles from './SocialLinks.module.css'

const SocialLinks = () => {
  const links = [
    { icon: FiGithub, href: 'https://github.com/lakki12233' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sumanmandava/' },
    { icon: FiInstagram, href: 'https://www.instagram.com/suman._.03/' }
  ]

  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {links.map((link, i) => {
          const Icon = link.icon
          return (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 1 }}
            >
              <Icon size={20} />
            </motion.a>
          )
        })}
      </motion.div>

      <motion.div
        className={styles.email}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.a
          href="mailto:sumanm2003@gmail.com"
          className={styles.emailLink}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          sumanm2003@gmail.com
        </motion.a>
      </motion.div>
    </>
  )
}

export default SocialLinks 