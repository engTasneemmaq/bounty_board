import { NavLink, Outlet, useParams } from "react-router-dom";

export default function AdminBountyLayout() {
  const { id } = useParams();
  
  return (
    <div className="space-y-6">
      <h1 className="text-[28px] font-bold text-[#111827]">Bounty Details</h1>
      
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
        <div className="text-[24px] font-bold text-[#111827] mb-2">Bounty Name</div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-[280px] h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-[45%] h-full bg-[#0A65CC] rounded-full"></div>
          </div>
          <div className="text-[14px] text-[#6B7280]">2/5 Milestone</div>
        </div>

        <div className="flex items-center gap-6 border-b border-[#E5E7EB]">
          <NavLink 
            to="." 
            end 
            className={({isActive}) => 
              `pb-3 text-[14px] font-medium border-b-2 transition-colors ${
                isActive 
                  ? 'text-[#0A65CC] border-[#0A65CC]' 
                  : 'text-[#6B7280] border-transparent hover:text-[#111827]'
              }`
            }
          >
            Overview
          </NavLink>
          <NavLink 
            to="milestones" 
            className={({isActive}) => 
              `pb-3 text-[14px] font-medium border-b-2 transition-colors ${
                isActive 
                  ? 'text-[#0A65CC] border-[#0A65CC]' 
                  : 'text-[#6B7280] border-transparent hover:text-[#111827]'
              }`
            }
          >
            Milestones
          </NavLink>
          <NavLink 
            to="users" 
            className={({isActive}) => 
              `pb-3 text-[14px] font-medium border-b-2 transition-colors ${
                isActive 
                  ? 'text-[#0A65CC] border-[#0A65CC]' 
                  : 'text-[#6B7280] border-transparent hover:text-[#111827]'
              }`
            }
          >
            Users
          </NavLink>
          <NavLink 
            to="files" 
            className={({isActive}) => 
              `pb-3 text-[14px] font-medium border-b-2 transition-colors ${
                isActive 
                  ? 'text-[#0A65CC] border-[#0A65CC]' 
                  : 'text-[#6B7280] border-transparent hover:text-[#111827]'
              }`
            }
          >
            Files
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
}