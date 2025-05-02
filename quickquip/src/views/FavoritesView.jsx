import { useState, useEffect } from 'react'

export default function FavoritesView() {
  const [favs, setFavs] = useState([])

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('qq-favs') || '[]'))
  }, [])

  function remove(id) {
    const updated = favs.filter(j => j.id !== id)
    setFavs(updated)
    localStorage.setItem('qq-favs', JSON.stringify(updated))
  }

  if (favs.length === 0) return <p>No favorites yet.</p>
  return (
    <section className="favorites">
      {favs.map((j, i) => (
        <div key={j.id} className="fav-card">
          <strong>{i+1}.</strong>
          <span>{j.setup} <em>{j.punchline}</em></span>
          <button onClick={() => remove(j.id)}>💔</button>
        </div>
      ))}
    </section>
  )
}
