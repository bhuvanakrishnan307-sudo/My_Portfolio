import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiBook, FiBriefcase, FiAward, FiCode, FiCalendar, FiMapPin } from 'react-icons/fi';
import { SiTailwindcss, SiReact, SiNodedotjs,  SiPython, SiMysql, SiMongodb, SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Portfolio.css';

const GITHUB_LINK = 'https://github.com/bhuvanakrishnan307-sudo';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/bhuvaneswari-krishnan-0963b3284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'; 
const CONTACT_EMAIL = 'bhuvanakrishnan307@gmail.com';

const skills = [
  { name: 'React.js', icon: <SiReact /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'MySQL', icon: <SiMysql /> },
];

const projects = [
  {
    title: 'Pharmacy Management System',
    desc: 'Full-stack pharmacy inventory and billing app (frontend + backend) with CRUD, user roles, and real-time updates.',
    tags: ['React', 'Node.js', 'MySQL', 'Express'],
    link: GITHUB_LINK + '/pharmacy_management',
    icon: <FiCode />,
  },
  {
    title: 'Delivery Management',
    desc: 'Repository for a delivery management system (backend/frontend).',
    tags: ['Golang', 'React', 'Docker'],
    link: GITHUB_LINK + '/Deliver_management',
    icon: <FiCode />,
  },
  {
    title: 'Infotech Frontend Assignment',
    desc: 'Figma-to-HTML/CSS conversion project (responsive layout, Flex/Grid).',
    tags: ['HTML', 'CSS', 'Responsive'],
    link: GITHUB_LINK + '/infotech-frontend-assignment',
    icon: <FiCode />,
  },
  {
    title: 'Python Utilities (collection)',
    desc: 'Small Python programs: arrays, frequency counting, and spreadsheet helpers.',
    tags: ['Python'],
    link: GITHUB_LINK,
    icon: <FiCode />,
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <Header />

      <main>
        <AnimatedSection id="profile"><ProfileSection /></AnimatedSection>
        <AnimatedSection id="skills"><SkillsSection /></AnimatedSection>
        <AnimatedSection id="projects"><ProjectsSection /></AnimatedSection>
        <AnimatedSection id="internship"><InternshipSection /></AnimatedSection>
        <AnimatedSection id="education"><EducationSection /></AnimatedSection>
        <AnimatedSection id="certifications"><CertificationsSection /></AnimatedSection>
        <AnimatedSection id="contact"><ContactSection /></AnimatedSection>
      </main>

      <footer>
        © {new Date().getFullYear()} Bhuvana Krishnan — Built with React & Custom CSS
      </footer>
    </div>
  );
}


function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 90 }}
        >
          Bhuvana Krishnan
        </motion.h1>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="nav-links"
        >
          <a href="#profile">Profile</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href={GITHUB_LINK} target="_blank" rel="noreferrer" className="github-btn">
            <FiGithub /> GitHub
          </a>
        </motion.div>
      </nav>
    </header>
  );
}

function AnimatedSection({ children, id }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="section"
    >
      {children}
    </motion.section>
  );
}



function ProfileSection() {
  return (
    <>
      <h2>Hi, I’m Bhuvana 👋</h2>
      <p>
        Motivated MCA graduate with a strong foundation in full-stack development and a passion for UI/UX design.
        Proficient in MERN stack with hands-on experience in React.js, Node.js, and MySQL.
        Skilled in building user-friendly web apps, integrating APIs, and solving real-world problems.
      </p>

      <div style={{ display: 'flex', gap: '16px', margin: '24px 0' }}>
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-secondary">Contact Me</a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
        <InfoItem icon={<FiMapPin />} title="Location" value="Banglore, Karnataka, 560016" />
        <InfoItem icon={<FiMail />} title="Email" value={CONTACT_EMAIL} />
        <InfoItem icon={<FiCalendar />} title="Phone" value="93602 70077" />
      </div>
    </>
  );
}

function SkillsSection() {
  return (
    <>
      <h3><FiBook /> Skills</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
        {skills.map((s, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="skill-card">
            <div className="icon">{s.icon}</div>
            <div className="name">{s.name}</div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

function ProjectsSection() {
  return (
    <>
      <h3><FiCode /> Projects</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {projects.map((p, i) => <ProjectCard key={i} project={p} idx={i} />)}
      </div>
    </>
  );
}

function InternshipSection() {
  return (
    <>
      <h3><FiBriefcase /> Internship</h3>
      <div className="info-card">
        <h4>Full Stack Developer Intern – Educer Infinity, Madurai</h4>
        <p>Jan 2025 – Apr 2025</p>
        <ul>
          <li>Worked on a live project: Smart Pill Dispenser and Pharmacy Automation System.</li>
          <li>Built responsive UI using React.js, HTML, CSS, and JavaScript.</li>
          <li>Connected backend with Node.js and MySQL for smooth data operations.</li>
          <li>Developed modules like inventory, invoice, and customer tracking.</li>
          <li>Worked on role-based login system and dashboard features.</li>
          <li>Gained hands-on experience in full-stack workflow and debugging.</li>
        </ul>
      </div>
    </>
  );
}

function EducationSection() {
  return (
    <>
      <h3><FiBook /> Education</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        <EduItem degree="Master of Computer Applications" college="V.V. Vanniaperumal College for Women – Tamil Nadu" year="2023 – 2025" cgpa="7.94" />
        <EduItem degree="Bachelor of Computer Applications" college="V.V. Vanniaperumal College for Women – Tamil Nadu" year="2020 – 2023" cgpa="7.32" />
      </div>
    </>
  );
}

function CertificationsSection() {
  return (
    <>
      <h3><FiAward /> Certifications & Awards</h3>
      <ul>
        <li>Certificate of Excellence in Full Stack Development Training – DCE Technology (Mar 2025)</li>
      </ul>
    </>
  );
}

function ContactSection() {
  return (
    <div className="info-card" style={{ flexDirection: 'column', gap: '12px' }}>
      <a href={`mailto:${CONTACT_EMAIL}`} className="flex" style={{ gap: '8px' }}><FiMail /> {CONTACT_EMAIL}</a>
      <a href={GITHUB_LINK} target="_blank" rel="noreferrer" className="flex" style={{ gap: '8px' }}><FiGithub /> GitHub</a>
      <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer" className="flex" style={{ gap: '8px' }}><FiLinkedin /> LinkedIn</a>
    </div>
  );
}

// ---------------- Reusable Components ---------------- //

function ProjectCard({ project, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * idx }}
      whileHover={{ scale: 1.02 }}
      className="project-card"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        {project.icon}
        <h4>{project.title}</h4>
      </div>
      <p>{project.desc}</p>
      <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', margin: '8px 0' }}>
        {project.tags.map((t, i) => <span key={i}>{t}</span>)}
      </div>
      <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ width: 'fit-content' }}>View</a>
    </motion.div>
  );
}

function InfoItem({ icon, title, value }) {
  return (
    <div className="info-card">
      <div className="icon">{icon}</div>
      <div className="text">
        <div className="title">{title}</div>
        <div className="value">{value}</div>
      </div>
    </div>
  );
}

function EduItem({ degree, college, year, cgpa }) {
  return (
    <div className="info-card">
      <h4>{degree}</h4>
      <p>{college}</p>
      <p>{year} | CGPA: {cgpa}</p>
    </div>
  );
}
