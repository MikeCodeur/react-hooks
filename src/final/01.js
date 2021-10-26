// Hook useState
// http://localhost:3000/alone/final/01.js

import * as React from 'react'

function Login() {
  const [email, setEmail] = React.useState()
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
  return <Login />
}

export default App
