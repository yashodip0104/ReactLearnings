import './App.css'
import { HomePage } from './pages/HomePage'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>hello this is a test</div>} />
    </Routes>
  )
}

export default App
