'use client';
import { useEffect, useRef, useState } from 'react';

const SKILLS = [
  {
    label: 'AI / ML',
    tags: ['PyTorch', 'TensorFlow', 'Hugging Face', 'Scikit-learn', 'RAG', 'Vector Embeddings', 'LLM Prompt Engineering', 'Neural Networks', 'Transformers'],
  },
  {
    label: 'Programming',
    tags: ['Python (OOP, async)', 'TypeScript', 'JavaScript', 'SQL', 'Java'],
  },
  {
    label: 'Frameworks & Tools',
    tags: ['FastAPI', 'Next.js 14', 'LangChain', 'Docker', 'Git', 'GitHub Actions', 'Azure DevOps', 'Jupyter', 'Postman'],
  },
  {
    label: 'Data & Cloud',
    tags: ['Pandas', 'NumPy', 'PostgreSQL', 'pgvector', 'Google Cloud', 'Vercel', 'Neon Postgres', 'Redis', 'ETL Pipelines'],
  },
  {
    label: 'Engineering Practices',
    tags: ['REST API Design', 'CI/CD', 'Agile / Sprint', 'Technical Writing', 'Model Serving', 'MLOps Basics'],
  },
];

const EXPERIENCE = [
  {
    company: 'Orient Software',
    role: 'AI Intern / Probationary Engineer',
    period: 'Dec 2025 – May 2026',
    bullets: [
      'Contributed code to a production-level AI assistant platform over 6 months of hands-on software development.',
      'Authored research paper "ACECausal: Mitigating LLM Hallucinations in Autonomous Information Extraction via Contrastive Validation and Bayesian Rule Curating", targeting leading NLP venues.',
      'Implemented AI-native workflows for real-world product development using LLMs, RAG, and automation pipelines.',
      'Participated in an internal AI Hackathon under Neurond Assistant, rapidly building an MVP with AI-native workflows.',
      'Collaborated in a cross-functional team with 3 senior engineers to build an MVP for football-field discovery with community features and item detection.',
      'Managed tasks via Azure DevOps sprint planning; collaborated on GitHub following team branching conventions.',
      'Communicated daily in English within a global engineering team.',
    ],
  },
  {
    company: 'Google Developer Student Club — Hanoi University',
    role: 'Technical Trainee',
    period: 'Feb 2024 – Jun 2024',
    bullets: [
      'Co-organised technical workshops on emerging Google technologies for a student community.',
      'Researched and applied Google Cloud and ML tools in collaborative team projects.',
    ],
  },
];

const PROJECTS = [
  {
    num: '01',
    name: 'LearnForge',
    badge: 'Open Source · Live',
    desc: 'Gamified learning platform that transforms PDFs and DOCX files into structured courses using a full end-to-end RAG pipeline. Features spaced-repetition scoring, streaks, XP leagues, and a multi-provider AI abstraction layer (OpenAI, Gemini, Groq, Ollama). Built BYOK support with AES-256-GCM encryption for per-user API keys.',
    tech: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'pgvector', 'Gemini API', 'RAG', 'Inngest', 'Vercel'],
    links: [{ label: '↗ Live Demo', href: '#' }, { label: '⌥ GitHub', href: 'https://github.com/LilEnstein' }],
    featured: true,
  },
  {
    num: '02',
    name: 'BadmintonFinder',
    badge: null,
    desc: 'Automated system that aggregates badminton social match posts from Facebook groups. Uses Playwright to bypass API limits and Claude + Gemini APIs to parse unstructured Vietnamese text into structured JSON (location, time, skill level, budget). Custom Match Score ranks posts against a 10-tier skill rating system.',
    tech: ['Node.js', 'React', 'Playwright', 'Claude API', 'Gemini API', 'PostgreSQL', 'Redis'],
    links: [{ label: '↗ Live Demo', href: '#' }],
  },
  {
    num: '03',
    name: 'AI Music Generator',
    badge: '🏆 Best Creativity Award',
    desc: 'Generative AI system that creates melodies from natural language prompts, built as team leader of a 3-member group. Implemented RNN models with NLP techniques using Hugging Face Transformers. Awarded Best Creativity Award at GXNU Chinese Government Scholarship Program (2025).',
    tech: ['Python', 'PyTorch', 'Hugging Face', 'RNN', 'NLP'],
    links: [],
  },
  {
    num: '04',
    name: 'Book Recommendation System',
    badge: null,
    desc: 'Recommendation engine combining collaborative filtering and content-based filtering. Evaluated with RMSE and precision@k metrics against standard benchmarks.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    links: [],
  },
];

