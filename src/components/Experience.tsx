'use client'

import { useState } from 'react'
import styles from './Experience.module.css'

const jobs = [
  {
    company: 'Kornia (Open Source)',
    url: 'https://kornia.org/',
    title: 'Open-Source Contributor',
    date: 'Jan 2026 - Present',
    points: [
      'Implemented core components of the Qwen2.5-VL Vision Encoder in Kornia’s main codebase.',
      'Built modular, type-safe PyTorch components and improved production readiness with tests and CI fixes.',
      'Collaborated with maintainers through reviews and debugging to ensure clean integration.'
    ],
    linkLabel: 'PR #3409',
    linkUrl: 'https://github.com/kornia/kornia/pull/3409'
  },
  {
    company: 'UB Research',
    url: 'https://www.buffalo.edu/ai',
    title: 'Research Assistant',
    date: 'Oct 2024 - Dec 2025',
    points: [
      'Developed multi-head Transformer models to recognize affective states (Engagement, Boredom, Confusion, Frustration) using Action Unit (AU) and Valence-Arousal (VA) features from the DAiSEE dataset.',
      'Achieved 78.08% test accuracy via late fusion of parallel Transformers for emotion recognition.',
      'Integrated Qwen3 (LLM) + LoRA + TRL’s SFT for efficient cross-modal fine-tuning, enabling the model to interpret structured AU/VA descriptors and generate multi-head emotion predictions via instruction-style prompts.'
    ],
    linkLabel: 'Live Demo',
    linkUrl: 'https://huggingface.co/spaces/lakki03/AU-LLM-Demo'
  },
  {
    company: 'Centum T&S',
    url: 'https://www.centumelectronics.com/',
    title: 'Software Engineer Intern',
    date: 'April 2024 - Jun 2024',
    points: [
      'Built responsive HMI applications for BMRCL and DMRC metro systems using protobuf, ZeroMQ, and web sockets, achieving a 30% improvement in system responsiveness.',
      'Designed intuitive UI components (fault info screen, settings page) with Handlebars.js and Node.js, enhancing driver control over console and audio configurations.',
      'Translated business requirements into detailed technical specifications, ensuring accurate implementation and timely delivery of HMI features.'
    ]
  },
  {
    company: 'HCLTech',
    url: 'https://www.hcltech.com/',
    title: 'Software Engineer Intern',
    date: 'Jan 2024 - Mar 2024',
    points: [
      'Built a full-stack Online Video Platform using React.js, Node.js, and MongoDB, improving system performance by 25% and reducing authentication latency by 15%.',
      'Engineered core features like JWT authentication, role-based user interfaces, and video streaming, boosting user engagement by 20% and admin efficiency by 30%.',
      'Designed and tested RESTful APIs and UI components with Material-UI, achieving a 20% drop in bug occurrences through rigorous unit testing.'
    ]
  },
  {
    company: 'L&T Technology Services',
    url: 'https://www.ltts.com/',
    title: 'React.js Developer Intern',
    date: 'May 2023 - Jun 2023',
    points: [
      'Designed and implemented a Resume Shortlisting Application using React.js, improving efficiency in managing and evaluating job applicants resumes by 30%.',
      'Developed responsive UI components and implemented efficient state management using React hooks and context API.',
      'Collaborated with the HR team to understand requirements and implemented features for resume parsing and candidate evaluation.'
    ]
  }
]

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const activeJob = jobs[activeTab]

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.heading}>
        <span className={styles.number}>02.</span> Where I&apos;ve Worked
      </h2>

      <div className={styles.inner}>
        <div className={styles.tabList}>
          {jobs.map((job, i) => (
            <button
              key={i}
              className={`${styles.tabButton} ${activeTab === i ? styles.active : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          <h3>
            <span>{activeJob.title}</span>
            <span className={styles.company}>
              &nbsp;@&nbsp;
              <a href={activeJob.url} target="_blank" rel="noreferrer">
                {activeJob.company}
              </a>
            </span>
          </h3>

          <p className={styles.date}>{activeJob.date}</p>

          {activeJob.linkUrl && (
            <a
              className={styles.prLink}
              href={activeJob.linkUrl}
              target="_blank"
              rel="noreferrer"
            >
              {activeJob.linkLabel ?? 'Pull Request'} ↗
            </a>
          )}

          <ul>
            {activeJob.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
