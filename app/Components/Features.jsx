import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className='WFeatures' id='RFEATURES'>
      <div className="UF">
        <ul>
            <li>📚 Smart Notes</li>
            <li>❓ PYQ Vault</li>
            <li>🕹️ Mini Games</li>
            <li>🧩 MCQ Trainer</li>
        </ul>
      </div>
      <div className="CF">
        <ul>
            <li>💬 Doubt Solver</li>
            <li>📥 Download PDFs</li>
            <li>🧮 Quick Formulas</li>
            <li>🎓 Board-wise Syllabus</li>
        </ul>
      </div>
      <div className="BF">
        <ul>
            <li>🗂️ Organized Content</li>
            <li>🧾 Chapter Summaries</li>
            <li>🎮 Gamified Learning</li>
            <li>🌟 Subject-wise MCQs</li>
        </ul>
      </div>
    </div>
  )
}

export default Features
