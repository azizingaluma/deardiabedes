import Reveal from "./Reveal";import type {Letter} from "@/content/letters";
export default function LetterDocument({l,onNext}:{l:Letter;onNext?:()=>void}){return(
<article className="paper mx-auto max-w-[38rem] px-7 py-14 sm:px-14 sm:py-20" aria-labelledby={`h-${l.id}`}>
<p className="text-xs tracking-[.2em] text-emerald/70 font-sans">{l.label}</p>
<h2 id={`h-${l.id}`} className="font-display text-5xl mt-4 mb-10">{l.heading}</h2>
{l.paragraphs.map((p,i)=><Reveal key={i} className="font-serif text-lg leading-[1.85] mb-6">{p}</Reveal>)}
<Reveal as="blockquote" className="font-serif italic text-2xl sm:text-3xl leading-snug border-t border-champagne pt-8 mt-10">{l.closing}</Reveal>
{l.cta&&onNext&&<button onClick={onNext} className="mt-10 bg-emerald text-ivory px-8 py-3 text-sm tracking-[.2em]">{l.cta}</button>}
</article>)}
