import { useState } from 'react'

const teams = [
  { league: 'American League', division: 'East', name: 'Baltimore Orioles', abbr: 'BAL', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/bal.png' },
  { league: 'American League', division: 'East', name: 'Boston Red Sox', abbr: 'BOS', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/bos.png' },
  { league: 'American League', division: 'East', name: 'New York Yankees', abbr: 'NYY', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/nyy.png' },
  { league: 'American League', division: 'East', name: 'Tampa Bay Rays', abbr: 'TB', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/tb.png' },
  { league: 'American League', division: 'East', name: 'Toronto Blue Jays', abbr: 'TOR', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/tor.png' },

  { league: 'American League', division: 'Central', name: 'Chicago White Sox', abbr: 'CHW', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/chw.png' },
  { league: 'American League', division: 'Central', name: 'Cleveland Guardians', abbr: 'CLE', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/cle.png' },
  { league: 'American League', division: 'Central', name: 'Detroit Tigers', abbr: 'DET', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/det.png' },
  { league: 'American League', division: 'Central', name: 'Kansas City Royals', abbr: 'KC', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/kc.png' },
  { league: 'American League', division: 'Central', name: 'Minnesota Twins', abbr: 'MIN', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/min.png' },

  { league: 'American League', division: 'West', name: 'Houston Astros', abbr: 'HOU', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/hou.png' },
  { league: 'American League', division: 'West', name: 'Los Angeles Angels', abbr: 'LAA', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/laa.png' },
  { league: 'American League', division: 'West', name: 'Athletics', abbr: 'ATH', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/oak.png' },
  { league: 'American League', division: 'West', name: 'Seattle Mariners', abbr: 'SEA', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/sea.png' },
  { league: 'American League', division: 'West', name: 'Texas Rangers', abbr: 'TEX', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/tex.png' },

  { league: 'National League', division: 'East', name: 'Atlanta Braves', abbr: 'ATL', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/atl.png' },
  { league: 'National League', division: 'East', name: 'Miami Marlins', abbr: 'MIA', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/mia.png' },
  { league: 'National League', division: 'East', name: 'New York Mets', abbr: 'NYM', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/nym.png' },
  { league: 'National League', division: 'East', name: 'Philadelphia Phillies', abbr: 'PHI', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/phi.png' },
  { league: 'National League', division: 'East', name: 'Washington Nationals', abbr: 'WSH', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/wsh.png' },

  { league: 'National League', division: 'Central', name: 'Chicago Cubs', abbr: 'CHC', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/chc.png' },
  { league: 'National League', division: 'Central', name: 'Cincinnati Reds', abbr: 'CIN', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/cin.png' },
  { league: 'National League', division: 'Central', name: 'Milwaukee Brewers', abbr: 'MIL', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/mil.png' },
  { league: 'National League', division: 'Central', name: 'Pittsburgh Pirates', abbr: 'PIT', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/pit.png' },
  { league: 'National League', division: 'Central', name: 'St. Louis Cardinals', abbr: 'STL', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/stl.png' },

  { league: 'National League', division: 'West', name: 'Arizona Diamondbacks', abbr: 'ARI', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/ari.png' },
  { league: 'National League', division: 'West', name: 'Colorado Rockies', abbr: 'COL', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/col.png' },
  { league: 'National League', division: 'West', name: 'Los Angeles Dodgers', abbr: 'LAD', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/lad.png' },
  { league: 'National League', division: 'West', name: 'San Diego Padres', abbr: 'SD', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/sd.png' },
  { league: 'National League', division: 'West', name: 'San Francisco Giants', abbr: 'SF', logo: 'https://a.espncdn.com/i/teamlogos/mlb/500/sf.png' },
]

export default function MLBEliminationBoard() {
  const [eliminated, setEliminated] = useState({})
  const [usernames, setUsernames] = useState({})

  const editUsername = (abbr) => {
    const currentName = usernames[abbr] || ''
    const newName = window.prompt(`Assign username to ${abbr}:`, currentName)
    if (newName === null) return

    const trimmedName = newName.trim()

    setUsernames((prev) => ({
      ...prev,
      [abbr]: trimmedName,
    }))
  }

  const handleTeamClick = (abbr) => {
    if (!usernames[abbr]) {
      const newName = window.prompt(`Assign username to ${abbr}:`, '')
      if (newName === null) return

      const trimmedName = newName.trim()
      if (!trimmedName) return

      setUsernames((prev) => ({
        ...prev,
        [abbr]: trimmedName,
      }))

      setEliminated((prev) => ({
        ...prev,
        [abbr]: true,
      }))

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

  const leagues = ['American League', 'National League']

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              MLB Elimination Board
            </h1>
            <p className="text-zinc-400 mt-2">
              First click assigns a username and automatically marks the team taken. Click again to restore or re-mark.
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
          {leagues.map((league) => {
            const leagueTeams = teams.filter((team) => team.league === league)
            const divisions = [...new Set(leagueTeams.map((t) => t.division))]

            return (
              <div
                key={league}
                className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6 shadow-2xl"
              >
                <h2 className="text-3xl font-bold mb-6">{league}</h2>

                <div className="space-y-8">
                  {divisions.map((division) => {
                    const divisionTeams = leagueTeams.filter((team) => team.division === division)

                    return (
                      <div key={division}>
                        <h3 className="text-xl font-semibold text-zinc-300 mb-4">
                          {division} Division
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
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
                                  <div className="font-bold text-sm">{team.abbr}</div>
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