// Hook useState
// http://localhost:3000/alone/exercise/02.js

import * as React from 'react'

// 🤖 Utilise className pour la taille et le style (backgroundColor) pour la couleur
// 🤖 chaque element doive avoir "container" className appliqué

// 🐶 ajoute un props className à chaque element avec le bon nonm
// 🤖 Les class names dispo: container, container--large, container--medium, container--small

// 🐶 Ajoute egalement un prop style sur chaque element pour changer le backgroundColor
// le text doit aussi etre en italique `fontStyle: 'italic'`
function Login() {
  const email = 'a'
  return (
    <div>
      <div>
        <label>Entrez votre email : </label>
        <input value={email} />
      </div>
      <div>Votre {email}</div>
    </div>
  )
}

function App() {
  return <Login />
}

export default App
