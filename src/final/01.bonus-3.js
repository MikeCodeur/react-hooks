// Hook useState
// 🚀 Lazy initialisation
// http://localhost:3000/alone/final/01.bonus-3.js

import * as React from 'react'

function Login({initialEmail = ''}) {
  const [email, setEmail] = React.useState(
    () => window.localStorage.getItem('email') || initialEmail,
  )
  const [error, setError] = React.useState(false)
  const handleChange = event => {
    setEmail(event.target.value)
    setError(!event.target.value.includes('@'))
    window.localStorage.setItem('email', event.target.value)
  }
  return (
    <div>
      <form>
        <label>Entrez votre email : </label>
        <input value={email} onChange={handleChange} />
      </form>
      <div style={{color: error ? 'red' : ''}}>
        Votre {email} est {error ? 'non valide' : 'valide'}{' '}
      </div>
    </div>
  )
}

function App() {
  return <Login initialEmail="example@example.com" />
}

export default App
