
import { useState } from 'react'

export default function CustomerForm({ handleLogout }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  const [customers, setCustomers] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCustomers([...customers, formData])
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    })
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={handleLogout}>Çıkış Yap</button>
      <h2>Müşteri Kaydı</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="Ad" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Soyad" value={formData.lastName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Telefon" value={formData.phone} onChange={handleChange} required />
        <button type="submit">Kaydet</button>
      </form>

      <h3>Kayıtlı Müşteriler</h3>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>{customer.firstName} {customer.lastName} - {customer.email} - {customer.phone}</li>
        ))}
      </ul>
    </div>
  )
}
