function SkillCard({ name, level, description }) {
  return (
    <article className="skill-card">
      <h2 className="skill-name">{name}</h2>
      <p className="skill-level">{level}</p>
      <p className="skill-description">{description}</p>
    </article>
  )
}

export default SkillCard
