import { useState } from 'react'

const TYPES = [
  { name: 'Normal', icon: '⭐', colors: 'from-zinc-300 to-zinc-500', text: 'text-zinc-950' },
  { name: 'Fire', icon: '🔥', colors: 'from-orange-400 to-red-600', text: 'text-white' },
  { name: 'Water', icon: '💧', colors: 'from-sky-400 to-blue-700', text: 'text-white' },
  { name: 'Electric', icon: '⚡', colors: 'from-yellow-300 to-amber-500', text: 'text-zinc-950' },
  { name: 'Grass', icon: '🌿', colors: 'from-lime-400 to-green-700', text: 'text-white' },
  { name: 'Ice', icon: '❄️', colors: 'from-cyan-200 to-sky-500', text: 'text-zinc-950' },
  { name: 'Fighting', icon: '🥊', colors: 'from-red-500 to-stone-800', text: 'text-white' },
  { name: 'Poison', icon: '☠️', colors: 'from-fuchsia-500 to-purple-800', text: 'text-white' },
  { name: 'Ground', icon: '⛰️', colors: 'from-yellow-600 to-stone-700', text: 'text-white' },
  { name: 'Flying', icon: '🪽', colors: 'from-indigo-300 to-sky-600', text: 'text-white' },
  { name: 'Psychic', icon: '🔮', colors: 'from-pink-400 to-fuchsia-700', text: 'text-white' },
  { name: 'Bug', icon: '🐞', colors: 'from-lime-500 to-green-800', text: 'text-white' },
  { name: 'Rock', icon: '🪨', colors: 'from-amber-600 to-stone-800', text: 'text-white' },
  { name: 'Ghost', icon: '👻', colors: 'from-violet-500 to-indigo-950', text: 'text-white' },
  { name: 'Dragon', icon: '🐉', colors: 'from-indigo-600 to-purple-950', text: 'text-white' },
  { name: 'Dark', icon: '🌑', colors: 'from-zinc-700 to-black', text: 'text-white' },
  { name: 'Steel', icon: '⚙️', colors: 'from-slate-300 to-slate-700', text: 'text-white' },
  { name: 'Fairy', icon: '✨', colors: 'from-pink-200 to-rose-500', text: 'text-zinc-950' },
]

export default function PokemonTypeBoard() {
  const [eliminated, setEliminated] = useState({})
  const [usernames, setUsernames] = useState({})

  const eliminatedCount = Object.values(eliminated).filter(Boolean).length
  const assignedCount = Object.values(usernames).filter(Boolean).length

  const editUsername = (typeName) => {
    const currentName = usernames[typeName] || ''
    const newName = window.prompt(`Assign username to ${typeName}:`, currentName)

    if (newName === null) return

    const cleanName = newName.trim()

    setUsernames((prev) => ({
      ...prev,
      [typeName]: cleanName,
    }))

    setEliminated((prev) => ({
      ...prev,
      [typeName]: cleanName.length > 0,
    }))
  }

  const handleCardClick = (typeName) => {
    const username = usernames[typeName]

    if (!username) {
      editUsername(typeName)
      return
    }

    setEliminated((prev) => ({
      ...prev,
      [typeName]: !prev[typeName],
    }))
  }

  const resetBoard = () => {
    setEliminated({})
    setUsernames({})
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-5 text-white sm:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-5 rounded-3xl border border-white/10 bg-zinc-900/80 p-6 shadow-2xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.35em] text-yellow-300">
              Pokémon Type Board
            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Type Assignment Dashboard
            </h1>

            <p className="mt-3 max-w-2xl text-zinc-400">
              First click assigns a username and automatically marks the type.
              Click again to restore or eliminate.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="rounded-2xl bg-black/30 px-5 py-3 text-center ring-1 ring-white/10">
              <div className="text-2xl font-black">
                {assignedCount}/18
              </div>

              <div className="text-xs uppercase tracking-widest text-zinc-400">
                Assigned
              </div>
            </div>

            <div className="rounded-2xl bg-black/30 px-5 py-3 text-center ring-1 ring-white/10">
              <div className="text-2xl font-black">
                {eliminatedCount}/18
              </div>

              <div className="text-xs uppercase tracking-widest text-zinc-400">
                Eliminated
              </div>
            </div>

            <button
              type="button"
              onClick={resetBoard}
              className="rounded-2xl bg-white px-5 py-3 font-bold text-zinc-950 transition hover:scale-105 hover:bg-yellow-200"
            >
              Reset Board
            </button>
          </div>
        </header>

        <main className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {TYPES.map((type) => {
            const username = usernames[type.name] || ''
            const isEliminated = Boolean(eliminated[type.name])

            return (
              <div
                key={type.name}
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(type.name)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handleCardClick(type.name)
                  }
                }}
                className="group relative min-h-52 cursor-pointer overflow-hidden rounded-3xl border border-white/10 p-5 text-left shadow-xl transition duration-200 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${type.colors}`}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.42),transparent_35%)]" />

                <div
                  className={`relative z-10 flex h-full flex-col items-center justify-center transition duration-300 ${
                    isEliminated
                      ? 'scale-95 opacity-45'
                      : 'scale-100 opacity-100'
                  } ${type.text}`}
                >
                  <div className="text-7xl drop-shadow-xl">
                    {type.icon}
                  </div>

                  <h2 className="mt-4 text-2xl font-black tracking-tight">
                    {type.name}
                  </h2>

                  <p className="mt-2 text-sm font-semibold opacity-80">
                    {username ? 'Click to toggle X' : 'Click to assign'}
                  </p>
                </div>

                {username && (
                  <>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        editUsername(type.name)
                      }}
                      className="absolute right-3 top-3 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-sm font-black text-white ring-1 ring-white/20 transition hover:scale-110 hover:bg-black"
                      title="Edit username"
                    >
                      ✏️
                    </button>

                    <div className="absolute bottom-3 left-3 right-3 z-50 rounded-xl bg-black/90 px-3 py-2 text-center text-sm font-black text-white shadow-2xl ring-1 ring-white/30 backdrop-blur">
                      <span className="block truncate">
                        {username}
                      </span>
                    </div>
                  </>
                )}

                {isEliminated && (
                  <>
                    <div className="absolute inset-0 z-20 bg-black/35" />

                    <svg
                      className="pointer-events-none absolute inset-0 z-30 h-full w-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="12"
                        y1="12"
                        x2="88"
                        y2="88"
                        stroke="#ef4444"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />

                      <line
                        x1="88"
                        y1="12"
                        x2="12"
                        y2="88"
                        stroke="#ef4444"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </>
                )}
              </div>
            )
          })}
        </main>
      </div>
    </div>
  )
}