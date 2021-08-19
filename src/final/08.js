// useEffect HTTP
// http://localhost:3000/alone/final/07.js

import * as React from 'react'
import {fetchMarvel, fetchMarvelById, MarvelPersoView,MarvelSearchForm} from '../marvel'
import '../07-styles.css'

function MarvelDetails({marvelName}) {

  const [marvel, setMarvel] = React.useState()
  const [error, setError] = React.useState(null)
  
  React.useEffect(() => {
    console.log('React.useEffect', marvelName)
    if (!marvelName) {
      return 
    }
    fetchMarvel(marvelName)
    .then(marvel => setMarvel(marvel))
    .catch(error => setError(error))
  }, [marvelName])


  console.log('error', error)
  if (!marvelName) {
    return 'Entre un nom de personnage Marvel'
  }
  if (!marvel) {
    return 'Entre un nom de personnage Marvel'
  }
  return (
    <div>
     <MarvelPersoView marvel={marvel} />
    </div>
  )
}

function App() {
  const [marvelName, setMarvelName] = React.useState('')
  const handleSearch = (name) => {
    setMarvelName(name)
  }
  return (
    <div className="marvel-app">
       <MarvelSearchForm marvelName={marvelName} onSearch={handleSearch}   />
      <div className="marvel-detail">
        <MarvelDetails marvelName={marvelName}  />
      </div>
    </div>
    
  )
}
export default App