const PUBLICATIONS = [
  {
    year: '2025',
    title: 'Enhancing College Teamwork: Applying Stable Matching Theory and NSGA-III',
    venue: '14th CITA International Conference · Cambodia Academy of Digital Technology · Personally presented',
  },
  {
    year: '2025',
    title: 'Students House Allocation System (SHAS): A Hybrid Approach',
    venue: '28th VNICT National ICT Conference (Ninh Binh) · Science–Technology–Communications Publishing House · Theme: Data-driven Technology and Applications',
  },
];

const AWARDS = [
  { icon: '🥇', name: 'Best Creativity Award', org: 'GXNU "AI Technology & Application Practice" — Chinese Government Scholarship Program', year: '2025' },
  { icon: '🏅', name: 'VIFOTEC Encouragement Prize (National)', org: 'Science & Technology Award for University Students · Decision No. 150/QD (BGDDT, 2025)', year: '2025' },
  { icon: '🥇', name: 'First Prize — University Research Competition', org: 'Hanoi University · Advanced to national round', year: '2025' },
  { icon: '🎓', name: 'Outstanding Scholarship', org: 'Hanoi University — Highest scholarship, Semester 1, Year 4', year: '2025' },
  { icon: '🥉', name: 'Olympia — Third Prize (Weekly Round)', org: 'Đường Lên Đỉnh Olympia — National TV Academic Competition · Sponsored by THACO', year: '2021' },
];

const CREDENTIALS = [
  {
    img: '/certs/IMG_9490.JPG',
    label: 'Best Creativity Award',
    org: 'GXNU — Chinese Government Scholarship Program 2025',
    tag: 'Certificate of Honor',
  },
  {
    img: '/certs/IMG_9491.JPG',
    label: 'Certificate of Completion',
    org: 'Guangxi Normal University · 92h AI Technology & Application Practice',
    tag: 'Guangxi Normal University',
  },
  {
    img: '/certs/z7842181716669_2639e8b6eadae77cd16200efeb3348fd.jpg',
    label: 'VIFOTEC Encouragement Prize',
    org: 'National Science & Technology Award for University Students 2025',
    tag: 'VIFOTEC · National',
  },
  {
    img: '/certs/z7842199373017_4a54f1b6b813d9760cc5568f79575595.jpg',
    label: 'Official Award Decision QD3149',
    org: 'Ministry of Education & Training · VIFOTEC Award Confirmation',
    tag: 'Ministry of Education',
  },
  {
    img: '/certs/z7842199377391_30590b5d69a4694a20db8729f1ecc197.jpg',
    label: 'Published Conference Proceedings',
    org: '28th VNICT National ICT Conference · Ninh Binh, November 2025',
    tag: 'Published Paper',
  },
  {
    img: '/certs/IMG_7687.JPG',
    label: 'Olympia Trophy',
    org: 'Đường Lên Đỉnh Olympia — Third Prize, Weekly Round · THACO',
    tag: 'National TV Competition',
  },
];

const EDUCATION = [
  {
    school: 'Hanoi University',
    degree: 'B.Sc. Information Technology',
    period: 'Oct 2022 – Jun 2026',
    highlights: [
      'GPA 4.0 / 4.0 in AI coursework',
      'Outstanding Scholarship — Semester 1, Year 4',
      'Coursework: Big Data Mining, Artificial Intelligence, Probability & Statistics',
    ],
  },
  {
    school: 'Guangxi Normal University',
    degree: 'International Exchange — AI Technology & Application',
    period: 'Jun 2025 – Jul 2025',
    highlights: [
      'Chinese Government Scholarship recipient',
      '92 training hours — AI Technology & Application Practice',
      'Best Creativity Award for AI Music Generator project',
    ],
  },
];

