"use client";
import {useEffect,useState} from "react";
import Envelope from "./Envelope";import LetterDocument from "./LetterDocument";import ReflectionForm from "./ReflectionForm";
import StoryCollection from "./StoryCollection";import AudioController from "./AudioController";import Share from "./Share";import Reveal from "./Reveal";
import {letterOne,letterTwo} from "@/content/letters";
export default function Experience(){
const [one,setOne]=useState(false);const [pause,setPause]=useState(false);const [two,setTwo]=useState(false);const [pr,setPr]=useState(0);
const go=(id:string)=>setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"}),150);
useEffect(()=>{const f=()=>setPr(scrollY/Math.max(1,document.body.scrollHeight-innerHeight));addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);
const sec="px-5 py-24 sm:py-32";
return(<>
<div className="fixed top-0 left-0 h-0.5 bg-champagne z-50" style={{width:`${pr*100}%`}} role="progressbar" aria-label="Reading progress" aria-valuenow={Math.round(pr*100)}/>
<nav aria-label="Sections" className="fixed top-3 left-4 z-40 text-xs tracking-[.2em] text-cream/80 flex gap-4">
<a href="#top">DEAR DIABETES</a>{two&&<><a href="#your-turn">YOUR TURN</a><a href="#stories">STORIES</a></>}</nav>
<AudioController/>
<main>
<section id="top" className="velvet min-h-screen grid place-items-center px-5 py-24 text-center">
<div><h1 className="font-display text-4xl sm:text-6xl max-w-3xl mx-auto leading-tight">Some conversations are too difficult to say out loud.</h1>
<p className="font-serif italic text-xl mt-5 text-cream">So we decided to write them.</p>
<p className="text-sm mt-2 text-champagne">An open letter to an uninvited companion.</p>
<div className="mt-14"><Envelope variant={1} hint="OPEN THE LETTER" onOpened={()=>{setOne(true);go("letter-one")}}/></div></div></section>
{one&&<section id="letter-one" className={sec}><LetterDocument l={letterOne} onNext={()=>{setPause(true);go("between")}}/></section>}
{pause&&<section id="between" className="bg-emerald-deep min-h-screen grid place-items-center text-center px-5">
<div><Reveal as="h2" className="font-display text-4xl sm:text-5xl">Every letter deserves to be heard.</Reveal>
<p className="font-serif italic text-2xl mt-8 text-cream opacity-0 animate-[fade_1s_2.5s_forwards]">But what if the conversation continued?</p>
<style>{"@keyframes fade{to{opacity:1}}"}</style>
<div className="mt-14 opacity-0 animate-[fade_1s_4s_forwards]"><Envelope variant={2} hint="OPEN THE SECOND LETTER" onOpened={()=>{setTwo(true);go("letter-two")}}/></div></div></section>}
{two&&<section id="letter-two" className={sec}><LetterDocument l={letterTwo}/>
<p className="text-center font-display text-4xl sm:text-6xl mt-24 text-ivory">You are more than Diabetes.</p></section>}
{two&&<><section id="your-turn" className={`${sec} velvet`}><div className="text-center mb-12"><h2 className="font-display text-4xl sm:text-5xl">Now, it’s your turn.</h2>
<p className="font-serif italic text-xl mt-4 max-w-xl mx-auto">If you could tell Diabetes one thing, without holding back, what would you say?</p></div><ReflectionForm/></section>
<section id="stories" className={`${sec} bg-emerald-deep`}><h2 className="font-display text-4xl sm:text-5xl text-center mb-12">Different stories. Shared understanding.</h2><StoryCollection/></section>
<footer className="velvet px-5 py-28 text-center"><h2 className="font-display text-4xl sm:text-5xl">You are more than your diagnosis.</h2>
<p className="font-serif text-xl mt-8 leading-loose">More than a number.<br/>More than an injection.<br/>More than a difficult day.</p>
<p className="font-serif italic text-xl mt-6">You are a person with a life worth living.</p>
<p className="font-display text-3xl mt-16 tracking-widest">DEAR DIABETES.</p><p className="text-sm text-champagne mb-8">An open letter to an uninvited companion.</p><div className="flex justify-center"><Share/></div></footer></>}
</main></>)}
