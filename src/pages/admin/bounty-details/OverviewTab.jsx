// pages/admin/bounty-details/OverviewTab.jsx
import { Badge } from "../_ui/Badge";

export default function OverviewTab(){
  return (
    <div className="panel" style={{padding:20}}>
      <h3 style={{fontWeight:800,marginBottom:14}}>Bounty Overview</h3>

      {/* Top metrics row */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr) 300px",gap:12,alignItems:"stretch"}}>
        {[
          ["BOUNTY POSTED","14 June, 2025"],
          ["BOUNTY EXPIRE IN","14 July, 2025"],
          ["CATEGORY","Development"],
          ["SALERY:","$50k"],
          ["STATUS:","In Progress"],
          ["MILESTONES","5"]
        ].map(([l,v])=>(
          <div key={l} className="panel" style={{padding:16}}>
            <div style={{color:"var(--muted)",fontSize:12,letterSpacing:.2}}>{l}</div>
            <div style={{fontWeight:700,marginTop:6}}>{v}</div>
          </div>
        ))}
        <div className="panel" style={{padding:0,overflow:"hidden"}}>
          <img alt="" src="https://images.unsplash.com/photo-1527443224154-c4e83f92385f?q=80&w=600&auto=format&fit=crop" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
        </div>
      </div>

      {/* Sections */}
      <Section title="Project Description">
        <p style={{color:"var(--muted)"}}>
          We are currently working on integrating libonnxruntime into our Unreal Engine 5.4 project targeting iOS...
          <br/><a href="https://github.com/microsoft/onnxruntime" target="_blank" rel="noreferrer">https://github.com/microsoft/onnxruntime</a>
        </p>
      </Section>

      <Section title="Project Requirements">
        <ul style={{color:"var(--muted)"}}>
          <li>Unreal Engine plugin development for iOS</li>
          <li>ONNX Runtime or native libraries integration</li>
          <li>iOS build pipelines and crash debugging</li>
        </ul>
      </Section>

      <Section title="Technical Details">
        <p style={{color:"var(--muted)"}}>This bounty involves integrating the libonnxruntime library ...</p>
      </Section>

      <Section title="Languages & Skills">
        <div style={{display:"grid",gridTemplateColumns:"1fr 3fr",gap:12}}>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {["Python","C++","Objective-C","Swift"].map(x=><span key={x} className="badge">{x}</span>)}
          </div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {["Crash Debugging","Xcode","Model Conversion","TFLite","Static Libraries","Ultralytics","ONNX Runtime","Swift"].map(x=><span key={x} className="badge">{x}</span>)}
          </div>
        </div>
      </Section>

      <Section title="Project Resources">
        <div style={{display:"grid",gap:12}}>
          <a href="https://github.com/microsoft/onnxruntime" target="_blank" rel="noreferrer">Link to Project</a>
          <div className="panel" style={{padding:14,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>YOLO World Official Docs <span style={{color:"var(--muted)"}}>PDF</span></div>
            <button className="btn btn-ghost">Download</button>
          </div>
        </div>
      </Section>
    </div>
  );
}
function Section({title,children}){
  return (
    <section style={{marginTop:22}}>
      <h4 style={{fontWeight:800,marginBottom:10}}>{title}</h4>
      {children}
    </section>
  );
}
