// /** @format */
// import { Link } from "react-router-dom";
// import {
//   BadgeCheck,
//   Clock3,
//   CircleDollarSign,
//   Users,
//   Images,
// } from "lucide-react";

// /* داتا تجريبية – استبدلها بالـAPI */
// const items = [
//   { id: "1", status: "rejected",   days: 1, role: "Machine Learning Engineer", earn: 4000, img: null },
//   { id: "2", status: "awaiting",   days: 2, role: "Machine Learning Engineer", earn: 4000, img: null },
//   { id: "3", status: "inprogress", days: 5, role: "Machine Learning Engineer", earn: 4000, img: "/assets/code.jpg" },
// ];

// const StatusPill = ({ type }) => {
//   const map = {
//     rejected:   { text: "Rejected",         cls: "bg-rose-100 text-rose-600" },
//     awaiting:   { text: "Awaiting Review",  cls: "bg-amber-100 text-amber-700" },
//     inprogress: { text: "In Progress",      cls: "bg-green-100 text-green-700" },
//   };
//   const { text, cls } = map[type] ?? map.inprogress;
//   return <span className={`px-2.5 py-1 rounded-full text-[11px] ${cls}`}>{text}</span>;
// };

// const goPathByStatus = (status, id) => {
//   if (status === "awaiting")   return `/dashboard/assigned/milestone/${id}/review`;
//   if (status === "rejected")   return `/dashboard/assigned/milestone/${id}/resubmit`;
//   return `/dashboard/assigned/milestone/${id}`; // inprogress
// };

// const Card = ({ item }) => (
//   <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
//     {/* الصورة + البادج */}
//     <div className="relative h-44 bg-gray-100 grid place-items-center">
//       {item.img ? (
//         <img src={item.img} alt="" className="h-full w-full object-cover" />
//       ) : (
//         <div className="flex flex-col items-center text-gray-400">
//           <Images className="h-8 w-8" />
//         </div>
//       )}
//       <div className="absolute top-2 right-2">
//         <StatusPill type={item.status} />
//       </div>
//     </div>

//     {/* التفاصيل */}
//     <div className="p-4">
//       <h3 className="font-semibold">Bounty Name</h3>
//       <div className="mt-1 text-sm text-gray-600 flex items-center gap-1">
//         <BadgeCheck className="h-4 w-4" />
//         Milestone: <span className="ml-1">Milestone Name</span>
//       </div>

//       <div className="mt-3 space-y-1 text-sm">
//         <div className="flex items-center gap-2 text-gray-700">
//           <Users className="h-4 w-4" />
//           Your Role:
//           <span className="font-medium ml-1">{item.role}</span>
//         </div>
//         <div className="flex items-center gap-2 text-gray-700">
//           <CircleDollarSign className="h-4 w-4" />
//           You Earn:
//           <span className="font-medium ml-1">{item.earn}$</span>
//         </div>
//         <div className="flex items-center gap-2 text-gray-700">
//           <Clock3 className="h-4 w-4" />
//           <span className={`${item.days <= 1 ? "text-rose-600" : "text-amber-600"}`}>
//             {item.days} days Remaining
//           </span>
//         </div>
//       </div>

//       <div className="mt-4 flex gap-2">
//         <Link
//           to={goPathByStatus(item.status, item.id)}
//           className="px-3 py-2 text-sm rounded-md border hover:bg-gray-50"
//         >
//           View Details
//         </Link>
//         <Link
//           to={goPathByStatus(item.status, item.id)}
//           className="px-3 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
//         >
//           Go to Milestone
//         </Link>
//       </div>
//     </div>
//   </div>
// );

// export default function AssignedToMe() {
//   return (
//     <div>
//       <h2 className="text-lg font-semibold mb-4">
//         Assigned to Me <span className="text-gray-500">({items.length})</span>
//       </h2>

//       <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
//         {items.map((it) => (
//           <Card key={it.id} item={it} />
//         ))}
//       </div>
//     </div>
//   );
// }


/** @format */
import { Link } from "react-router-dom";
import { BadgeCheck, Clock3, CircleDollarSign, Users, Images, ClipboardList } from "lucide-react";
import CreativeCard from "../../../../shared/Cards/CreativeCard";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";
import CreativeBadge from "../../../../shared/Badge/CreativeBadge";
import { assignedBountiesData, initializeAssignedBounties } from "../../../../data/assignedBounties";
import { useEffect, useState } from "react";

// Initialize assigned bounties data
initializeAssignedBounties();

const StatusPill = ({ type }) => {
  const map = {
    rejected:   { text: "Rejected",         variant: "error" },
    awaiting:   { text: "Awaiting Review",  variant: "warning" },
    inprogress: { text: "In Progress",      variant: "success" },
  };
  const { text, variant } = map[type] ?? map.inprogress;
  return <CreativeBadge variant={variant}>{text}</CreativeBadge>;
};

const milestonePath = (status, milestoneId) => {
  if (status === "awaiting") return `/dashboard/assigned/milestone/${milestoneId}/awaiting`;
  if (status === "rejected") return `/dashboard/assigned/milestone/${milestoneId}/resubmit`;
  return `/dashboard/assigned/milestone/${milestoneId}`; 
};

const Card = ({ item }) => (
  <CreativeCard className="overflow-hidden group">
    <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 grid place-items-center overflow-hidden">
      {item.image ? (
        <img src={item.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
      ) : (
        <div className="flex flex-col items-center text-gray-300">
          <Images className="h-10 w-10" />
        </div>
      )}
      <div className="absolute top-3 right-3">
        <StatusPill type={item.status} />
      </div>
    </div>

    <div className="p-5">
      <h3 className="font-bold text-lg text-gradient">{item.title}</h3>
      <div className="mt-2 text-sm text-gray-600 flex items-center gap-1.5 font-medium">
        <BadgeCheck className="h-4 w-4 text-blue-600" />
        Milestone: <span className="ml-1 text-gray-900">{item.milestone}</span>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-700">
          <Users className="h-4 w-4 text-purple-600" />
          Your Role: <span className="font-semibold ml-1 text-gray-900">{item.role}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <CircleDollarSign className="h-4 w-4 text-green-600" />
          You Earn: <span className="font-semibold ml-1 text-green-600">{item.earnings}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Clock3 className="h-4 w-4 text-amber-600" />
          <span className={`font-semibold ${item.daysRemaining <= 1 ? "text-red-600" : "text-amber-600"}`}>
            {item.daysRemaining} days Remaining
          </span>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <Link 
          to={`/details/${item.id}`} 
          state={{ fromAssigned: true }}
          className="flex-1"
        >
          <CreativeButton
            variant="outline"
            size="sm"
            className="w-full h-[40px]"
          >
            View Details
          </CreativeButton>
        </Link>

        <Link to={milestonePath(item.status, item.id)} className="flex-1">
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

export default function AssignedToMe() {
  const [assignedBounties, setAssignedBounties] = useState([]);

  useEffect(() => {
    // Load assigned bounties from localStorage
    const storedBounties = JSON.parse(localStorage.getItem("assignedBounties") || "[]");
    setAssignedBounties(storedBounties);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <ClipboardList className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-gradient">
          Assigned to Me <span className="text-gray-400 text-xl font-normal">({assignedBounties.length})</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {assignedBounties.map((bounty) => (
          <Card key={bounty.id} item={bounty} />
        ))}
      </div>
    </div>
  );
}
