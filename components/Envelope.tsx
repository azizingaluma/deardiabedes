"use client";
import {useState} from "react";
export function WaxSeal({variant}:{variant:1|2}){return(
<svg viewBox="0 0 100 100" className="w-20 h-20" role="img" aria-label="Wax seal"><circle cx="50" cy="50" r="40" fill="#0A2B23" stroke="#B8A27C" strokeWidth="1.5"/><circle cx="50" cy="50" r="32" fill="none" stroke="#B8A27C" strokeOpacity=".5"/>
<text x="50" y="55" textAnchor="middle" fontSize="16" fill="#B8A27C" fontFamily="serif">{variant===1?"DD":"YOU"}</text></svg>)}
export default function Envelope({variant,onOpened,hint}:{variant:1|2;onOpened?:()=>void;hint:string}){
const [open,setOpen]=useState(false);
return(<div className="text-center">
<div className={`relative mx-auto w-[min(86vw,420px)] aspect-[3/2] ${open?"open":""}`}>
<div className="letter paper absolute inset-x-4 top-2 bottom-4 rounded-sm"/>
<div className="absolute inset-0 rounded-sm" style={{background:"#E4D8C3",boxShadow:"0 30px 60px -20px #000a"}}/>
<div className="flap absolute inset-x-0 top-0 h-1/2" style={{background:"#F1EBDD",clipPath:"polygon(0 0,100% 0,50% 100%)"}}/>
<div className={`absolute left-1/2 top-[40%] -translate-x-1/2 transition-opacity duration-500 ${open?"opacity-0":""}`}><WaxSeal variant={variant}/></div></div>
{!open&&<button onClick={()=>{setOpen(true);setTimeout(()=>onOpened?.(),1800)}} className="mt-10 border border-champagne px-8 py-3 text-sm tracking-[.2em] text-ivory hover:bg-champagne hover:text-emerald transition">{hint}</button>}
</div>)}
