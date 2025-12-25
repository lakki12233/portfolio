'use client'

import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>
        <span className={styles.number}>04.</span> What&apos;s Next?
      </h2>

      <h2 className={styles.title}>Get In Touch</h2>

      <p className={styles.description}>
        I&apos;m currently looking for new opportunities in software development and AI/ML roles. 
        My inbox is always open for discussing potential positions, collaborations, or just to say hi! 
        I&apos;ll get back to you as soon as possible.
      </p>

      <a
        href="mailto:sumanm2003@gmail.com"
        className={styles.button}
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  )
} 