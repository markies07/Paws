import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import LandingPage from "./components/Landing Page/LandingPage"
import Dashboard from "./components/User/Dashboard"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  )
}

export default App
