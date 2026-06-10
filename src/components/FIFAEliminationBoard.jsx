import { useState } from 'react'

const teams = [
  { group: 'Column 1', name: 'Argentina', abbr: 'ARG', logo: 'https://flagcdn.com/w160/ar.png' },
  { group: 'Column 1', name: 'Algeria', abbr: 'ALG', logo: 'https://flagcdn.com/w160/dz.png' },
  { group: 'Column 1', name: 'Australia', abbr: 'AUS', logo: 'https://flagcdn.com/w160/au.png' },
  { group: 'Column 1', name: 'Austria', abbr: 'AUT', logo: 'https://flagcdn.com/w160/at.png' },
  { group: 'Column 1', name: 'Belgium', abbr: 'BEL', logo: 'https://flagcdn.com/w160/be.png' },
  { group: 'Column 1', name: 'Bosnia & Herzegovina', abbr: 'BIH', logo: 'https://flagcdn.com/w160/ba.png' },
  { group: 'Column 1', name: 'Brazil', abbr: 'BRA', logo: 'https://flagcdn.com/w160/br.png' },
  { group: 'Column 1', name: 'Canada', abbr: 'CAN', logo: 'https://flagcdn.com/w160/ca.png' },
  { group: 'Column 1', name: 'Cape Verde', abbr: 'CPV', logo: 'https://flagcdn.com/w160/cv.png' },
  { group: 'Column 1', name: 'Colombia', abbr: 'COL', logo: 'https://flagcdn.com/w160/co.png' },
  { group: 'Column 1', name: 'Costa Rica', abbr: 'CRC', logo: 'https://flagcdn.com/w160/cr.png' },
  { group: 'Column 1', name: 'Croatia', abbr: 'CRO', logo: 'https://flagcdn.com/w160/hr.png' },
  { group: 'Column 1', name: 'Curaçao', abbr: 'CUW', logo: 'https://flagcdn.com/w160/cw.png' },
  { group: 'Column 1', name: 'Czechia', abbr: 'CZE', logo: 'https://flagcdn.com/w160/cz.png' },
  { group: 'Column 1', name: 'DR Congo', abbr: 'DRC', logo: 'https://flagcdn.com/w160/cd.png' },
  { group: 'Column 1', name: 'Ecuador', abbr: 'ECU', logo: 'https://flagcdn.com/w160/ec.png' },

  { group: 'Column 2', name: 'Egypt', abbr: 'EGY', logo: 'https://flagcdn.com/w160/eg.png' },
  { group: 'Column 2', name: 'England', abbr: 'ENG', logo: 'https://flagcdn.com/w160/gb-eng.png' },
  { group: 'Column 2', name: 'Spain', abbr: 'ESP', logo: 'https://flagcdn.com/w160/es.png' },
  { group: 'Column 2', name: 'France', abbr: 'FRA', logo: 'https://flagcdn.com/w160/fr.png' },
  { group: 'Column 2', name: 'Germany', abbr: 'GER', logo: 'https://flagcdn.com/w160/de.png' },
  { group: 'Column 2', name: 'Haiti', abbr: 'HAI', logo: 'https://flagcdn.com/w160/ht.png' },
  { group: 'Column 2', name: 'Iran', abbr: 'IRN', logo: 'https://flagcdn.com/w160/ir.png' },
  { group: 'Column 2', name: 'Iraq', abbr: 'IRQ', logo: 'https://flagcdn.com/w160/iq.png' },
  { group: 'Column 2', name: 'Ivory Coast', abbr: 'IVC', logo: 'https://flagcdn.com/w160/ci.png' },
  { group: 'Column 2', name: 'Japan', abbr: 'JPN', logo: 'https://flagcdn.com/w160/jp.png' },
  { group: 'Column 2', name: 'Jordan', abbr: 'JOR', logo: 'https://flagcdn.com/w160/jo.png' },
  { group: 'Column 2', name: 'South Korea', abbr: 'KOR', logo: 'https://flagcdn.com/w160/kr.png' },
  { group: 'Column 2', name: 'Morocco', abbr: 'MAR', logo: 'https://flagcdn.com/w160/ma.png' },
  { group: 'Column 2', name: 'Mexico', abbr: 'MEX', logo: 'https://flagcdn.com/w160/mx.png' },
  { group: 'Column 2', name: 'Netherlands', abbr: 'NED', logo: 'https://flagcdn.com/w160/nl.png' },
  { group: 'Column 2', name: 'New Zealand', abbr: 'NZL', logo: 'https://flagcdn.com/w160/nz.png' },

  { group: 'Column 3', name: 'Norway', abbr: 'NOR', logo: 'https://flagcdn.com/w160/no.png' },
  { group: 'Column 3', name: 'Panama', abbr: 'PAN', logo: 'https://flagcdn.com/w160/pa.png' },
  { group: 'Column 3', name: 'Paraguay', abbr: 'PAR', logo: 'https://flagcdn.com/w160/py.png' },
  { group: 'Column 3', name: 'Portugal', abbr: 'POR', logo: 'https://flagcdn.com/w160/pt.png' },
  { group: 'Column 3', name: 'Qatar', abbr: 'QAT', logo: 'https://flagcdn.com/w160/qa.png' },
  { group: 'Column 3', name: 'South Africa', abbr: 'RSA', logo: 'https://flagcdn.com/w160/za.png' },
  { group: 'Column 3', name: 'Scotland', abbr: 'SCO', logo: 'https://flagcdn.com/w160/gb-sct.png' },
  { group: 'Column 3', name: 'Switzerland', abbr: 'SUI', logo: 'https://flagcdn.com/w160/ch.png' },
  { group: 'Column 3', name: 'Sweden', abbr: 'SWE', logo: 'https://flagcdn.com/w160/se.png' },
  { group: 'Column 3', name: 'Tunisia', abbr: 'TUN', logo: 'https://flagcdn.com/w160/tn.png' },
  { group: 'Column 3', name: 'Türkiye', abbr: 'TUR', logo: 'https://flagcdn.com/w160/tr.png' },
  { group: 'Column 3', name: 'United States', abbr: 'USA', logo: 'https://flagcdn.com/w160/us.png' },
  { group: 'Column 3', name: 'Uruguay', abbr: 'URU', logo: 'https://flagcdn.com/w160/uy.png' },
  { group: 'Column 3', name: 'Uzbekistan', abbr: 'UZB', logo: 'https://flagcdn.com/w160/uz.png' },
  { group: 'Column 3', name: 'Venezuela', abbr: 'VEN', logo: 'https://flagcdn.com/w160/ve.png' },
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

  const groups = ['Column 1', 'Column 2', 'Column 3']

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {groups.map((group) => {
            const groupTeams = teams.filter((team) => team.group === group)

            return (
              <div
                key={group}
                className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6 shadow-2xl"
              >
                <h2 className="text-2xl font-bold mb-6">
                  {group}
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {groupTeams.map((team) => {
                    const isEliminated = Boolean(eliminated[team.abbr])
                    const username = usernames[team.abbr]

                    return (
                      <button
                        key={team.abbr}
                        onClick={() => handleTeamClick(team.abbr)}
                        className="relative group bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-2xl p-4 flex flex-col items-center justify-center transition-all duration-200 hover:scale-105 overflow-hidden min-h-40"
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
                            className="w-20 h-14 object-contain mx-auto rounded"
                          />
                        </div>

                        <div className="mt-3 text-center pb-7">
                          <div className="font-bold text-sm">
                            {team.abbr}
                          </div>
                          <div className="text-xs text-zinc-400 leading-tight mt-1">
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
            )
          })}
        </div>
      </div>
    </div>
  )
}
