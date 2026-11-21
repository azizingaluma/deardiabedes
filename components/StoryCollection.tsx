"use client";
import {useState} from "react";import {categories,sampleStories} from "@/content/letters";
export default function StoryCollection(){const [f,setF]=useState<string|null>(null);
const list=sampleStories.filter(s=>!f||s.category===f);
return(<div className="mx-auto max-w-5xl">
<div className="flex flex-wrap gap-2 justify-center mb-10" role="group" aria-label="Story categories">
{categories.map(c=><button key={c} aria-pressed={f===c} onClick={()=>setF(f===c?null:c)} className={`px-4 py-2 text-sm border border-champagne/60 ${f===c?"bg-champagne text-emerald":""}`}>{c}</button>)}</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map(s=>
<article key={s.id} className="paper p-6"><p className="text-xs text-emerald/70">{s.category} · Fictional sample</p>
<h3 className="font-display text-2xl my-3">{s.title}</h3><p className="font-serif">{s.excerpt}</p></article>)}</div></div>)}
