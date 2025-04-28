
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginForm({ setIsAuthenticated }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (credentials.username === 'admin' && credentials.password === 'sifre123') {
      setIsAuthenticated(true)
      navigate('/customer')
    } else {
      setError('Kullanıcı adı veya şifre hatalı.')
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit}>
        <h2>Giriş Yap</h2>
        <input type="text" name="username" placeholder="Kullanıcı Adı" value={credentials.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Şifre" value={credentials.password} onChange={handleChange} required />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  )
}
