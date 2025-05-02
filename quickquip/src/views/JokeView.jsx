import { useState, useEffect } from 'react'
import './JokeView.css'

export default function JokeView() {
  const [joke, setJoke]               = useState(null)
  const [showPunchline, setShow]     = useState(false)
  const [favorites, setFavs]         = useState(() => {
    return JSON.parse(localStorage.getItem('qq-favs') || '[]')
  })
  useEffect(() => { loadJoke() }, [])
  
  async function loadJoke() {
    setShow(false)
    const res  = await fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await res.json()
    setJoke(data)
  }

  function addFavorite() {
    if (!joke) return
    setFavs(favs => {
      if (favs.find(j => j.id === joke.id)) return favs
      const updated = [...favs, joke]
      localStorage.setItem('qq-favs', JSON.stringify(updated))
      return updated
    })
  }

  if (!joke) return <p>Loading…</p>

  return (
    <section className="joke">
      <p><strong>{joke.setup}</strong></p>

      {showPunchline && <p><em>{joke.punchline}</em></p>}

      <div className="button-group">
        <button onClick={loadJoke}>Generate new Joke</button>
        <button onClick={() => setShow(s => !s)}>
          {showPunchline ? 'Hide Answer' : 'Show Answer'}
        </button>
        <button onClick={addFavorite}>❤️ Favorite this Joke ❤️</button>
      </div>
    </section>
  )
}
