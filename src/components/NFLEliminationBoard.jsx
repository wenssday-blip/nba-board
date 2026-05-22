import { useState } from 'react'

const teams = [
  // AFC East
  { conference: 'AFC', division: 'East', name: 'Buffalo Bills', abbr: 'BUF', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/buf.png' },
  { conference: 'AFC', division: 'East', name: 'Miami Dolphins', abbr: 'MIA', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/mia.png' },
  { conference: 'AFC', division: 'East', name: 'New England Patriots', abbr: 'NE', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png' },
  { conference: 'AFC', division: 'East', name: 'New York Jets', abbr: 'NYJ', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png' },

  // AFC North
  { conference: 'AFC', division: 'North', name: 'Baltimore Ravens', abbr: 'BAL', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png' },
  { conference: 'AFC', division: 'North', name: 'Cincinnati Bengals', abbr: 'CIN', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cin.png' },
  { conference: 'AFC', division: 'North', name: 'Cleveland Browns', abbr: 'CLE', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/cle.png' },
  { conference: 'AFC', division: 'North', name: 'Pittsburgh Steelers', abbr: 'PIT', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/pit.png' },

  // AFC South
  { conference: 'AFC', division: 'South', name: 'Houston Texans', abbr: 'HOU', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/hou.png' },
  { conference: 'AFC', division: 'South', name: 'Indianapolis Colts', abbr: 'IND', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ind.png' },
  { conference: 'AFC', division: 'South', name: 'Jacksonville Jaguars', abbr: 'JAX', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/jax.png' },
  { conference: 'AFC', division: 'South', name: 'Tennessee Titans', abbr: 'TEN', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ten.png' },

  // AFC West
  { conference: 'AFC', division: 'West', name: 'Denver Broncos', abbr: 'DEN', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png' },
  { conference: 'AFC', division: 'West', name: 'Kansas City Chiefs', abbr: 'KC', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/kc.png' },
  { conference: 'AFC', division: 'West', name: 'Las Vegas Raiders', abbr: 'LV', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lv.png' },
  { conference: 'AFC', division: 'West', name: 'Los Angeles Chargers', abbr: 'LAC', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lac.png' },

  // NFC East
  { conference: 'NFC', division: 'East', name: 'Dallas Cowboys', abbr: 'DAL', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/dal.png' },
  { conference: 'NFC', division: 'East', name: 'New York Giants', abbr: 'NYG', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png' },
  { conference: 'NFC', division: 'East', name: 'Philadelphia Eagles', abbr: 'PHI', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/phi.png' },
  { conference: 'NFC', division: 'East', name: 'Washington Commanders', abbr: 'WAS', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png' },

  // NFC North
  { conference: 'NFC', division: 'North', name: 'Chicago Bears', abbr: 'CHI', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/chi.png' },
  { conference: 'NFC', division: 'North', name: 'Detroit Lions', abbr: 'DET', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/det.png' },
  { conference: 'NFC', division: 'North', name: 'Green Bay Packers', abbr: 'GB', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/gb.png' },
  { conference: 'NFC', division: 'North', name: 'Minnesota Vikings', abbr: 'MIN', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/min.png' },

  // NFC South
  { conference: 'NFC', division: 'South', name: 'Atlanta Falcons', abbr: 'ATL', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/atl.png' },
  { conference: 'NFC', division: 'South', name: 'Carolina Panthers', abbr: 'CAR', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/car.png' },
  { conference: 'NFC', division: 'South', name: 'New Orleans Saints', abbr: 'NO', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png' },
  { conference: 'NFC', division: 'South', name: 'Tampa Bay Buccaneers', abbr: 'TB', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/tb.png' },

  // NFC West
  { conference: 'NFC', division: 'West', name: 'Arizona Cardinals', abbr: 'ARI', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/ari.png' },
  { conference: 'NFC', division: 'West', name: 'Los Angeles Rams', abbr: 'LAR', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/lar.png' },
  { conference: 'NFC', division: 'West', name: 'San Francisco 49ers', abbr: 'SF', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/sf.png' },
  { conference: 'NFC', division: 'West', name: 'Seattle Seahawks', abbr: 'SEA', logo: 'https://a.espncdn.com/i/teamlogos/nfl/500/sea.png' },
]

export default function NFLEliminationBoard() {
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

  const conferences = ['AFC', 'NFC']

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              NFL Elimination Board
            </h1>
            <p className="text-zinc-400 mt-2">
              First click assigns a username. After assigned, click the logo to eliminate or restore them.
            </p>
          </div>

          <button
            onClick={resetBoard}
            className="px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform"
          >
            Reset Board
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {conferences.map((conference) => {
            const conferenceTeams = teams.filter((team) => team.conference === conference)
            const divisions = [...new Set(conferenceTeams.map((t) => t.division))]

            return (
              <div
                key={conference}
                className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6 shadow-2xl"
              >
                <h2 className="text-3xl font-bold mb-6">
                  {conference} Conference
                </h2>

                <div className="space-y-8">
                  {divisions.map((division) => {
                    const divisionTeams = conferenceTeams.filter((team) => team.division === division)

                    return (
                      <div key={division}>
                        <h3 className="text-xl font-semibold text-zinc-300 mb-4">
                          {division} Division
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {divisionTeams.map((team) => {
                            const isEliminated = Boolean(eliminated[team.abbr])
                            const username = usernames[team.abbr]

                            return (
                              <button
                                key={team.abbr}
                                onClick={() => handleTeamClick(team.abbr)}
                                className="relative group bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-2xl p-4 flex flex-col items-center justify-center transition-all duration-200 hover:scale-105 overflow-hidden min-h-44"
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
                                    className="w-20 h-20 object-contain mx-auto"
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
            )
          })}
        </div>
      </div>
    </div>
  )
}