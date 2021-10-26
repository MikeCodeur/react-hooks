// Hook useEffect
// 🚀 effect dependencies
// http://localhost:3000/alone/final/02.bonus-1.js

import * as React from 'react'

function Login({initialEmail = ''}) {
  const [email, setEmail] = React.useState(
    () => window.localStorage.getItem('email') || initialEmail,
  )
  const [password, setPassword] = React.useState('')
  const handleChange = async event => setEmail(event.target.value)
  const handlePasswordChange = async event => setPassword(event.target.value)

  React.useEffect(() => {
    window.localStorage.setItem('email', email)
    console.log('useEffect email a changé')
  }, [email])
  return (
    <div>
      <form>
        <label>Entrez votre email : </label>
        <input value={email} onChange={handleChange} />
        <label>Password : </label>
        <input value={password} onChange={handlePasswordChange} />
      </form>
    </div>
  )
}

function App() {
  return <Login initialEmail="example@example.com" />
}
export default App
