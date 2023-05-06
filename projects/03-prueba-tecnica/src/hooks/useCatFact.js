import { useState, useEffect } from 'react'
import { getFact } from '../services/fact'

export function useCatFact() {
  const [fact, setFact] = useState()
  const refreshFact = () => {
    getFact().then(fact => setFact(fact))
  }
  useEffect(refreshFact, [])
  return { refreshFact, fact }
}
