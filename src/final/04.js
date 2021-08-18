// Emoji List
// http://localhost:3000/alone/final/04.js
// Voir https://github.com/ahfarmer/emoji-search/

import * as React from 'react'
import emojiList from '../emojiList'
// eslint-disable-next-line no-unused-vars
import Clipboard from 'clipboard'
import '../04-styles.css'

function Header({nbFound}) {
  return (
    <div className="component-header">
      <div>Recherche Emoji</div>
      <div className="reusult-found">
        {nbFound > 0 ? `${nbFound} emojis trouvés` : `Aucun résultat`}
      </div>
    </div>
  )
}

function SearchInput({onTextChange}) {
  const onChange = e => {
    onTextChange(e.target.value)
  }
  return (
    <div className="component-search-input">
      <div>
        <input onChange={onChange} />
      </div>
    </div>
  )
}

function EmojiSearch() {
  const [dataEmoji, setDataEmoji] = React.useState([])
  const handleTextChange = text => {
    setDataEmoji(filterEmoji(text))
  }
  return (
    <div>
      <Header nbFound={dataEmoji.length} />
      <SearchInput onTextChange={handleTextChange} />
      <Result data={dataEmoji} />
    </div>
  )
}

function Result({data = []}) {
  React.useEffect(() => {
    const clipboard = new Clipboard('.copy-to-clipboard')
    return () => {
      clipboard.destroy()
    }
  })
  return (
    <div className="component-emoji-results">
      {data.map(emojiData => (
        <EmojiResultRow
          key={emojiData.title}
          symbol={emojiData.symbol}
          title={emojiData.title}
        />
      ))}
    </div>
  )
}

function EmojiResultRow({symbol, title}) {
  return (
    <div
      className="component-emoji-result-row copy-to-clipboard"
      data-clipboard-text={symbol}
    >
      {symbol}
      <span className="title">{title}</span>
      <span className="info">Copier</span>
    </div>
  )
}

function App() {
  return <EmojiSearch />
}
export default App

function filterEmoji(searchText, maxResults = 10) {
  return emojiList
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true
      }
      if (emoji.keywords.includes(searchText)) {
        return true
      }
      if (emoji.symbol.includes(searchText)) {
        return true
      }
      return false
    })
    .slice(0, maxResults)
}
