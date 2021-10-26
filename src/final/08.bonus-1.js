// useEffect HTTP Avancée
// 🚀 Error
// http://localhost:3000/alone/final/08.bonus-1.js

import * as React from 'react'
import {fetchMarvel, MarvelPersoView, MarvelSearchForm} from '../marvel'
import '../08-styles.css'

function MarvelDetails({marvelName}) {
  const [marvel, setMarvel] = React.useState()
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    if (!marvelName) {
      return
    }
    setMarvel(null)
    fetchMarvel(marvelName)
      .then(marvel => setMarvel(marvel))
      .catch(error => setError(error))
  }, [marvelName])

  if (error) {
    return (
      <div style={{color: 'red'}}>
        Une erreur est survenue lors de la recherche de Marvel detail :{' '}
        <pre style={{color: 'grey'}}> Détail : {error.message}</pre>
      </div>
    )
  }
  if (!marvelName) {
    return 'Entrer un nom de personnage Marvel'
  }
  if (!marvel) {
    return 'chargement ...'
  }
  return (
    <div>
      <MarvelPersoView marvel={marvel} />
    </div>
  )
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
