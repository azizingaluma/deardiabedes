"use client";
import {useEffect,useRef} from "react";
export default function Reveal({children,as:T="p",className=""}:{children:React.ReactNode;as?:any;className?:string}){
const r=useRef<HTMLElement>(null);
useEffect(()=>{const el=r.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add("in");o.disconnect()}},{threshold:.2});o.observe(el);return()=>o.disconnect()},[]);
return <T ref={r} className={`reveal ${className}`}>{children}</T>}
