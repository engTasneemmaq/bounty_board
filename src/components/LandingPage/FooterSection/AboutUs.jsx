/** @format */
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Users, Target, Rocket, ShieldCheck, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Top bar */}
      <div className="flex items-center gap-3 bg-[#F5F7FA] px-5 md:px-8 py-3 border-b">
        <button onClick={() => navigate(-1)} className="text-[#0A60E0]">
          <ArrowLeftOutlined />
        </button>
        <h2 className="font-medium text-sm md:text-base">About Us</h2>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-10">
        {/* Hero */}
        <section className="rounded-2xl border border-[#CEE0F5B2] bg-white overflow-hidden">
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8">
            <div>
              <div className="inline-flex items-center rounded-full bg-[#E7F0FA] text-[#0A60E0] px-3 py-1 text-xs font-semibold">
                Bounty Board
              </div>
              <h1 className="mt-3 text-2xl md:text-3xl font-semibold">
                We connect top builders with meaningful bounties.
              </h1>
              <p className="mt-3 text-[15px] leading-7 text-gray-700 max-w-[640px]">
                Bounty Board is a curated marketplace where companies post
                well-scoped bounties and engineers ship results fast.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Stat label="Active Bounties" value="320+" />
                <Stat label="Engineers" value="12k+" />
                <Stat label="Avg. Payout" value="$4.3k" />
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#CEE0F5B2]">
              <img
                className="w-full h-full object-cover"
                alt="team"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop"
              />
            </div>
          </div>

          <div className="px-6 md:px-8 py-4 border-t bg-[#F9FBFF]">
            <p className="text-xs text-gray-600">
              Built with care by a distributed team across 🇯🇴 🇪🇬 🇵🇱 🇺🇸
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-start gap-3">
              <Target className="text-[#0A60E0]" />
              <div>
                <h3 className="font-semibold">Our Mission</h3>
                <p className="mt-2 text-[14px] leading-7 text-gray-700">
                  Enable anyone to work on impactful problems and get paid
                  fairly for shipping quality software — no meetings, just
                  outcomes.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3">
              <Rocket className="text-[#0A60E0]" />
              <div>
                <h3 className="font-semibold">Our Vision</h3>
                <p className="mt-2 text-[14px] leading-7 text-gray-700">
                  A global network where companies solve R&amp;D tasks in days
                  not months, and developers pick bounties that match their
                  skills & passion.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Values */}
        <section className="mt-10">
          <h3 className="font-semibold mb-4">Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Value
              icon={<ShieldCheck className="h-5 w-5 text-[#0A60E0]" />}
              title="Trust & Safety"
              text="Transparent scopes, milestone reviews, and secure payouts."
            />
            <Value
              icon={<Star className="h-5 w-5 text-[#0A60E0]" />}
              title="Quality First"
              text="Clear acceptance criteria and technical standards."
            />
            <Value
              icon={<Heart className="h-5 w-5 text-[#0A60E0]" />}
              title="Respect"
              text="We treat builders and companies as long-term partners."
            />
          </div>
        </section>

        {/* How it works */}
        <section className="mt-10">
          <h3 className="font-semibold mb-4">How It Works</h3>
          <div className="rounded-2xl border border-[#CEE0F5B2] p-5 md:p-6">
            <ol className="space-y-5 text-[14px] leading-7 text-gray-700">
              <li>
                <b>1. Post a Bounty:</b> Company defines scope, budget, and
                milestones.
              </li>
              <li>
                <b>2. Apply:</b> Engineers apply with relevant experience and
                timeline.
              </li>
              <li>
                <b>3. Build:</b> Work is delivered in milestones with quick
                feedback loops.
              </li>
              <li>
                <b>4. Review & Payout:</b> On acceptance, funds are released
                instantly.
              </li>
            </ol>
          </div>
        </section>

        {/* Team snapshot */}
        <section className="mt-10">
          <h3 className="font-semibold">Core Team</h3>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="rounded-xl border border-[#CEE0F5B2] p-4 flex items-center gap-3"
              >
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-xs text-gray-500">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10">
          <div className="rounded-2xl border border-[#CEE0F5B2] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#F9FBFF]">
            <div>
              <h3 className="font-semibold text-lg">
                Ready to post a bounty or start building?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Join thousands of engineers and teams shipping together.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/dashboard/post-bounty")}
                className="inline-flex items-center rounded-md bg-[#0A60E0] px-5 py-2 text-sm font-semibold text-white hover:bg-[#084db8]"
              >
                Post a Bounty
              </button>
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center rounded-md border px-5 py-2 text-sm font-semibold hover:bg-gray-50"
              >
                Explore Bounties
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-[#CEE0F5B2] p-6 bg-white">
      {children}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-[#CEE0F5B2] px-4 py-3">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function Value({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-[#CEE0F5B2] p-5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 grid place-items-center rounded-lg bg-[#E7F0FA]">
          {icon}
        </div>
        <div className="font-semibold">{title}</div>
      </div>
      <p className="mt-2 text-[14px] leading-7 text-gray-700">{text}</p>
    </div>
  );
}

const TEAM = [
  {
    name: "Layla Hamdan",
    role: "Product & Ops",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Omar Khalil",
    role: "Engineering",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop",
  },
  {
    name: "Maya Saad",
    role: "Design",
    avatar:
      "https://images.unsplash.com/photo-1544005316-04ce1f0df100?q=80&w=256&auto=format&fit=crop",
  },
];


