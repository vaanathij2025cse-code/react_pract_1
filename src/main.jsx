import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SkillsPage from './SkillsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SkillsPage />
  </StrictMode>,
)
