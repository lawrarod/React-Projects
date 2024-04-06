import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

// const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
// const CAT_IMG_URL = 'https://api.thecatapi.com/v1/images/search?limit=50&api_key=live_X8bRfaphohCJK8VjeE5YxQuZhDfztQYZIBqfRgThTxg1f6DDfLh7r2BILaJgYqIG'

function App () {

  const { fact, updateFact } = useCatFact()
  const { imageUrl } = useCatImage( { fact })

  const handleClick = async () => {
    updateFact()
  }

  // const [fact, setFact] = useState('')
  // const [imageUrl, setImageUrl] = useState()

  // useEffect(() => {
  //   fetch(CAT_ENDPOINT_FACT)
  //     .then(res => res.json())
  //     .then(data => {
  //       const { fact } = data
  //       setFact(fact)
  //     })
  // }, [])

  // useEffect(() => {

  //   if(!fact) return

  //   fetch(CAT_IMG_URL)
  //   .then(res => res.json())
  //   .then(response => {
  //     const { url } = response[0]
  //     setImageUrl(url)
  //   })
  // }, [fact])

  return (
    <main>
      <h1>Aplicación de Gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`image of a cat extracted from the first word of ${fact}`}/>}
    </main>
  )
}

export default App
