// useEffect HTTP
// http://localhost:3000/alone/final/07.js

import * as React from 'react'
import {fetchMarvel, fetchMarvelById, MarvelPersoView} from '../marvel'
import '../04-styles.css'

function MarvelList() {
  const [marvelList, setMarvelList] = React.useState([])
  const [marvel, setMarvel] = React.useState()
  const [name, setName] = React.useState('X-Men')
  const [selectedMarvelId, setSelectedMarvelId] = React.useState('')
  const firstUpdate = React.useRef(true)

  React.useEffect(() => {
    console.log('React.useEffect', selectedMarvelId)
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    fetchMarvelById(selectedMarvelId).then(marvel => {
      setMarvel(marvel)
      setMarvelList([])
    })
  }, [selectedMarvelId])

  const onChange = e => {
    setName(e.target.value)
  }
  const handleSearch = e => {
    setMarvel(null)
    fetchMarvel(name).then(marvel => setMarvelList(marvel))
  }

  return (
    <div className="marvel-app">
      <div className="component-header">
        <div>Recherche Marvel</div>
        <div>
          <input type="text" value={name} onChange={onChange} />
          <input type="button" onClick={handleSearch} value={'rechercher'} />
        </div>
      </div>
      {marvel ? <MarvelPersoView marvel={marvel} /> : null}
      <ul>
        {marvelList.map(marvel => {
          return (
            <li key={marvel.id} onClick={() => setSelectedMarvelId(marvel.id)}>
              {marvel.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function App() {
  return <MarvelList />
}
export default App
