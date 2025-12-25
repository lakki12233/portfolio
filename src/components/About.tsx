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
              Hello, I&apos;m Suman Mandava, a software developer with experience in building web-based applications 
              and a growing interest in machine learning and AI. I began by developing a video streaming platform 
              using the MERN stack and have continued to work on projects and internships that involve creating 
              efficient, user-focused systems.
            </p>

            <p>
              Currently, my research at the University at Buffalo focuses on deep learning models for emotion 
              recognition and vision-language tasks, where I explore Transformer architectures and CLIP-based encoders.
            </p>

            <p>
              I enjoy learning and working across different areas—whether it&apos;s web technologies, intelligent systems, 
              or emerging tools in AI—and I&apos;m always open to exploring new fields and challenges.
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
                <li>Transformer Models</li>
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