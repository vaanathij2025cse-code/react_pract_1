function Header({ title, subtitle }) {
  return (
    <header className="skills-header">
      <h1 className="skills-title">{title}</h1>
      <p className="skills-subtitle">{subtitle}</p>
    </header>
  )
}

export default Header
