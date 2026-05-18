import { useState } from 'react'
import NBAEliminationBoard from './components/NBAEliminationBoard'
import PokemonTypeBoard from './components/PokemonTypeBoard'

export default function App() {
  const [board, setBoard] = useState('nba')

  return (
    <div>
      <nav className="flex gap-3 bg-black p-4">
        <button
          onClick={() => setBoard('nba')}
          className="rounded-xl bg-white px-4 py-2 font-bold text-black"
        >
          NBA Board
        </button>

        <button
          onClick={() => setBoard('pokemon')}
          className="rounded-xl bg-white px-4 py-2 font-bold text-black"
        >
          Pokémon Type Board
        </button>
      </nav>

      {board === 'nba' && <NBAEliminationBoard />}
      {board === 'pokemon' && <PokemonTypeBoard />}
    </div>
  )
}