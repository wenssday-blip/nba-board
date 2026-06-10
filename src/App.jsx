import { useState } from 'react'
import NBAEliminationBoard from './components/NBAEliminationBoard'
import PokemonTypeBoard from './components/PokemonTypeBoard'
import NFLEliminationBoard from './components/NFLEliminationBoard'
import FIFAEliminationBoard from './components/FIFAEliminationBoard'
import MLBEliminationBoard from './components/MLBEliminationBoard'

export default function App() {
  const [board, setBoard] = useState('nba')

  return (
    <div>
      <nav className="flex flex-wrap gap-3 bg-black p-4">
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

        <button
          onClick={() => setBoard('nfl')}
          className="rounded-xl bg-white px-4 py-2 font-bold text-black"
        >
          NFL Board
        </button>

        <button
          onClick={() => setBoard('fifa')}
          className="rounded-xl bg-white px-4 py-2 font-bold text-black"
        >
          FIFA Board
        </button>

        <button
          onClick={() => setBoard('mlb')}
          className="rounded-xl bg-white px-4 py-2 font-bold text-black"
        >
          MLB Board
        </button>
      </nav>

      {board === 'nba' && <NBAEliminationBoard />}
      {board === 'pokemon' && <PokemonTypeBoard />}
      {board === 'nfl' && <NFLEliminationBoard />}
      {board === 'fifa' && <FIFAEliminationBoard />}
      {board === 'mlb' && <MLBEliminationBoard />}
    </div>
  )
}