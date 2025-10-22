// export default function AdminBountyFiles() {
//   const rows = [
//     ["Project tech requirements.pdf", "User Name", "56 MB", "1 hour ago"],
//     ["Project tech requirements.pdf", "User Name", "56 MB", "Feb 2, 2025"],
//     ["Project tech requirements.pdf", "User Name", "56 MB", "Feb 2, 2025"],
//     ["Project tech requirements.pdf", "User Name", "56 MB", "Feb 2, 2025"],
//     ["Project tech requirements.pdf", "User Name", "56 MB", "Feb 2, 2025"],
//   ];

//   return (
//     <div className="bg-white rounded-2xl p-6 shadow-sm">
//       <div className="grid grid-cols-12 px-2 py-2 text-sm text-gray-500">
//         <div className="col-span-5">Activity</div>
//         <div className="col-span-3">Uploader</div>
//         <div className="col-span-2">File Size</div>
//         <div className="col-span-2">Upload Time</div>
//       </div>

//       <div className="divide-y">
//         {rows.map((r, i) => (
//           <div key={i} className="py-3 grid grid-cols-12 items-center">
//             <div className="col-span-5 flex items-center gap-3">
//               <div className="w-6 h-6 rounded-lg bg-gray-200" />
//               <div className="text-sm">{r[0]}</div>
//             </div>
//             <div className="col-span-3 flex items-center gap-2">
//               <div className="w-7 h-7 rounded-full bg-gray-300" />
//               <div className="text-sm">{r[1]}</div>
//             </div>
//             <div className="col-span-2 text-sm text-gray-700">{r[2]}</div>
//             <div className="col-span-2 text-sm text-gray-700">{r[3]}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// export default function AdminBountyFiles() {
//   const rows = [
//     { name: "Project tech requirements.pdf", uploader: "User Name", size: "56 MB", time: "1 hour ago" },
//     { name: "Project tech requirements.pdf", uploader: "User Name", size: "56 MB", time: "Feb 2, 2025" },
//     { name: "Project tech requirements.pdf", uploader: "User Name", size: "56 MB", time: "Feb 2, 2025" },
//     { name: "Project tech requirements.pdf", uploader: "User Name", size: "56 MB", time: "Feb 2, 2025" },
//     { name: "Project tech requirements.pdf", uploader: "User Name", size: "56 MB", time: "Feb 2, 2025" },
//   ];

//   return (
//     <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
//       <table className="min-w-full divide-y divide-gray-200 text-sm">
//         <thead className="bg-gray-50 text-gray-500">
//           <tr>
//             <th className="px-6 py-3 text-left font-medium">Activity</th>
//             <th className="px-6 py-3 text-left font-medium">Uploader</th>
//             <th className="px-6 py-3 text-left font-medium">File Size</th>
//             <th className="px-6 py-3 text-left font-medium">Upload Time</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-100 bg-white">
//           {rows.map((r, i) => (
//             <tr key={i}>
//               <td className="px-6 py-4 text-gray-900">{r.name}</td>
//               <td className="px-6 py-4 text-gray-700">{r.uploader}</td>
//               <td className="px-6 py-4 text-gray-700">{r.size}</td>
//               <td className="px-6 py-4 text-gray-700">{r.time}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



// pages/admin/bounty-details/FilesTab.jsx
export default function FilesTab(){
  const files = new Array(5).fill(0).map((_,i)=>({name:"Project tech requirements.pdf",uploader:"User Name",size:"56 MB",time:["1 hour ago","Feb 2, 2025","Feb 2, 2025","Feb 2, 2025","Feb 2, 2025"][i]}));
  return (
    <div className="panel" style={{padding:0}}>
      <table className="table">
        <thead className="tr">
          <tr>
            <th className="th">Activity</th>
            <th className="th">Uploader</th>
            <th className="th">File Size</th>
            <th className="th">Upload Time</th>
          </tr>
        </thead>
        <tbody>
          {files.map((f,i)=>(
            <tr className="tr" key={i}>
              <td className="td">📄 {f.name}</td>
              <td className="td">🧑 {f.uploader}</td>
              <td className="td">{f.size}</td>
              <td className="td">🗓 {f.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
