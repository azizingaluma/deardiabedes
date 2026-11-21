"use client";
import {useEffect,useState} from "react";
const K="dear-diabetes-draft";
export default function ReflectionForm(){
const [t,setT]=useState("");const [m,setM]=useState("");const [a,setA]=useState("");const [c,setC]=useState(false);
const [err,setErr]=useState("");const [ok,setOk]=useState("");
useEffect(()=>{try{const d=JSON.parse(localStorage.getItem(K)||"null");if(d){setT(d.t);setM(d.m);setA(d.a)}}catch{}},[]);
function save(e:React.FormEvent){e.preventDefault();setOk("");
if(m.trim().length<10){setErr("Write at least a sentence (10 characters) before saving.");return}
setErr("");localStorage.setItem(K,JSON.stringify({t,m,a}));
setOk(c?"Saved on this device. Publication needs a connected moderation service, so nothing has been sent.":"Saved privately on this device.")}
const f="w-full bg-transparent border-b border-champagne/60 py-2 focus:outline-none focus:border-ivory font-serif text-lg";
return(<form onSubmit={save} noValidate className="mx-auto max-w-xl space-y-6">
<label className="block text-sm">Letter title (optional)<input className={f} value={t} onChange={e=>setT(e.target.value)}/></label>
<label className="block text-sm">Your message<textarea className={f+" min-h-48"} value={m} onChange={e=>setM(e.target.value)} aria-invalid={!!err} aria-describedby="err"/></label>
<label className="block text-sm">Anonymous author label (optional)<input className={f} value={a} onChange={e=>setA(e.target.value)}/></label>
<label className="flex gap-3 text-sm items-start"><input type="checkbox" checked={c} onChange={e=>setC(e.target.checked)} className="mt-1"/>I would like this letter to be considered for anonymous community publication. (Off by default.)</label>
<p className="text-xs text-cream/80">Privacy: drafts are stored only in this browser on this device, not on a server. Clearing site data deletes them.</p>
<p id="err" role="alert" className="text-sm text-[#f0b8a8]">{err}</p><p role="status" className="text-sm text-champagne">{ok}</p>
<button className="bg-ivory text-emerald px-8 py-3 text-sm tracking-[.2em]">WRITE MY LETTER</button></form>)}
