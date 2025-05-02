import { Routes, Route, NavLink } from 'react-router-dom'
import HomeView    from './views/HomeView'
import JokeView    from './views/JokeView'
import FavoritesView from './views/FavoritesView'
import './App.css'

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="logo">😂 QuickQuip</div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/joke">Joke</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/"        element={<HomeView />} />
          <Route path="/joke"    element={<JokeView />} />
          <Route path="/favorites" element={<FavoritesView />} />
        </Routes>
      </main>
    </>
  )
}
