import * as React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
const marvelApiKey = '6bcc5c7ff0ad488fb58f759c4069964c'

const myHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});
const init = {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
};

const fetchMarvel = (name) => {

  const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${marvelApiKey}&nameStartsWith=${name}`;
  return fetch(url, init) 
    .then(response => response.json()) 
    .then(json => {
      return json.data.results;
    })
    .catch(error => console.log(error)) // ERROR DU JSON()
    .catch(error => console.log(error)); // ERROR APPEL API
};

const fetchMarvelById = (id) => {
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${marvelApiKey}`;
  return fetch(url, init) // APPEL VERS L'API
    .then(response => response.json()) // REPONSE PROMISE API
    .then(json => {
      return json.data.results?.[0];
    })
    .catch(error => console.log(error)) // ERROR DU JSON()
    .catch(error => console.log(error)); // ERROR APPEL API
};



function MarvelPersoView({marvel}) {
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={marvel.thumbnail.path + '.' +  marvel.thumbnail.extension} alt={marvel.name} />
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


export {

  MarvelPersoView,
 
  fetchMarvel,
  fetchMarvelById,
}
