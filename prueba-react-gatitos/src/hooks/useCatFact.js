import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts.js"
 
export function useCatFact () {
  const [fact, setFact] = useState('')

  const updateFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(() => {updateFact}, [])

  return { fact, updateFact }
}