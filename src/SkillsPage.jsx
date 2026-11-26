import Header from './components/Header.jsx'
import SkillCard from './components/SkillCard.jsx'
import './SkillsPage.css'

const skills = [
  {
    name: 'HTML/CSS',
    level: 'Confident',
    description: 'Building accessible page structure and responsive layouts.',
  },
  {
    name: 'JavaScript',
    level: 'Intermediate',
    description: 'Writing interactive features with modern JavaScript.',
  },
  {
    name: 'React',
    level: 'Intermediate',
    description: 'Creating reusable components and user interfaces.',
  },
  {
    name: 'Node.js',
    level: 'Learning',
    description: 'Building server-side applications with JavaScript.',
  },
  {
    name: 'MongoDB',
    level: 'Learning',
    description: 'Working with documents in a NoSQL database.',
  },
  {
    name: 'Git',
    level: 'Confident',
    description: 'Tracking changes and collaborating on code.',
  },
]

function SkillsPage() {
  return (
    <main className="skills-page">
      <Header
        title="My Skills"
        subtitle="A few of the tools and technologies I work with."
      />
      <section className="skills-grid" aria-label="Skills">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </section>
    </main>
  )
}

export default SkillsPage
