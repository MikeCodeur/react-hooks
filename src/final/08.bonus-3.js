// useEffect HTTP Avancée
// 🚀 Error Boundarie
// http://localhost:3000/alone/final/08.bonus-3.js

import * as React from 'react'
import {fetchMarvel, MarvelPersoView, MarvelSearchForm} from '../marvel'
import '../08-styles.css'

function MarvelDetails({marvelName}) {
  const [marvel, setMarvel] = React.useState()
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    console.log('React.useEffect', marvelName)
    if (!marvelName) {
      return
    }
    setMarvel(null)
    fetchMarvel(marvelName)
      .then(marvel => setMarvel(marvel))
      .catch(error => setError(error))
  }, [marvelName])

  if (error) {
    // this will be handled by an error boundary
    throw error
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

class ErrorBoundary extends React.Component {
  state = {error: null}

  static getDerivedStateFromError(error) {
    return {error}
  }
  render() {
    const {ErrorDisplay} = this.props
    if (this.state.error) {
      return <ErrorDisplay error={this.state.error} />
    }
    return this.props.children
  }
}

function ErrorDisplay({error}) {
  return (
    <div style={{color: 'red'}}>
      Une erreur est survenue lors de la recherche de Marvel detail :{' '}
      <pre style={{color: 'grey'}}> Détail : {error.message}</pre>
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
        <ErrorBoundary key={marvelName} ErrorDisplay={ErrorDisplay}>
          <MarvelDetails marvelName={marvelName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}
export default App
