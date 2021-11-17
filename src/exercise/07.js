// useEffect HTTP
// http://localhost:3000/alone/exercise/07.js

/* eslint-disable no-unused-vars */
import React from 'react'

function ArticleList({query = 'redux'}) {
  const [data, setData] = React.useState([])

  React.useEffect(
    () => {
      // ⛏️ décommmente ces 3 lignes pour l'appel à HTTP
      // fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
      //   .then(response => response.json())
      //   .then(json => setData(json.hits))
      // 🐶 n'oublie pas la dépendance vers 'query' pour n'appeler l'api
      // que sur la modification du prop 'query'
      // 🤖 [query]
    },
    [
      /*dependances ici*/
    ],
  )

  return (
    <ul>
      {data.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  )
}

function App() {
  const [searchText, setSearchText] = React.useState('')
  return (
    <div>
      <label>Recherher</label>
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <ArticleList query={searchText}></ArticleList>
    </div>
  )
}
export default App
