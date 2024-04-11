import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { useState } from 'react'

function App() {
  const { fact, updateFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  const [visible, setVisible] = useState('')
  const bool = true

  const handleClick = async () => {
    updateFact()
    setVisible(bool)
  }

  return (
    <main>
      <h1>Kittens App</h1>

      <section className={visible && 'visible'}>
        {imageUrl && <img src={imageUrl} alt='random cat image' />}
        {fact && <p>{fact}</p>}
      </section>

      <button onClick={handleClick}>Get new fact</button>
    </main>
  )
}

export default App
