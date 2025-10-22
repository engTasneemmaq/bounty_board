/** @format */
import { X, Users, User, ChevronDown, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ApplyAsModal({ open, onClose, onNext }) {
  const [selected, setSelected] = useState(null); // 'team' or 'individual'
  const [selectedTeam, setSelectedTeam] = useState("");

  // Mock teams data
  const teams = [
    { id: "1", name: "Team 1" },
    { id: "2", name: "Team 2" },
    { id: "3", name: "Team 3" },
  ];

  const handleNext = () => {
    if (selected === "individual") {
      onNext({ type: "individual" });
    } else if (selected === "team" && selectedTeam) {
      onNext({ type: "team", teamId: selectedTeam });
    }
  };

  const isNextDisabled = !selected || (selected === "team" && !selectedTeam);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="absolute left-1/2 top-16 -translate-x-1/2 w-[720px] max-w-[94vw] rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between p-4">
          <h3 className="text-[22px] font-semibold text-[#2A64D6]">Apply as</h3>
          <button onClick={onClose} className="h-8 w-8 rounded-full bg-[#E7F0FA] grid place-items-center">
            <X size={16} className="text-[#2A64D6]" />
          </button>
        </div>

        <div className="px-5 pb-5">
          <div className="relative overflow-hidden rounded-xl bg-[#EFF5FF]">
            <div className="absolute -top-10 -left-10 h-56 w-80 rounded-full bg-[#DCE8FF]" />
            <div className="grid grid-cols-2 gap-6 p-8 relative">
              <Card 
                label="Team" 
                icon={<Users size={40} />}
                selected={selected === "team"} 
                onClick={() => setSelected("team")}
                showDropdown={selected === "team"}
                teams={teams}
                selectedTeam={selectedTeam}
                onTeamChange={setSelectedTeam}
              />
              <Card 
                label="Individual" 
                icon={<User size={40} />}
                selected={selected === "individual"} 
                onClick={() => setSelected("individual")}
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button onClick={onClose} className="px-4 h-9 rounded-md border text-sm">Cancel</button>
            <button 
              onClick={handleNext} 
              disabled={isNextDisabled}
              className={`px-5 h-9 rounded-md text-white text-sm font-semibold flex items-center gap-2 ${
                isNextDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1667D9] hover:bg-[#0d4fb5]'
              }`}
            >
              Next <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ label, icon, selected, onClick, showDropdown, teams, selectedTeam, onTeamChange }) {
  return (
    <div
      onClick={onClick}
      className={`h-[160px] rounded-xl border bg-white flex flex-col items-center justify-center cursor-pointer shadow-sm transition-all relative ${
        selected ? "border-[#2A64D6] ring-2 ring-[#AFC8FF]" : "border-[#D7E4F7] hover:border-[#9CB7E6]"
      }`}
    >
      {/* Checkmark badge */}
      {selected && (
        <div className="absolute top-2 right-2 h-6 w-6 rounded-full bg-[#2A64D6] grid place-items-center">
          <CheckCircle size={16} className="text-white" />
        </div>
      )}

      <div className="flex flex-col items-center gap-2">
        <div className={selected ? "text-[#2A64D6]" : "text-[#9CB7E6]"}>
          {icon}
        </div>
        <div className="text-sm font-medium">{label}</div>
      </div>

      {/* Team Dropdown */}
      {showDropdown && teams && (
        <div className="w-[calc(100%-32px)] mt-4" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <select
              value={selectedTeam}
              onChange={(e) => onTeamChange(e.target.value)}
              className="w-full h-10 px-3 pr-8 border border-[#D7E4F7] rounded-md text-sm appearance-none bg-white focus:outline-none focus:border-[#2A64D6] focus:ring-1 focus:ring-[#2A64D6]"
            >
              <option value="">Select Team</option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      )}
    </div>
  );
}
