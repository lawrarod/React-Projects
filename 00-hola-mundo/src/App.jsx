import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className="App">
      <TwitterFollowCard
        userName="clasicosdebarrio"
        name="Clásicos de Barrio"
      />
      <TwitterFollowCard userName="jungle4eva" name="Jungle" />
      <TwitterFollowCard userName="califato_3x4" name="Califato 3x4" />
      <TwitterFollowCard userName="vicentegarciag" name="Vicente García" />
    </section>
  )
}
