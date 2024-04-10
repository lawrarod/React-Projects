import { useEffect, useState } from 'react'

const CAT_IMG_URL = 'https://api.thecatapi.com/v1/images/search?limit=50&api_key=live_X8bRfaphohCJK8VjeE5YxQuZhDfztQYZIBqfRgThTxg1f6DDfLh7r2BILaJgYqIG'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    fetch(CAT_IMG_URL)
      .then(res => res.json())
      .then(response => {
        const { url } = response[0]
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
