import { useNavigate } from 'react-router-dom'
import './HomeView.css'
export default function HomeView() {
  const nav = useNavigate()
  return (
    <section className="home">
      <h1>Get Ready to Laugh!</h1>
      <button onClick={() => nav('/joke')}>Start Laughing!</button>
      <img src="/src/assets/mickey-laugh.png" alt="Laughing character" />
    </section>
  )
}