import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { useState } from 'react'

function App() {
  const { fact, updateFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const [visible, setVisible] = useState(false)

  const handleClick = async () => {
    updateFact()
    setVisible(visible)
  }

  return (
    <main>
      <h1>Kittens App</h1>

      <section className={'content' + visible && 'visible'}>
        {imageUrl && <img src={imageUrl} alt='random cat image' />}
        {fact && <p>{fact}</p>}
      </section>

      <button onClick={handleClick}>Get new fact</button>
    </main>
  )
}

export default App
