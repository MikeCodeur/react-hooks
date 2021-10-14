// useEffect HTTP Avancée
// http://localhost:3000/alone/exercise/08.js

/* eslint-disable no-unused-vars */
import React from 'react'

// 🐶 Tu vas avoir besoin d'appeler l'API Marvel et d'utiliser 'MarvelPersoView'
// pour afficher le detail d'un personnage Marvel.
// importe donc 'fetchMarvel' 'MarvelPersoView' depuis '../marvel'
import {MarvelSearchForm} from '../marvel'
import '../08-styles.css'

function MarvelDetails({marvelName}) {
  // 🐶 Créé un state pour le personnage marvel

  // 🐶 React.useEffect : utilise React.useEffect pour appeler l'API marvel quand le prop 'marvelName' change
  // Attention aux dependances de useEffect []
  // N'appelle pas l'API marvel si 'marvelName' n'est pas renseigné
  // 🤖 if (!marvelName) { return }
  // 🐶 Avant d'appeler `fetchMarvel` met le state marvel à null (nettoyage du précedent Marvel)
  // 🤖 Appelle `fetchMarvel` :
  //    fetchMarvel(marvelName)
  //    .then(marvel => /* met à jour le state marvel ici */)

  // 🐶 retourne (render) 3 choses differentes en fonctions du state et prop
  //  - 'Entrer un nom de personnage Marvel' si `marvelName` n'est pas renseigné
  //  - 'chargement ...' si `marvel` n'est pas renseigné
  //  - <MarvelPersoView marvel={marvel} sinon

  return null
}

function App() {
  const [marvelName, setMarvelName] = React.useState('')

  const handleSearch = name => {
    setMarvelName(name)
  }
  return (
    <div className="marvel-app">
      <MarvelSearchForm marvelName={marvelName} onSearch={handleSearch} />
      <div className="marvel-detail">
        <MarvelDetails marvelName={marvelName} />
      </div>
    </div>
  )
}
export default App
