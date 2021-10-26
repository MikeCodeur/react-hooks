// Lifting state
// 🚀 deplacer un state
// http://localhost:3000/alone/final/03.bonus-1.js

import * as React from 'react'

function MyBestComputer({computer, onComputerChange}) {
  return (
    <div>
      <label>Mon ordinateur préféré : </label>
      <input
        value={computer}
        onChange={event => onComputerChange(event.target.value)}
      />
    </div>
  )
}

function UserName() {
  const [userName, setUserName] = React.useState('')
  return (
    <div>
      <label>Nom d'utilisateur : </label>
      <input
        value={userName}
        onChange={event => setUserName(event.target.value)}
      />
    </div>
  )
}

function Content({computer}) {
  return (
    <div>
      Ton ordinateur préféré est <b>{computer}</b>
    </div>
  )
}
function App() {
  const [computer, setComputer] = React.useState('MacBookPro')
  return (
    <div>
      <MyBestComputer computer={computer} onComputerChange={setComputer} />
      <UserName />
      <Content computer={computer} />
    </div>
  )
}
export default App
