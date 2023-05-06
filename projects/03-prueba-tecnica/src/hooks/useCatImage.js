import { useState, useEffect } from 'react'

export function useCatImage({ fact }) {
  const CATS_PREFIX_IMAGE_URL = 'https://cataas.com'
  const [imageUrl, setImageUrl] = useState()
  //para recuperar la imagen cada vez que cambia el fact
  useEffect(() => {
    if (!fact) return
    // tres primeras palabras
    // const firstWord = fact.split(' ')[0].slice(0, 3).join(' ')
    const firstTrheeWord = fact.split(' ', 3).join(' ')
    console.log(firstTrheeWord)
    fetch(
      `https://cataas.com/cat/says/${firstTrheeWord}?size=50&color=red&json=true`
    )
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CATS_PREFIX_IMAGE_URL}${imageUrl}` }
}
