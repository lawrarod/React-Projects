import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App() {
  const { fact, updateFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    updateFact()
  }

  return (
    <main>
      <h1>Kittens App</h1>

      <section className="content">
        {imageUrl && <img src={imageUrl} alt='random cat image' />}
        {fact && <p>{fact}</p>}
      </section>

      <button onClick={handleClick}>Get new fact</button>
    </main>
  )
}

export default App
