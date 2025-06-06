import { useState } from 'react'
import './App.css'
import DosPlayer from './DosPlayer'

function App() {
  return (
    <div className="App" style={{ width: "640px", height: "400px" }}>
          <DosPlayer bundleUrl="doom.jsdos" />
    </div>
  )
}

export default App