export default function Portfolio() {
  const revealRefs = useRef([]);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <a href="#" className="nav-logo">NAS<span>.</span></a>
          <ul className="nav-links">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#awards">Awards</a></li>
            <li><a href="#credentials">Credentials</a></li>
          </ul>
          <a href="mailto:nguyenanhsangai@gmail.com" className="nav-cta">Hire me</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-badge">Available for remote opportunities</div>
          <h1 className="hero-name">
            Nguyen<br />
            Anh <span className="highlight">Sang</span>
          </h1>
          <p className="hero-tagline">
            Junior AI Engineer building production-grade AI-native products — LLMs, RAG pipelines, 
            and full-stack systems. Research published at international conferences. Based in Hanoi, 
            open to remote roles worldwide.
          </p>
          <div className="hero-links">
            <a href="mailto:nguyenanhsangai@gmail.com" className="btn-primary">
              → Get in touch
            </a>
            <a href="https://github.com/LilEnstein" target="_blank" rel="noreferrer" className="btn-secondary">
              ⌥ GitHub
            </a>
            <a href="#projects" className="btn-secondary">
              View Work ↓
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">6mo</div>
              <div className="stat-label">Industry Experience</div>
            </div>
            <div>
              <div className="stat-num">2</div>
              <div className="stat-label">Published Papers</div>
            </div>
            <div>
              <div className="stat-num">4.0</div>
              <div className="stat-label">AI GPA</div>
            </div>
            <div>
              <div className="stat-num">5+</div>
              <div className="stat-label">Awards & Honours</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <div ref={addReveal} className="reveal">
            <div className="section-label">// Tech Stack</div>
            <h2 className="section-title">Skills & Tools</h2>
            <p className="section-subtitle">
              Hands-on experience with the modern AI engineering stack — from model training to production deployment.
            </p>
          </div>
          <div className="section-divider" />
          <div className="skills-grid">
            {SKILLS.map((group, i) => (
              <div ref={addReveal} className="reveal skill-card" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="skill-card-label">{group.label}</div>
                <div className="skill-tags">
                  {group.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="container">
          <div ref={addReveal} className="reveal">
            <div className="section-label">// Career</div>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              Real-world AI product development, sprint-based delivery, and cross-functional collaboration.
            </p>
          </div>
          <div className="section-divider" />
          <div className="timeline">
            {EXPERIENCE.map((exp, i) => (
              <div ref={addReveal} className="reveal timeline-item" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="timeline-dot" />
                <div className="timeline-header">
                  <div className="timeline-company">{exp.company}</div>
                  <div className="timeline-period">{exp.period}</div>
                </div>
                <div className="timeline-role">{exp.role}</div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <div ref={addReveal} className="reveal">
            <div className="section-label">// Built Things</div>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">
              From RAG-powered learning platforms to AI-native match aggregators — shipped and live.
            </p>
          </div>
          <div className="section-divider" />
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div
                ref={addReveal}
                className={`reveal project-card${p.featured ? ' featured' : ''}`}
                key={i}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div>
                  <div className="project-num">{p.num}</div>
                  <div className="project-header">
                    {p.badge && <div className="project-badge">{p.badge}</div>}
                    <div className="project-name">{p.name}</div>
                  </div>
                </div>
                <div>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tech">
                    {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                  {p.links.length > 0 && (
                    <div className="project-links">
                      {p.links.map((l) => (
                        <a key={l.label} href={l.href} className="project-link" target="_blank" rel="noreferrer">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research">
        <div className="container">
          <div ref={addReveal} className="reveal">
            <div className="section-label">// Academic</div>
            <h2 className="section-title">Research & Publications</h2>
            <p className="section-subtitle">
              Presented and published at international and national conferences in AI and ICT.
            </p>
          </div>
          <div className="section-divider" />
          <div className="pub-list">
            {PUBLICATIONS.map((pub, i) => (
              <div ref={addReveal} className="reveal pub-card" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="pub-year">{pub.year}</div>
                <div>
                  <div className="pub-title">{pub.title}</div>
                  <div className="pub-venue">{pub.venue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards">
        <div className="container">
          <div ref={addReveal} className="reveal">
            <div className="section-label">// Recognition</div>
            <h2 className="section-title">Awards & Honours</h2>
            <p className="section-subtitle">
              From national-level science competitions to international AI programs.
            </p>
          </div>
          <div className="section-divider" />
          <div className="awards-grid">
            {AWARDS.map((award, i) => (
              <div ref={addReveal} className="reveal award-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="award-icon">{award.icon}</div>
                <div className="award-name">{award.name}</div>
                <div className="award-org">{award.org}</div>
                <div className="award-year">{award.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section id="credentials">
        <div className="container">
          <div ref={addReveal} className="reveal">
            <div className="section-label">// Verified</div>
            <h2 className="section-title">Credentials</h2>
            <p className="section-subtitle">
              Real certificates, official decisions, and published proceedings — click any card to view full size.
            </p>
          </div>
          <div className="section-divider" />
          <div className="creds-grid">
            {CREDENTIALS.map((c, i) => (
              <button
                ref={addReveal}
                className="reveal cert-card"
                key={i}
                style={{ transitionDelay: `${i * 0.08}s` }}
                onClick={() => setLightbox(i)}
                aria-label={`View ${c.label}`}
              >
                <div className="cert-thumb">
                  <img src={c.img} alt={c.label} loading="lazy" />
                  <div className="cert-overlay">
                    <span className="cert-zoom">⊕ View</span>
                  </div>
                </div>
                <div className="cert-info">
                  <div className="cert-tag">{c.tag}</div>
                  <div className="cert-label">{c.label}</div>
                  <div className="cert-org">{c.org}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + CREDENTIALS.length) % CREDENTIALS.length); }}
            aria-label="Previous"
          >‹</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={CREDENTIALS[lightbox].img} alt={CREDENTIALS[lightbox].label} />
            <div className="lightbox-caption">
              <div className="lightbox-title">{CREDENTIALS[lightbox].label}</div>
              <div className="lightbox-sub">{CREDENTIALS[lightbox].org}</div>
            </div>
          </div>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % CREDENTIALS.length); }}
            aria-label="Next"
          >›</button>
        </div>
      )}

      {/* EDUCATION */}
      <section id="education">
        <div className="container">
          <div ref={addReveal} className="reveal">
            <div className="section-label">// Background</div>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="section-divider" />
          <div className="edu-grid">
            {EDUCATION.map((edu, i) => (
              <div ref={addReveal} className="reveal edu-card" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-period">{edu.period}</div>
                <ul className="edu-highlights">
                  {edu.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container contact-section">
          <div ref={addReveal} className="reveal">
            <p className="section-label">// Let's work together</p>
            <h2 className="contact-cta">Open to remote<br />opportunities</h2>
            <p className="contact-sub">
              Junior AI Engineer · LLMs · RAG · Python · TypeScript
            </p>
            <div className="contact-links">
              <a href="mailto:nguyenanhsangai@gmail.com" className="btn-primary">
                → nguyenanhsangai@gmail.com
              </a>
              <a href="https://github.com/LilEnstein" target="_blank" rel="noreferrer" className="btn-secondary">
                ⌥ GitHub / LilEnstein
              </a>
            </div>
            <p className="contact-info">Hanoi, Vietnam · UTC+7 · Available for async collaboration</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          © 2025 Nguyen Anh Sang · Built with Next.js · Deployed on Vercel
        </div>
      </footer>
    </>
  );
}
