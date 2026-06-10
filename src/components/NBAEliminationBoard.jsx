import { useState } from 'react'

export default function NBAEliminationBoard() {
  const teams = [
    {
      conference: 'Eastern',
      division: 'Atlantic',
      name: 'Boston Celtics',
      abbr: 'BOS',
      logo: 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Atlantic',
      name: 'Brooklyn Nets',
      abbr: 'BKN',
      logo: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Atlantic',
      name: 'New York Knicks',
      abbr: 'NYK',
      logo: 'https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Atlantic',
      name: 'Philadelphia 76ers',
      abbr: 'PHI',
      logo: 'https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Atlantic',
      name: 'Toronto Raptors',
      abbr: 'TOR',
      logo: 'https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Central',
      name: 'Chicago Bulls',
      abbr: 'CHI',
      logo: 'https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Central',
      name: 'Cleveland Cavaliers',
      abbr: 'CLE',
      logo: 'https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Central',
      name: 'Detroit Pistons',
      abbr: 'DET',
      logo: 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Central',
      name: 'Indiana Pacers',
      abbr: 'IND',
      logo: 'https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Central',
      name: 'Milwaukee Bucks',
      abbr: 'MIL',
      logo: 'https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Southeast',
      name: 'Atlanta Hawks',
      abbr: 'ATL',
      logo: 'https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Southeast',
      name: 'Charlotte Hornets',
      abbr: 'CHA',
      logo: 'https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Southeast',
      name: 'Miami Heat',
      abbr: 'MIA',
      logo: 'https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Southeast',
      name: 'Orlando Magic',
      abbr: 'ORL',
      logo: 'https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg',
    },
    {
      conference: 'Eastern',
      division: 'Southeast',
      name: 'Washington Wizards',
      abbr: 'WAS',
      logo: 'https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Northwest',
      name: 'Denver Nuggets',
      abbr: 'DEN',
      logo: 'https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Northwest',
      name: 'Minnesota Timberwolves',
      abbr: 'MIN',
      logo: 'https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Northwest',
      name: 'Oklahoma City Thunder',
      abbr: 'OKC',
      logo: 'https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Northwest',
      name: 'Portland Trail Blazers',
      abbr: 'POR',
      logo: 'https://cdn.nba.com/logos/nba/1610612757/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Northwest',
      name: 'Utah Jazz',
      abbr: 'UTA',
      logo: 'https://cdn.nba.com/logos/nba/1610612762/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Pacific',
      name: 'Golden State Warriors',
      abbr: 'GSW',
      logo: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Pacific',
      name: 'LA Clippers',
      abbr: 'LAC',
      logo: 'https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Pacific',
      name: 'Los Angeles Lakers',
      abbr: 'LAL',
      logo: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Pacific',
      name: 'Phoenix Suns',
      abbr: 'PHX',
      logo: 'https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Pacific',
      name: 'Sacramento Kings',
      abbr: 'SAC',
      logo: 'https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Southwest',
      name: 'Dallas Mavericks',
      abbr: 'DAL',
      logo: 'https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Southwest',
      name: 'Houston Rockets',
      abbr: 'HOU',
      logo: 'https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Southwest',
      name: 'Memphis Grizzlies',
      abbr: 'MEM',
      logo: 'https://cdn.nba.com/logos/nba/1610612763/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Southwest',
      name: 'New Orleans Pelicans',
      abbr: 'NOP',
      logo: 'https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg',
    },
    {
      conference: 'Western',
      division: 'Southwest',
      name: 'San Antonio Spurs',
      abbr: 'SAS',
      logo: 'https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg',
    },
  ]

  const [eliminated, setEliminated] = useState({})
  const [usernames, setUsernames] = useState({})

  const editUsername = (abbr) => {
    const currentName = usernames[abbr] || ''
    const newName = window.prompt(`Assign username to ${abbr}:`, currentName)

    if (newName === null) return

    const cleanName = newName.trim()

    setUsernames((prev) => ({
      ...prev,
      [abbr]: cleanName,
    }))

    setEliminated((prev) => ({
      ...prev,
      [abbr]: cleanName.length > 0,
    }))
  }

  const handleTeamClick = (abbr) => {
    const username = usernames[abbr]

    if (!username) {
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

  const conferences = ['Eastern', 'Western']

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              NBA Elimination Board
            </h1>
            <p className="text-zinc-400 mt-2">
              First click assigns a username and automatically marks the team.
              Click again to restore or eliminate.
            </p>
          </div>

          <button
            type="button"
            onClick={resetBoard}
            className="px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform"
          >
            Reset Board
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {conferences.map((conference) => {
            const conferenceTeams = teams.filter(
              (team) => team.conference === conference
            )

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
                    const divisionTeams = conferenceTeams.filter(
                      (team) => team.division === division
                    )

                    return (
                      <div key={division}>
                        <h3 className="text-xl font-semibold text-zinc-300 mb-4">
                          {division} Division
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                          {divisionTeams.map((team) => {
                            const username = usernames[team.abbr] || ''
                            const isEliminated = Boolean(eliminated[team.abbr])

                            return (
                              <div
                                key={team.abbr}
                                role="button"
                                tabIndex={0}
                                onClick={() => handleTeamClick(team.abbr)}
                                onKeyDown={(event) => {
                                  if (event.key === 'Enter' || event.key === ' ') {
                                    handleTeamClick(team.abbr)
                                  }
                                }}
                                className="relative group bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-2xl p-4 flex flex-col items-center justify-center transition-all duration-200 hover:scale-105 overflow-hidden min-h-44 cursor-pointer"
                              >
                                {username && (
                                  <button
                                    type="button"
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
                                    isEliminated
                                      ? 'opacity-40 scale-95'
                                      : 'opacity-100 scale-100'
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

                                {username && (
                                  <div className="absolute bottom-2 left-2 right-2 z-50 rounded-xl bg-black/90 px-2 py-1.5 text-center text-xs font-black text-white shadow-2xl ring-1 ring-white/30 backdrop-blur">
                                    <span className="block truncate">
                                      {username}
                                    </span>
                                  </div>
                                )}
                              </div>
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