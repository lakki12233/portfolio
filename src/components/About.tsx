'use client'

import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>
        <span className={styles.number}>01.</span> About Me
      </h2>

      <div className={styles.inner}>
        <div className={styles.content}>
          <div>
            <p>
              Hello, I&apos;m Suman Mandava — a Software Engineer with a Master&apos;s in Computer Science from the University at
              Buffalo. I&apos;ve worked across research, industry, and open source.
            </p>

            <p>
              I&apos;m currently an open-source contributor to Kornia (computer vision library), where I work on
              vision-language components and collaborate with maintainers to ship clean, well-tested code.
            </p>

            <p>
              As a Graduate Research Assistant, I worked on deep learning models for emotion recognition using
              Transformer-based approaches with AU and Valence–Arousal features, and built an interactive demo on Hugging Face
              Spaces.
            </p>

            <p>
              In industry roles at Centum T&amp;S and HCLTech, I built production software including metro HMI applications and a
              full-stack online video platform.
            </p>

            <p>
              I&apos;m currently looking for Software Engineer roles where I can build, learn, and contribute to strong engineering
              teams.
            </p>

            <h3 className={styles.skillsHeading}>Core skills</h3>
          </div>

          <div className={styles.skillCategories}>
            <div>
              <h4 className={styles.categoryTitle}>Development</h4>
              <ul className={styles.skills}>
                <li>Full Stack (MERN)</li>
                <li>Python & Java</li>
                <li>Cloud & DevOps</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.categoryTitle}>AI & ML</h4>
              <ul className={styles.skills}>
                <li>PyTorch & TensorFlow</li>
                <li>Computer Vision</li>
                <li>Transformer Models & LLM's</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/dp3.jpeg"
              alt="Suman Mandava"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
} 