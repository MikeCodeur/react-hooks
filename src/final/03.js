// Lifting state
// http://localhost:3000/alone/final/03.js

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

function UserName({userName, onUserNameChange}) {
  return (
    <div>
      <label>Nom d'utilisateur : </label>
      <input
        value={userName}
        onChange={event => onUserNameChange(event.target.value)}
      />
    </div>
  )
}

function Content({userName, computer}) {
  return (
    <div>
      Salut <b>{userName}</b>, ton ordinateur préféré est <b>{computer}</b>
    </div>
  )
}
function App() {
  const [computer, setComputer] = React.useState('MacBookPro')
  const [userName, setUserName] = React.useState('')
  return (
    <div>
      <MyBestComputer computer={computer} onComputerChange={setComputer} />
      <UserName userName={userName} onUserNameChange={setUserName} />
      <Content userName={userName} computer={computer} />
    </div>
  )
}
export default App
