/** @format */
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  CalendarDays,
  Clock3,
  Layers as Stack,
  DollarSign,
  Users,
  Globe,
  Download,
} from "lucide-react";
import { useAuth } from "../../../../context/AuthContext";
import BountyDetailsHeader from "./BountyDetailsHeader";
import Footer from "../../FooterSection/Footer";

export default function BountyDetails() {
  const navigate = useNavigate();
  const { bountyId: paramId } = useParams();
  const location = useLocation();
  const { state } = location;
  const { user } = useAuth();

  const id = state?.id ?? paramId ?? "123";

  const [isOwner, setIsOwner] = useState(false); // Track if current user is bounty owner

  // Check if current user is the owner of this bounty
  useEffect(() => {
    // Wait for user to be loaded
    if (!user || !user.id) {
      console.log("⏳ User not loaded yet, waiting...");
      return;
    }

    const postedBounties = JSON.parse(localStorage.getItem("postedBounties") || "[]");
    console.log("📦 All Posted Bounties:", postedBounties);
    
    // Convert id to string for comparison
    const currentBounty = postedBounties.find(b => String(b.id) === String(id));
    
    console.log("=== Checking Bounty Ownership ===");
    console.log("Current Bounty ID:", id);
    console.log("Found Bounty:", currentBounty);
    console.log("Current User:", user);
    console.log("Bounty UserId:", currentBounty?.userId);
    console.log("User Id:", user?.id);
    console.log("Comparison:", String(currentBounty?.userId), "===", String(user?.id));
    
    if (currentBounty && String(currentBounty.userId) === String(user.id)) {
      console.log("✅ User IS the owner!");
      setIsOwner(true);
    } else {
      console.log("❌ User is NOT the owner");
      setIsOwner(false);
    }
  }, [id, user]);


  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Custom Header with Logo, Search, Sign In, Sign Up */}
      <BountyDetailsHeader />

      {/* Breadcrumb */}
      <div className="flex items-center gap-3 bg-[#F5F7FA] px-5 md:px-8 py-3 border-b">
        <button onClick={() => navigate(-1)} className="text-[#2A64D6]">
          <ArrowLeftOutlined />
        </button>
        <h2 className="font-medium text-sm md:text-base">Bounty Details</h2>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6 md:py-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        <div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1520975922284-4cfa88f0ff5b?q=80&w=1600&auto=format&fit=crop"
              className="w-full h-[320px] md:h-[380px] object-cover rounded-xl border border-gray-200"
              alt=""
            />
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-xl md:text-2xl font-semibold">
                Convert Yolo World model to TFLite
              </h1>
              {isOwner && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Your Bounty
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-5 mt-3 text-sm">
              <a
                className="flex items-center gap-2 text-[#2A64D6]"
                href="https://github.com/microsoft/onnxruntime"
              >
                <Globe size={16} />
                https://github.com/microsoft/onnxruntime
              </a>
              <span className="flex items-center gap-2 text-gray-600">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2 6l10 7L22 6v10H2z" />
                </svg>
                susan@gmail.com
              </span>
            </div>
          </div>

          <section className="mt-8 space-y-8 text-[13.5px] leading-6 text-gray-700">
            <Block title="Project Description">
              We are currently working on integrating libonnxruntime into our
              Unreal Engine 5.4 project targeting iOS. You can find the ONNX
              Runtime library here:
              <br />
              <a
                className="text-[#2A64D6]"
                href="https://github.com/microsoft/onnxruntime"
              >
                https://github.com/microsoft/onnxruntime
              </a>
              <br />
              The integration appears to work correctly when running development
              builds, however…
            </Block>

            <Block title="Project Requirements">
              <ul className="list-disc pl-5 space-y-1">
                <li>Unreal Engine plugin development for iOS</li>
                <li>ONNX Runtime or native libraries integration</li>
                <li>iOS build pipelines and crash debugging</li>
              </ul>
            </Block>

            <Block title="Technical Details">
              This bounty involves integrating the libonnxruntime library into
              an Unreal Engine 5.4 project targeting iOS…
            </Block>

            <Block title="Languages & Skills">
              <h4 className="font-semibold mt-3 mb-2">Languages</h4>
              <Tags
                items={["Python", "C++", "Objective-C", "Swift"]}
              />
              <h4 className="font-semibold mt-6 mb-2">Skills & Technologies</h4>
              <Tags
                items={[
                  "Crash Debugging",
                  "Xcode",
                  "Model Conversion",
                  "TFLite",
                  "Static Libraries",
                  "Ultralytics",
                  "ONNX Runtime",
                  "Swift",
                ]}
              />
            </Block>
          </section>
        </div>

        <aside className="space-y-6">
          {/* Show owner info if user is the owner */}
          {isOwner && (
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-900">Your Bounty</p>
                  <p className="text-xs text-blue-700">You are the owner of this bounty</p>
                </div>
              </div>
            </div>
          )}

          {/* Bounty expiry info only */}
          <div className="flex flex-col items-end">
            <p className="text-xs text-gray-600">
              Bounty expire in:{" "}
              <span className="text-[#E64545] font-medium">June 30, 2025</span>
            </p>
          </div>

          {/* Overview */}
          <Card title="Bounty Overview">
            <div className="grid grid-cols-2 gap-5 text-sm">
              <Stat
                icon={<CalendarDays size={18} />}
                label="Job Posted"
                value="14 June, 2025"
              />
              <Stat
                icon={<Clock3 size={18} />}
                label="Job Expire in"
                value="14 July, 2025"
              />
              <Stat
                icon={<Stack size={18} />}
                label="Category"
                value="Back-end"
              />
              <Stat
                icon={<DollarSign size={18} />}
                label="Price"
                value="$50k-80k"
              />
              <Stat
                icon={<Users size={18} />}
                label="Applicants"
                value="120"
              />
              <Stat
                icon={<Stack size={18} />}
                label="Languages"
                value="JavaScript"
              />
            </div>
          </Card>


          {/* Resources */}
          <Card title="Project Resources">
            <div className="flex items-start gap-3 text-sm">
              <Globe size={18} className="mt-1 text-gray-600" />
              <div>
                <div className="text-gray-600">Link to Project</div>
                <a
                  className="text-[#2A64D6] break-all"
                  href="https://github.com/microsoft/onnxruntime"
                >
                  https://github.com/microsoft/onnxruntime
                </a>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-lg border px-3 py-3">
              <div>
                <div className="text-sm text-gray-600">
                  YOLO World Official Docs
                </div>
                <div className="text-xs text-gray-500">PDF</div>
              </div>
              <button className="h-8 w-8 rounded-md bg-[#E7F0FA] grid place-items-center">
                <Download size={16} className="text-[#2A64D6]" />
              </button>
            </div>
          </Card>

        </aside>
      </div>

      
      {/* Footer */}
      <Footer />
    </div>
  );
}

