import * as React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
const marvelApiKey = '6bcc5c7ff0ad488fb58f759c4069964c'

const myHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
})
const init = {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
}

const fetchMarvel = name => {
  const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${marvelApiKey}&nameStartsWith=${name}`
  return fetch(url, init)
    .then(response => response.json())
    .then(json => {
      if (json.data.results.length > 0) {
        return json.data.results[0]
      } else {
        return Promise.reject(
          new Error(`Aucun Marvel trouvé avec le nom "${name}"`),
        )
      }
    })
    .catch(error => {
      return Promise.reject(
        new Error(`Aucun Marvel trouvé avec le nom "${name}"`),
      )
    }) // ERROR DU JSON()
    .catch(error => {
      return Promise.reject(
        new Error(`Aucun Marvel trouvé avec le nom "${name}"`),
      )
    }) // ERROR APPEL API
}

const fetchMarvelById = id => {
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${marvelApiKey}`
  return fetch(url, init) // APPEL VERS L'API
    .then(response => response.json()) // REPONSE PROMISE API
    .then(json => {
      if (json.data.results?.[0]) {
        return json.data.results?.[0]
      } else {
        return Promise.reject(
          new Error(`Aucun Marvel trouvé avec l'id "${id}"`),
        )
      }
    })
    .catch(error => {
      return Promise.reject(new Error(`Aucun Marvel trouvé avec l'id "${id}"`))
    }) // ERROR DU JSON()
    .catch(error => {
      return Promise.reject(new Error(`Aucun Marvel trouvé avec l'id "${id}"`))
    }) // ERROR APPEL API
}

function MarvelPersoView({marvel}) {
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img
          src={marvel.thumbnail.path + '.' + marvel.thumbnail.extension}
          alt={marvel.name}
        />
      </div>
      <section>
        <h2>
          {marvel.name}
          <sup>{marvel.number}</sup>
        </h2>
      </section>
      <section>
        <section>Apparait dans</section>
        <ul>
          {marvel.stories.items.map(story => (
            <li key={story.name}>
              <label>{story.name}</label>:{' '}
              <span>
                {story.damage} <small>({story.type})</small>
              </span>
            </li>
          ))}
        </ul>
      </section>
      <small className="pokemon-info__fetch-time">{marvel.fetchedAt}</small>
    </div>
  )
}

function MarvelSearchForm({onSearch, marvelName}) {
  const [name, setName] = React.useState(marvelName)
  return (
    <div className="component-header">
      <div>Recherche Marvel</div>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="button" onClick={() =>onSearch(name)} value={'rechercher'} />
      </div>
    </div>
  )
}

function MarvelList({marvelList}){
  const [selectedMarvelId, setSelectedMarvelId] = React.useState('')
  return  <ul>
  {marvelList.map(marvel => {
    return (
      <li key={marvel.id} onClick={() => setSelectedMarvelId(marvel.id)}>
        {marvel.name}
      </li>
    )
  })}
</ul>
}

export {MarvelPersoView, MarvelSearchForm, fetchMarvel, fetchMarvelById}
