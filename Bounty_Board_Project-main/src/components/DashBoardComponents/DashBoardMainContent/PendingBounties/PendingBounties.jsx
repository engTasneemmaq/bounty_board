/** @format */
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Blocks,
  CircleDollarSign,
  ChevronDown,
  ImageOff,
  Clock,
  Eye,
  ChevronRight,
} from "lucide-react";
import CreativeCard from "../../../../shared/Cards/CreativeCard";
import CreativeBadge from "../../../../shared/Badge/CreativeBadge";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";

const MOCK = [
  {
    id: 1,
    title: "Bounty Name",
    min: 50000,
    max: 80000,
    milestones: 5,
    submittedAt: "2025-06-12",
    status: "Under Review",
    image: "",
  },
  {
    id: 2,
    title: "Bounty Name",
    min: 40000,
    max: 60000,
    milestones: 3,
    submittedAt: "2025-06-10",
    status: "Under Review",
    image: "",
  },
];

export default function PendingBounties() {
  const [sort, setSort] = useState("newest");

  const list = useMemo(() => {
    const arr = [...MOCK];
    return sort === "newest"
      ? arr.sort(
          (a, b) =>
            new Date(b.submittedAt).getTime() -
            new Date(a.submittedAt).getTime()
        )
      : arr.sort(
          (a, b) =>
            new Date(a.submittedAt).getTime() -
            new Date(b.submittedAt).getTime()
        );
  }, [sort]);

  return (
    <section className="w-full space-y-6">
      {/* Header with Creative Design */}
      <CreativeCard className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-3 shadow-lg">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gradient">
                Pending Bounties
              </h2>
              <p className="text-gray-600 mt-1">
                Bounties awaiting admin approval
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 font-medium">Sort by:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none border-2 border-gray-200 rounded-xl bg-white text-[15px] py-2.5 pl-4 pr-10 focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all duration-300"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
              <ChevronDown className="h-4 w-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-6 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">
              {MOCK.length} Pending Bounties
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">
              Under Admin Review
            </span>
          </div>
        </div>
      </CreativeCard>

      {/* Info Card */}
      <CreativeCard className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 rounded-lg p-2">
            <Eye className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-[15px] text-gray-700">
            These bounties are currently under admin review. You will be notified once
            they are approved or require changes.
          </p>
        </div>
      </CreativeCard>

      {/* Bounties List */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {list.map((b) => (
          <Link
            to={`/dashboard/pending-bounties/${b.id}`}
            key={b.id}
            className="block group"
          >
            <CreativeCard className="p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02] overflow-hidden">
              <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {/* Thumbnail */}
                    <div className="h-16 w-24 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 grid place-items-center text-gray-400 overflow-hidden group-hover:border-blue-400 transition-colors">
                      {b.image ? (
                        <img
                          src={b.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <ImageOff className="h-6 w-6" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-gradient transition-all">
                        {b.title}
                      </h3>
                      <CreativeBadge variant="warning" className="text-xs mt-1">
                        {b.status}
                      </CreativeBadge>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 rounded-lg p-2">
                      <CircleDollarSign className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        ${nf(b.min)}–{nf(b.max)}
                      </p>
                      <p className="text-xs text-gray-500">Budget Range</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-purple-100 rounded-lg p-2">
                      <Blocks className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{b.milestones}</p>
                      <p className="text-xs text-gray-500">Milestones</p>
                    </div>
                  </div>
                </div>

                {/* Submission Date */}
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <CalendarDays className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Submitted on {formatDate(b.submittedAt)}
                    </p>
                    <p className="text-xs text-gray-500">Waiting for approval</p>
                  </div>
                </div>

                {/* Action Button */}
                <CreativeButton
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-all duration-300"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </CreativeButton>
              </div>
            </CreativeCard>
          </Link>
        ))}
      </div>

      <footer className="text-center text-xs text-gray-400 mt-10">
        © 2025 Bounty Board – All Rights Reserved
      </footer>
    </section>
  );
}

const nf = (n) => new Intl.NumberFormat().format(n);
const formatDate = (s) =>
  new Date(s).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
