/** @format */
import React, { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  CircleDollarSign,
  CalendarDays,
  UserRound,
  Images,
  SortDesc,
  Award,
} from "lucide-react";
import CreativeCard from "../../../../shared/Cards/CreativeCard";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";
import CreativeBadge from "../../../../shared/Badge/CreativeBadge";
import { showMessage } from "../../../../utils/toast";

const MOCK = [
  {
    id: 101,
    image: "",
    name: "Bounty Name",
    milestone: "Milestone Name",
    role: "Machine Learning Engineer",
    earned: 1800,
    completedAt: "2024-01-18",
    status: "Completed",
  },
  {
    id: 102,
    image: "",
    name: "Bounty Name",
    milestone: "Milestone Name",
    role: "Machine Learning Engineer",
    earned: 1800,
    completedAt: "2024-01-18",
    status: "Completed",
  },
  {
    id: 103,
    image: "",
    name: "Bounty Name",
    milestone: "Milestone Name",
    role: "Machine Learning Engineer",
    earned: 1800,
    completedAt: "2024-01-18",
    status: "Completed",
  },
];

export default function CompletedWork() {
  const [sort, setSort] = useState("recent");
  
  // Store completed bounty IDs and data in localStorage
  useEffect(() => {
    const completedBountyIds = MOCK.map(b => ({ id: b.id, status: 'Completed' }));
    localStorage.setItem('completedBounties', JSON.stringify(completedBountyIds));
    
    // Also store the bounty data in bountiesCardData for the overview page
    const storedBounties = JSON.parse(localStorage.getItem('bountiesCardData') || '[]');
    MOCK.forEach(bounty => {
      const exists = storedBounties.some(b => String(b.id) === String(bounty.id));
      if (!exists) {
        storedBounties.push({
          id: bounty.id,
          name: bounty.name,
          description: 'AI-Powered Analytics Platform milestone',
          status: 'Completed',
          milestones: 1,
          milestonesDone: 1,
          contributors: [],
          languages: ['Python', 'TensorFlow'],
          skills: ['Machine Learning', 'Deep Learning'],
          milestoneDetails: [
            {
              id: bounty.id,
              name: bounty.milestone,
              description: 'Successfully implemented the milestone with high accuracy.',
              status: 'completed',
              assignedTo: 'User'
            }
          ]
        });
      }
    });
    localStorage.setItem('bountiesCardData', JSON.stringify(storedBounties));
  }, []);

  const stats = useMemo(() => {
    const total = MOCK.reduce((s, b) => s + (b.earned || 0), 0);
    return { count: MOCK.length, total };
  }, []);

  const sorted = useMemo(() => {
    const arr = [...MOCK];
    switch (sort) {
      case "amountHigh":
        return arr.sort((a, b) => b.earned - a.earned);
      case "amountLow":
        return arr.sort((a, b) => a.earned - b.earned);
      case "oldest":
        return arr.sort(
          (a, b) =>
            new Date(a.completedAt).getTime() -
            new Date(b.completedAt).getTime()
        );
      default:
        return arr.sort(
          (a, b) =>
            new Date(b.completedAt).getTime() -
            new Date(a.completedAt).getTime()
        );
    }
  }, [sort]);

  return (
    <section className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Award className="w-8 h-8 text-green-600" />
          <div>
            <h2 className="text-3xl font-bold text-gradient">Completed Work</h2>
            <p className="text-sm text-gray-600 mt-1">
              Your successfully completed bounties and achievements.
            </p>
          </div>
        </div>
        <SortBy value={sort} onChange={setSort} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:max-w-[520px] gap-3 mt-4">
        <StatCard
          label="Completed Bounties"
          value={stats.count}
          icon={<CheckCircle2 className="h-5 w-5" />}
          accentClass="text-green-600 bg-green-50"
        />
        <StatCard
          label="Earned"
          value={`$${nf(stats.total)}`}
          icon={<CircleDollarSign className="h-5 w-5" />}
          accentClass="text-blue-600 bg-blue-50"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
        {sorted.map((b) => (
          <BountyCard key={b.id} bounty={b} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ label, value, icon, accentClass }) {
  return (
    <CreativeCard className="p-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600 font-medium">{label}</p>
        <div className="mt-2 text-3xl font-bold text-gradient">{value}</div>
      </div>
      <div className={`h-12 w-12 rounded-xl grid place-items-center ${accentClass} shadow-md`}>
        {icon}
      </div>
    </CreativeCard>
  );
}

function SortBy({ value, onChange }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-sm text-gray-600 font-medium">Sort by</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none border-2 border-gray-200 rounded-xl bg-white text-[15px] py-2.5 pl-4 pr-10 focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all duration-300"
          aria-label="Sort completed work"
        >
          <option value="recent">Recent</option>
          <option value="oldest">Oldest</option>
          <option value="amountHigh">Amount: High → Low</option>
          <option value="amountLow">Amount: Low → High</option>
        </select>
        <SortDesc className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
}

function BountyCard({ bounty }) {
  const {
    id,
    image,
    name,
    milestone,
    role,
    earned,
    completedAt,
    status = "Completed",
  } = bounty;

  return (
    <CreativeCard className="overflow-hidden group">
      {/* Image */}
      <div className="relative h-44 w-full bg-gradient-to-br from-gray-50 to-gray-100">
        {image ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover select-none group-hover:scale-105 transition-transform duration-300"
            draggable="false"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-300">
            <Images className="h-8 w-8 mr-2" />
            <span className="text-sm font-medium">No Image</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <CreativeBadge variant="success">{status}</CreativeBadge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gradient">{name}</h3>
        <p className="text-gray-600 text-sm mt-1 flex items-center gap-1">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          Milestone: <span className="font-medium text-gray-900">{milestone}</span>
        </p>

        <div className="mt-4 space-y-2 text-sm">
          <Row
            icon={<UserRound className="h-4 w-4 text-purple-600" />}
            label={
              <>
                Your Role: <span className="font-semibold text-gray-900">{role}</span>
              </>
            }
          />
          <Row
            icon={<CircleDollarSign className="h-4 w-4 text-green-600" />}
            label={
              <>
                Earned:{" "}
                <span className="text-green-600 font-bold">
                  ${nf(earned)}
                </span>
              </>
            }
          />
          <Row
            icon={<CalendarDays className="h-4 w-4 text-blue-600" />}
            label={
              <>
                Completed:{" "}
                <span className="text-gray-900 font-medium">{formatDate(completedAt)}</span>
              </>
            }
          />
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2">
          <Link 
            to={`/dashboard/bounty-name-overview/${id}`} 
            className="flex-1"
            onClick={() => showMessage.info(`Opening bounty details for ${name}... 🔗`)}
          >
            <CreativeButton
              variant="outline"
              size="sm"
              className="w-full h-[40px]"
            >
              View Details
            </CreativeButton>
          </Link>

          <Link to={`/dashboard/completed/${id}`} className="flex-1">
            <CreativeButton
              variant="primary"
              size="sm"
              className="w-full h-[40px]"
            >
              Go to Milestone
            </CreativeButton>
          </Link>
        </div>
      </div>
    </CreativeCard>
  );
}

function Row({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-gray-600">
      <span className="shrink-0">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

const nf = (n) => new Intl.NumberFormat().format(n);
const formatDate = (s) =>
  new Date(s).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });


