import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import Repositories from './components/Repositories'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/repos" element={<Repositories />} />
      </Routes>
    </Router>
  )
}

export default App
