import {ImageResponse} from "next/og";
export const size={width:1200,height:630};export const contentType="image/png";
export default function Img(){return new ImageResponse(<div style={{width:"100%",height:"100%",background:"#063D32",color:"#F1EBDD",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"serif"}}>
<div style={{width:110,height:110,borderRadius:55,background:"#0A2B23",border:"3px solid #B8A27C",color:"#B8A27C",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40}}>DD</div>
<div style={{fontSize:84,marginTop:36,letterSpacing:6}}>DEAR DIABETES</div><div style={{fontSize:32,marginTop:16,color:"#B8A27C"}}>An open letter to an uninvited companion.</div></div>,size)}
