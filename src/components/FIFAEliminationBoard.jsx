import { useState } from 'react'

const teams = [
  { name: 'Argentina', abbr: 'ARG', logo: 'https://flagcdn.com/w160/ar.png' },
  { name: 'Algeria', abbr: 'ALG', logo: 'https://flagcdn.com/w160/dz.png' },
  { name: 'Australia', abbr: 'AUS', logo: 'https://flagcdn.com/w160/au.png' },
  { name: 'Austria', abbr: 'AUT', logo: 'https://flagcdn.com/w160/at.png' },
  { name: 'Belgium', abbr: 'BEL', logo: 'https://flagcdn.com/w160/be.png' },
  { name: 'Bosnia & Herzegovina', abbr: 'BIH', logo: 'https://flagcdn.com/w160/ba.png' },
  { name: 'Brazil', abbr: 'BRA', logo: 'https://flagcdn.com/w160/br.png' },
  { name: 'Canada', abbr: 'CAN', logo: 'https://flagcdn.com/w160/ca.png' },
  { name: 'Cape Verde', abbr: 'CPV', logo: 'https://flagcdn.com/w160/cv.png' },
  { name: 'Colombia', abbr: 'COL', logo: 'https://flagcdn.com/w160/co.png' },
  { name: 'Costa Rica', abbr: 'CRC', logo: 'https://flagcdn.com/w160/cr.png' },
  { name: 'Croatia', abbr: 'CRO', logo: 'https://flagcdn.com/w160/hr.png' },
  { name: 'Curaçao', abbr: 'CUW', logo: 'https://flagcdn.com/w160/cw.png' },
  { name: 'Czechia', abbr: 'CZE', logo: 'https://flagcdn.com/w160/cz.png' },
  { name: 'DR Congo', abbr: 'DRC', logo: 'https://flagcdn.com/w160/cd.png' },
  { name: 'Ecuador', abbr: 'ECU', logo: 'https://flagcdn.com/w160/ec.png' },
  { name: 'Egypt', abbr: 'EGY', logo: 'https://flagcdn.com/w160/eg.png' },
  { name: 'England', abbr: 'ENG', logo: 'https://flagcdn.com/w160/gb-eng.png' },
  { name: 'Spain', abbr: 'ESP', logo: 'https://flagcdn.com/w160/es.png' },
  { name: 'France', abbr: 'FRA', logo: 'https://flagcdn.com/w160/fr.png' },
  { name: 'Germany', abbr: 'GER', logo: 'https://flagcdn.com/w160/de.png' },
  { name: 'Haiti', abbr: 'HAI', logo: 'https://flagcdn.com/w160/ht.png' },
  { name: 'Iran', abbr: 'IRN', logo: 'https://flagcdn.com/w160/ir.png' },
  { name: 'Iraq', abbr: 'IRQ', logo: 'https://flagcdn.com/w160/iq.png' },
  { name: 'Ivory Coast', abbr: 'IVC', logo: 'https://flagcdn.com/w160/ci.png' },
  { name: 'Japan', abbr: 'JPN', logo: 'https://flagcdn.com/w160/jp.png' },
  { name: 'Jordan', abbr: 'JOR', logo: 'https://flagcdn.com/w160/jo.png' },
  { name: 'South Korea', abbr: 'KOR', logo: 'https://flagcdn.com/w160/kr.png' },
  { name: 'Morocco', abbr: 'MAR', logo: 'https://flagcdn.com/w160/ma.png' },
  { name: 'Mexico', abbr: 'MEX', logo: 'https://flagcdn.com/w160/mx.png' },
  { name: 'Netherlands', abbr: 'NED', logo: 'https://flagcdn.com/w160/nl.png' },
  { name: 'New Zealand', abbr: 'NZL', logo: 'https://flagcdn.com/w160/nz.png' },
  { name: 'Norway', abbr: 'NOR', logo: 'https://flagcdn.com/w160/no.png' },
  { name: 'Panama', abbr: 'PAN', logo: 'https://flagcdn.com/w160/pa.png' },
  { name: 'Paraguay', abbr: 'PAR', logo: 'https://flagcdn.com/w160/py.png' },
  { name: 'Portugal', abbr: 'POR', logo: 'https://flagcdn.com/w160/pt.png' },
  { name: 'Qatar', abbr: 'QAT', logo: 'https://flagcdn.com/w160/qa.png' },
  { name: 'Saudi Arabia', abbr: 'KSA', logo: 'https://flagcdn.com/w160/sa.png' },
  { name: 'South Africa', abbr: 'RSA', logo: 'https://flagcdn.com/w160/za.png' },
  { name: 'Scotland', abbr: 'SCO', logo: 'https://flagcdn.com/w160/gb-sct.png' },
  { name: 'Switzerland', abbr: 'SUI', logo: 'https://flagcdn.com/w160/ch.png' },
  { name: 'Sweden', abbr: 'SWE', logo: 'https://flagcdn.com/w160/se.png' },
  { name: 'Tunisia', abbr: 'TUN', logo: 'https://flagcdn.com/w160/tn.png' },
  { name: 'Türkiye', abbr: 'TUR', logo: 'https://flagcdn.com/w160/tr.png' },
  { name: 'United States', abbr: 'USA', logo: 'https://flagcdn.com/w160/us.png' },
  { name: 'Uruguay', abbr: 'URU', logo: 'https://flagcdn.com/w160/uy.png' },
  { name: 'Uzbekistan', abbr: 'UZB', logo: 'https://flagcdn.com/w160/uz.png' },
  { name: 'Venezuela', abbr: 'VEN', logo: 'https://flagcdn.com/w160/ve.png' },
]

