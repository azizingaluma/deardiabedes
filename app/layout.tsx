import "./globals.css";import type {Metadata} from "next";
import {Cormorant_Garamond,Playfair_Display,Inter} from "next/font/google";
const d=Cormorant_Garamond({subsets:["latin"],weight:["400","500"],variable:"--f-display"});
const s=Playfair_Display({subsets:["latin"],style:["normal","italic"],variable:"--f-serif"});
const i=Inter({subsets:["latin"],variable:"--f-sans"});
const title="Dear Diabetes — An Open Letter to an Uninvited Companion";
const description="Two letters. One shared experience. An intimate digital conversation about life with Type 1 Diabetes.";
export const metadata:Metadata={title,description,openGraph:{title,description,type:"website"},twitter:{card:"summary_large_image",title,description}};
export default function L({children}:{children:React.ReactNode}){return <html lang="en" className={`${d.variable} ${s.variable} ${i.variable}`}><body>{children}</body></html>}
