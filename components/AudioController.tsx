"use client";
import {useRef,useState} from "react";import {Play,Pause,Volume2,VolumeX} from "lucide-react";
export default function AudioController(){const r=useRef<HTMLAudioElement>(null);const [p,setP]=useState(false);const [m,setM]=useState(false);const [bad,setBad]=useState(false);
const b="p-3 rounded-full bg-emerald-deep/90 border border-champagne/60";
return(<div className="fixed bottom-4 right-4 z-50 flex gap-2">
<audio ref={r} src="/piano.mp3" loop preload="none" onError={()=>setBad(true)}/>
<button className={b} aria-label={p?"Pause music":"Play music"} onClick={()=>{if(!r.current)return;if(p){r.current.pause();setP(false)}else{r.current.play().then(()=>setP(true)).catch(()=>setBad(true))}}}>{p?<Pause size={18}/>:<Play size={18}/>}</button>
<button className={b} aria-label={m?"Unmute":"Mute"} onClick={()=>{if(r.current)r.current.muted=!m;setM(!m)}}>{m?<VolumeX size={18}/>:<Volume2 size={18}/>}</button>
{bad&&<span role="status" className="text-xs self-center bg-emerald-deep px-2 py-1">Add public/piano.mp3</span>}</div>)}