export default function FIFAEliminationBoard() {
  const [eliminated, setEliminated] = useState({})
  const [usernames, setUsernames] = useState({})

  const editUsername = (abbr) => {
    const currentName = usernames[abbr] || ''
    const newName = window.prompt(`Assign username to ${abbr}:`, currentName)
    if (newName === null) return

    setUsernames((prev) => ({
      ...prev,
      [abbr]: newName.trim(),
    }))
  }

  const handleTeamClick = (abbr) => {
    if (!usernames[abbr]) {
      editUsername(abbr)
      return
    }

    setEliminated((prev) => ({
      ...prev,
      [abbr]: !prev[abbr],
    }))
  }

  const resetBoard = () => {
    setEliminated({})
    setUsernames({})
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              FIFA Elimination Board
            </h1>
            <p className="text-zinc-400 mt-2">
              First click assigns a username. After assigned, click the flag to eliminate or restore them.
            </p>
          </div>

          <button
            onClick={resetBoard}
            className="px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform"
          >
            Reset Board
          </button>
        </div>

        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6 shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {teams.map((team) => {
              const isEliminated = Boolean(eliminated[team.abbr])
              const username = usernames[team.abbr]

              return (
                <button
                  key={team.abbr}
                  onClick={() => handleTeamClick(team.abbr)}
                  className="relative group bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-2xl p-3 flex flex-col items-center justify-center transition-all duration-200 hover:scale-105 overflow-hidden min-h-36"
                >
                  {username && (
                    <button
                      onClick={(event) => {
                        event.stopPropagation()
                        editUsername(team.abbr)
                      }}
                      className="absolute right-2 top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-black/75 text-xs text-white ring-1 ring-white/20 hover:scale-110 hover:bg-black transition"
                      title="Edit username"
                    >
                      ✏️
                    </button>
                  )}

                  <div
                    className={`transition-all duration-300 ${
                      isEliminated ? 'opacity-40 scale-95' : 'opacity-100 scale-100'
                    }`}
                  >
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="w-16 h-11 object-contain mx-auto rounded"
                    />
                  </div>

                  <div className="mt-3 text-center pb-7">
                    <div className="font-bold text-sm">
                      {team.abbr}
                    </div>
                    <div className="text-[11px] text-zinc-400 leading-tight mt-1">
                      {team.name}
                    </div>
                  </div>

                  {isEliminated && (
                    <>
                      <div className="absolute inset-0 bg-black/35 z-20" />

                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none z-30"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <line x1="12" y1="12" x2="88" y2="88" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
                        <line x1="88" y1="12" x2="12" y2="88" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
                      </svg>
                    </>
                  )}

                  {username && (
                    <div className="absolute bottom-2 left-2 right-2 z-50 rounded-xl bg-black/90 px-2 py-1.5 text-center text-xs font-black text-white shadow-2xl ring-1 ring-white/30 backdrop-blur">
                      <span className="block truncate">
                        {username}
                      </span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}