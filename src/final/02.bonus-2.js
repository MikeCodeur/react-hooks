// Hook useEffect
// 🚀 effect dependencies props
// http://localhost:3000/alone/final/02.bonus-2.js

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
  React.useEffect(() => {
    window.localStorage.setItem('email', initialEmail)
    console.log('useEffect initialEmail a changé')
  }, [initialEmail])
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
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  return <Login initialEmail={`example-${count}@example.com`} />
}
export default App
