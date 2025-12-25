'use client'

import Image from 'next/image'
import styles from './Work.module.css'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

const projects = [
  {
    title: "(Qwen + LoRA) — Video Affective State Analyzer",
    description:
      "End-to-end demo that takes a short face video, extracts Facial Action Units (AUs), predicts 0–3 levels for Engagement/Boredom/Confusion/Frustration using LoRA adapters on Qwen, and generates a short natural-language explanation grounded in the top AU cues. Deployed as a Hugging Face Space so anyone can try it instantly.",
    tech: [
      "Python",
      "PyTorch",
      "Transformers",
      "Qwen (LLM)",
      "LoRA ",
      "Gradio",
      "AU / Facial Action Units",
      "Hugging Face Spaces"
    ],
    github: "#", // put your repo link if public, else keep "#"
    external: "https://huggingface.co/spaces/lakki03/AU-LLM-Demo",
    image: "/images/au-llm-demo-poster.png"
  },
  
  {
    title: 'Trip Planner CrewAI (Gemini + Serper)',
    description:
      'Multi-agent travel planner built with CrewAI—agents (city selector, local expert, concierge) collaborate to generate a personalized 7-day itinerary. Integrates Gemini via CrewAI LLM + Serper web search with DuckDuckGo fallback and a website reader; config-driven .env (model/key switching, timeouts), Markdown/PDF export, and resilient retry/backoff for 429/503.',
    tech: ['CrewAI', 'Gemini (Google AI)', 'Serper', 'DuckDuckGo', 'Python'],
    github: 'https://github.com/lakki12233/trip_planner_crewAI',
    external: 'https://github.com/lakki12233/trip_planner_crewAI',
    image: '/images/trip-planner.png' 
  },
  {
    title: 'Visual Question Answering System',
    description:
      'A VQA system for real-world accessibility using the VizWiz dataset. Integrated CLIP (ViT-B/32) vision-language encoder with a lightweight multi-head classifier to answer questions about images captured by blind or low-vision users, achieving 70% test accuracy.',
    tech: ['Python', 'PyTorch', 'CLIP', 'Vision Transformer', 'Deep Learning'],
    github: 'https://github.com/lakki12233/VQA_bot',
    external: '#',
    image: '/images/vqa.png'
  },
  {
    title: 'KYC Verification System',
    description:
      'A secure e-KYC platform integrating Ethereum blockchain and CP-ABE encryption. Achieved 98% data accuracy and reduced verification redundancy by 70%. Published in ICIMA-2023 (IEEE). Features include document verification, face recognition, and digital signature validation.',
    tech: ['Ethereum', 'CP-ABE', 'Node.js', 'Express', 'Ganache', 'Solidity'],
    github: 'https://github.com/lakki12233/KYC_BLOCKCHAIN',
    external: '#',
    image: '/images/kyc.png'
  },
  {
    title: 'MERN Online Video Platform',
    description:
      'A full-stack video streaming platform with real-time chat functionality. Implemented JWT authentication, React Hooks for state management, and RESTful APIs. Features include admin dashboard with analytics, Firebase storage integration, and Google Dialogflow chatbot for user assistance.',
    tech: ['React', 'Node.js', 'MongoDB', 'Firebase', 'JWT', 'Context API'],
    github: 'https://github.com/lakki12233/MERN_OVP',
    external: '#',
    image: '/images/ovp.png'
  }
]


const otherProjects = [
  {
    title: 'Road Lane Line Detection',
    description: 'Computer vision system for detecting road lane lines with 93.8% accuracy using OpenCV and Python. Implemented advanced image processing techniques for real-time lane detection.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'],
    github: 'https://github.com/lakki12233/Road-lane-line-detection',
    external: '#'
  },
  {
    title: 'Resume Screening Application',
    description: 'AI-powered resume screening tool using NLP and machine learning. Automates candidate evaluation by analyzing skills, experience, and qualifications.',
    tech: ['Python', 'NLP', 'scikit-learn', 'NLTK'],
    github: 'https://github.com/lakki12233/Resume-Filtering-Application',
    external: '#'
  },
  {
    title: 'Object Detection System',
    description: 'Real-time object detection system using YOLO and TensorFlow. Capable of identifying multiple objects in images and video streams with high accuracy.',
    tech: ['Python', 'TensorFlow', 'YOLO', 'OpenCV'],
    github: 'https://github.com/lakki12233/Object_Dectection',
    external: '#'
  }
]

export default function Work() {
  return (
    <section id="work" className={styles.work}>
      <h2 className={styles.heading}>
        <span className={styles.number}>03.</span> Some Things I&apos;ve Built
      </h2>

      <div className={styles.projectGrid}>
        {projects.map((project, i) => (
          <div key={i} className={styles.project}>
            <div className={styles.projectContent}>
              <div>
                <p className={styles.projectOverline}>Featured Project</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectDescription}>
                  <p>{project.description}</p>
                </div>
                <ul className={styles.projectTechList}>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className={styles.projectLinks}>
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                    <FiGithub />
                  </a>
                  <a href={project.external} target="_blank" rel="noreferrer" aria-label="External Link">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.projectImage}>
              <a href={project.external} target="_blank" rel="noreferrer">
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.img}
                  />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 className={styles.moreProjectsHeading}>Other Noteworthy Projects</h2>

      <div className={styles.otherProjectsGrid}>
        {otherProjects.map((project, i) => (
          <div key={i} className={styles.otherProject}>
            <div className={styles.projectTop}>
              <div className={styles.folderIcon}>
                <FiFolder />
              </div>
              <div className={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                  <FiGithub />
                </a>
                <a href={project.external} target="_blank" rel="noreferrer" aria-label="External Link">
                  <FiExternalLink />
                </a>
              </div>
            </div>

            <h3 className={styles.otherProjectTitle}>{project.title}</h3>
            <p className={styles.otherProjectDescription}>{project.description}</p>
            
            <ul className={styles.otherProjectTechList}>
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 