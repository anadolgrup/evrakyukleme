
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import CustomerForm from './CustomerForm'
import ProtectedRoute from './ProtectedRoute'
import { useState } from 'react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/customer"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <CustomerForm handleLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