/* Helpers */
function Block({ title, children }) {
  return (
    <div className="max-w-[740px]">
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-2 text-gray-700">{children}</div>
    </div>
  );
}

function Tags({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="px-4 py-2 rounded bg-[#F2F3F5] text-[#656565] text-xs border border-gray-200"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-xl border border-[#CEE0F5B2] p-5">
      {title?.trim() !== "" && (
        <h4 className="font-semibold mb-4">{title}</h4>
      )}
      {children}
    </div>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="text-sm">
      <div className="mb-1 text-[#2A64D6]">{icon}</div>
      <div className="text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function Role({ title, sub }) {
  return (
    <div className="rounded-lg border border-[#CFE0F6] px-4 py-3 mb-3">
      <div className="text-[#2A64D6] font-semibold text-sm">{title}</div>
      <div className="text-xs text-gray-500 mt-1">{sub}</div>
    </div>
  );
}

function AuthorCard({ onMessageClick, onProfileClick }) {
  return (
    <Card title="">
      <div className="flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={onProfileClick}
        >
          <img
            src="https://i.pravatar.cc/60"
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold">Susan Jeans</div>
            <div className="text-xs text-gray-500">
              Website Designer (UI/UX)
            </div>
          </div>
        </div>
        <button 
          onClick={onMessageClick}
          className="h-9 px-3 rounded-md border text-sm flex items-center gap-2 hover:bg-[#F1F2F4] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22 12L13 3v6H6v6h7v6z" />
          </svg>
          Message
        </button>
      </div>

      <div className="mt-4 text-sm space-y-2">
        <Row label="Member Since:" value="March 2024" />
        <Row label="Bounties:" value="14 total" />
        <Row label="Email address:" value="susan@gmail.com" />
        <Row label="Website:" value="https://susan.com" />
        <div className="flex gap-2">
          <span className="px-2 py-1 text-xs rounded bg-[#F2F3F5]">
            UI Designer
          </span>
          <span className="px-2 py-1 text-xs rounded bg-[#F2F3F5]">
            UX Designer
          </span>
        </div>
      </div>
    </Card>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
