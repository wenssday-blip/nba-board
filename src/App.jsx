import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

const NFL_TEAMS = [
  { city: "Arizona", name: "Cardinals", abbr: "ARI", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png", revealVideo: "/reveals/ari.mp4" },
  { city: "Atlanta", name: "Falcons", abbr: "ATL", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png", revealVideo: "/reveals/atl.mp4" },
  { city: "Baltimore", name: "Ravens", abbr: "BAL", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png", revealVideo: "/reveals/bal.mp4" },
  { city: "Buffalo", name: "Bills", abbr: "BUF", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png", revealVideo: "/reveals/buf.mp4" },
  { city: "Carolina", name: "Panthers", abbr: "CAR", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/car.png", revealVideo: "/reveals/car.mp4" },
  { city: "Chicago", name: "Bears", abbr: "CHI", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png", revealVideo: "/reveals/chi.mp4" },
  { city: "Cincinnati", name: "Bengals", abbr: "CIN", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png", revealVideo: "/reveals/cin.mp4" },
  { city: "Cleveland", name: "Browns", abbr: "CLE", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png", revealVideo: "/reveals/cle.mp4" },
  { city: "Dallas", name: "Cowboys", abbr: "DAL", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png", revealVideo: "/reveals/dal.mp4" },
  { city: "Denver", name: "Broncos", abbr: "DEN", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/den.png", revealVideo: "/reveals/den.mp4" },
  { city: "Detroit", name: "Lions", abbr: "DET", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/det.png", revealVideo: "/reveals/det.mp4" },
  { city: "Green Bay", name: "Packers", abbr: "GB", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png", revealVideo: "/reveals/gb.mp4" },
  { city: "Houston", name: "Texans", abbr: "HOU", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png", revealVideo: "/reveals/hou.mp4" },
  { city: "Indianapolis", name: "Colts", abbr: "IND", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png", revealVideo: "/reveals/ind.mp4" },
  { city: "Jacksonville", name: "Jaguars", abbr: "JAX", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png", revealVideo: "/reveals/jax.mp4" },
  { city: "Kansas City", name: "Chiefs", abbr: "KC", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png", revealVideo: "/reveals/kc.mp4" },
  { city: "Las Vegas", name: "Raiders", abbr: "LV", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png", revealVideo: "/reveals/lv.mp4" },
  { city: "LA", name: "Chargers", abbr: "LAC", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png", revealVideo: "/reveals/lac.mp4" },
  { city: "LA", name: "Rams", abbr: "LAR", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png", revealVideo: "/reveals/lar.mp4" },
  { city: "Miami", name: "Dolphins", abbr: "MIA", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png", revealVideo: "/reveals/mia.mp4" },
  { city: "Minnesota", name: "Vikings", abbr: "MIN", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/min.png", revealVideo: "/reveals/min.mp4" },
  { city: "New England", name: "Patriots", abbr: "NE", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png", revealVideo: "/reveals/ne.mp4" },
  { city: "New Orleans", name: "Saints", abbr: "NO", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/no.png", revealVideo: "/reveals/no.mp4" },
  { city: "NY", name: "Giants", abbr: "NYG", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png", revealVideo: "/reveals/nyg.mp4" },
  { city: "NY", name: "Jets", abbr: "NYJ", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png", revealVideo: "/reveals/nyj.mp4" },
  { city: "Philadelphia", name: "Eagles", abbr: "PHI", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png", revealVideo: "/reveals/phi.mp4" },
  { city: "Pittsburgh", name: "Steelers", abbr: "PIT", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png", revealVideo: "/reveals/pit.mp4" },
  { city: "San Francisco", name: "49ers", abbr: "SF", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png", revealVideo: "/reveals/sf.mp4" },
  { city: "Seattle", name: "Seahawks", abbr: "SEA", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png", revealVideo: "/reveals/sea.mp4" },
  { city: "Tampa Bay", name: "Buccaneers", abbr: "TB", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png", revealVideo: "/reveals/tb.mp4" },
  { city: "Tennessee", name: "Titans", abbr: "TEN", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png", revealVideo: "/reveals/ten.mp4" },
  { city: "Washington", name: "Commanders", abbr: "WSH", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png", revealVideo: "/reveals/wsh.mp4" },
];

export default function App() {
  const [buyerName, setBuyerName] = useState("");
  const [assignments, setAssignments] = useState({});
  const [revealingTeam, setRevealingTeam] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const isObsMode = new URLSearchParams(window.location.search).get("obs") === "1";

  useEffect(() => {
    let channel;

    async function loadOverlayState() {
      const { data, error } = await supabase
        .from("overlay_state")
        .select("assignments, revealing_team")
        .eq("id", "main")
        .single();

      if (error) {
        console.error("Error loading overlay state:", error);
        setIsReady(true);
        return;
      }

      setAssignments(data?.assignments || {});
      setRevealingTeam(data?.revealing_team || null);
      setIsReady(true);
    }

    loadOverlayState();

    channel = supabase
      .channel("overlay-state-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "overlay_state",
          filter: "id=eq.main",
        },
        (payload) => {
          setAssignments(payload.new?.assignments || {});
          setRevealingTeam(payload.new?.revealing_team || null);
        }
      )
      .subscribe();

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, []);

  async function saveOverlayState(nextAssignments, nextRevealingTeam = revealingTeam) {
    const { error } = await supabase.from("overlay_state").upsert(
      {
        id: "main",
        assignments: nextAssignments,
        revealing_team: nextRevealingTeam,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" }
    );

    if (error) {
      console.error("Error saving overlay state:", error);
    }
  }

  function handleTeamClick(team) {
    const nextAssignments = { ...assignments };

    if (buyerName.trim()) {
      nextAssignments[team.abbr] = {
        buyer: buyerName.trim(),
        claimed: true,
      };
    } else {
      nextAssignments[team.abbr] = {
        ...nextAssignments[team.abbr],
        claimed: !nextAssignments[team.abbr]?.claimed,
      };
    }

    setAssignments(nextAssignments);
    saveOverlayState(nextAssignments);
  }

  function clearTeam(team) {
    const nextAssignments = { ...assignments };
    delete nextAssignments[team.abbr];

    setAssignments(nextAssignments);
    saveOverlayState(nextAssignments);
  }

  function clearBoard() {
    const confirmed = window.confirm("Clear the whole board?");
    if (!confirmed) return;

    setAssignments({});
    setRevealingTeam(null);
    saveOverlayState({}, null);
  }

  function revealTeam(team) {
    setRevealingTeam(team);
    saveOverlayState(assignments, team);
  }

  function closeReveal() {
    setRevealingTeam(null);
    saveOverlayState(assignments, null);
  }

  if (!isReady) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        Loading overlay...
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-screen overflow-hidden bg-transparent text-white">
      {!isObsMode && (
        <>
          <div className="absolute inset-0 -z-30 bg-black" />
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black via-blue-950 to-black" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.38),transparent_58%)]" />
        </>
      )}

      {isObsMode && revealingTeam && (
        <RevealScreen team={revealingTeam} onClose={closeReveal} />
      )}

      {!isObsMode && revealingTeam && (
        <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-xl border border-blue-300/70 bg-black/90 px-4 py-2 text-sm font-black uppercase tracking-wide text-white shadow-[0_0_18px_rgba(37,99,235,0.8)]">
          Reveal sent to OBS: {revealingTeam.city} {revealingTeam.name}
        </div>
      )}

      <section className="relative z-10 flex h-screen flex-col p-3">
        {!isObsMode && (
          <header className="mb-2 flex justify-end">
            <div className="flex items-center gap-2 rounded-2xl border border-blue-400/60 bg-black/80 p-2 shadow-[0_0_20px_rgba(37,99,235,0.45)]">
              <input
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                placeholder="Buyer username"
                className="w-56 rounded-xl border border-blue-400/60 bg-black px-4 py-2 text-white outline-none placeholder:text-white/40"
              />

              <button
                onClick={() => setBuyerName("")}
                className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-black uppercase hover:bg-blue-600"
              >
                Clear Name
              </button>

              <button
                onClick={clearBoard}
                className="rounded-xl bg-red-700 px-4 py-2 text-sm font-black uppercase hover:bg-red-600"
              >
                Clear Board
              </button>
            </div>
          </header>
        )}

        <div className="grid min-h-0 flex-1 grid-rows-[1fr_4fr] gap-0 overflow-hidden">
          <div className="grid min-h-0 grid-cols-8 grid-rows-4 gap-2 pb-2">
            {NFL_TEAMS.map((team) => (
              <TeamCard
                key={team.abbr}
                team={team}
                assignment={assignments[team.abbr]}
                isObsMode={isObsMode}
                onClick={() => handleTeamClick(team)}
                onClear={() => clearTeam(team)}
                onReveal={() => revealTeam(team)}
              />
            ))}
          </div>

          <div className="relative min-h-0 overflow-hidden bg-transparent">
            {!isObsMode && (
              <div className="flex h-full items-center justify-center text-center">
                <div>
                  <div className="text-6xl font-black uppercase tracking-widest text-white/35">
                    Camera Window
                  </div>
                  <div className="mt-3 text-base font-bold uppercase tracking-[0.3em] text-blue-200/60">
                    Put camera source behind this browser overlay in OBS
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function TeamCard({ team, assignment, isObsMode, onClick, onClear, onReveal }) {
  const claimed = assignment?.claimed;
  const buyer = assignment?.buyer;

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group relative flex h-full min-h-0 flex-col items-center justify-center overflow-hidden rounded-lg border px-1 py-1 transition",
        "bg-black/80 shadow-[0_0_14px_rgba(37,99,235,0.35)]",
        claimed
          ? "border-red-500 shadow-[0_0_18px_rgba(239,68,68,0.65)]"
          : "border-blue-400/70 hover:scale-[1.02] hover:border-white",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/10" />

      <img
        src={team.logo}
        alt={`${team.city} ${team.name}`}
        className={[
          "relative z-10 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]",
          buyer ? "h-6 w-6" : "h-7 w-7",
        ].join(" ")}
      />

      <div className="relative z-20 mt-0.5 max-w-full text-center leading-none">
        <div className="truncate text-[6px] font-black uppercase tracking-wide text-white">
          {team.city}
        </div>
        <div className="mt-0.5 truncate text-[7px] font-black uppercase tracking-wide text-blue-200">
          {team.name}
        </div>
      </div>

      {claimed && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <div className="-rotate-12 text-5xl font-black leading-none text-red-600/80 drop-shadow-[0_0_8px_rgba(0,0,0,1)]">
            X
          </div>
        </div>
      )}

      {buyer && (
        <div className="absolute bottom-0 left-0 right-0 z-50 truncate border-t border-yellow-300/40 bg-black/95 px-1 py-0.5 text-center text-[9px] font-black uppercase leading-none text-yellow-300 shadow-[0_-2px_10px_rgba(0,0,0,0.9)]">
          {buyer}
        </div>
      )}

      {!isObsMode && (
        <div className="absolute right-1 top-1 z-50 flex gap-1">
          <span
            onClick={(e) => {
              e.stopPropagation();
              onReveal();
            }}
            className="rounded-md bg-blue-700 px-1 py-0.5 text-[7px] font-black uppercase text-white hover:bg-blue-600"
          >
            Reveal
          </span>

          <span
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
            className="rounded-md bg-red-700 px-1 py-0.5 text-[7px] font-black uppercase text-white hover:bg-red-600"
          >
            Clear
          </span>
        </div>
      )}
    </button>
  );
}

function RevealScreen({ team, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        key={`${team?.abbr}-${team?.revealVideo}`}
        src={team?.revealVideo}
        autoPlay
        playsInline
        preload="auto"
        className="h-full w-full bg-black object-contain"
        onCanPlay={(event) => {
          event.currentTarget.play().catch((error) => {
            console.error("Reveal video autoplay failed:", error);
          });
        }}
        onEnded={onClose}
        onError={(event) => {
          console.error("Reveal video failed to load:", team?.revealVideo, event);
        }}
      />
    </div>
  );
}