// pages/admin/bounty-details/MilestonesTab.jsx
import { Badge } from "../_ui/Badge";
const Card = ({tone,title})=>(
  <div className="panel" style={{padding:16}}>
    <div style={{fontWeight:800}}>{title}</div>
    <p style={{color:"var(--muted)",margin:"8px 0 12px"}}>Lorem ipsum dolor sit amet...</p>
    <Badge>Role Name</Badge>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:14,color:"var(--muted)"}}>
      <span>◔ 3</span><span>🗓 Nov 30</span>
    </div>
  </div>
);
export default function MilestonesTab(){
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:18}}>
      {[
        ["In Progress","var(--text)"],
        ["Awaiting Review","var(--primary)"],
        ["Back To Queue","#F59E0B"],
        ["Completed","var(--green)"],
      ].map(([t,c])=>(
        <div key={t}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
            <div style={{fontWeight:800}}>{t}</div>
            <span className="badge">2</span>
          </div>
          <div style={{height:3,background:c,opacity:.8,marginBottom:12}}/>
          <div style={{display:"grid",gap:12}}>
            <Card title="Milestone Title"/>
            <Card title="Milestone Title"/>
          </div>
        </div>
      ))}
    </div>
  );
}
