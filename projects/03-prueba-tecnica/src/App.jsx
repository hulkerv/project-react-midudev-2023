import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App() {
  const { refreshFact, fact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClik = () => {
    refreshFact()
  }
  return (
    <main>
      <h1>App de gatitos </h1>
      <button onClick={handleClik}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracting using the first three words for ${fact}`}
        />
      )}
    </main>
  )
}
