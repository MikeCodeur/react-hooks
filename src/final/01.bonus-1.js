// Hook useState
// 🚀 Valeur initiale
// http://localhost:3000/alone/final/01.bonus-1.js

import * as React from 'react'

function Login({initialEmail = ''}) {
  const [email, setEmail] = React.useState(initialEmail)
  const handleChange = event => {
    setEmail(event.target.value)
  }
  return (
    <div>
      <form>
        <label>Entrez votre email : </label>
        <input value={email} onChange={handleChange} />
      </form>
      <div>Votre {email} </div>
    </div>
  )
}

function App() {
  return <Login initialEmail="example@example.com" />
}

export default App
