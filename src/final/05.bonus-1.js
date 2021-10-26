// useRef et useEffect
// 🚀 settings avec useRef
// http://localhost:3000/alone/final/05.bonus-1.js

import * as React from 'react'
import ConfettiGenerator from 'confetti-js'

function Confetti() {
  const confettiRef = React.useRef()
  const refSetting = React.useRef({clock: 100, animate: true, max: 200})

  React.useEffect(() => {
    const confettiSettings = {
      target: confettiRef.current,
      ...refSetting.current,
    }
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()

    return () => confetti.clear()
  })
  return <canvas ref={confettiRef} />
}

function App() {
  return <Confetti />
}
export default App
