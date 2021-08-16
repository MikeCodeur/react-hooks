// Hook flow
// https://github.com/donavon/hook-flow
// http://localhost:3000/alone/03.js

import * as React from 'react'
import emojiList from '../emojiList'
import '../03-styles.css'

function Header() {
  return <div className="component-header">Emoji Search</div>
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

function Result({data}) {
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
    <div className="component-emoji-result-row">
      {symbol}
      <span>{title}</span>
    </div>
  )
}

function App() {
  const [dataEmoji, setDataEmoji] = React.useState([])
  const handleTextChange = text => {
    setDataEmoji(filterEmoji(text))
  }
  return (
    <div>
      <Header />
      <SearchInput onTextChange={handleTextChange} />
      <Result data={dataEmoji} />
    </div>
  )
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
