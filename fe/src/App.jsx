
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { Notes } from './pages/Notes'

function App() {


  return (
    <>
      <h2>Notes making app</h2>
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  )
}

export default App
