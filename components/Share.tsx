"use client";
import {useState} from "react";
export default function Share(){const [s,setS]=useState("");
async function go(){const d={title:"Dear Diabetes",text:"An open letter to an uninvited companion.",url:location.href};
try{if(navigator.share)await navigator.share(d);else{await navigator.clipboard.writeText(d.url);setS("Link copied.")}}catch{}}
return <div><button onClick={go} className="border border-champagne px-6 py-2 text-sm tracking-[.2em]">SHARE</button><p role="status" className="text-xs mt-2">{s}</p></div>}
