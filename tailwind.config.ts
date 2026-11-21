import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
theme:{extend:{colors:{emerald:{DEFAULT:"#063D32",deep:"#10251F",mid:"#174638"},ivory:"#F1EBDD",cream:"#E4D8C3",champagne:"#B8A27C",charcoal:"#242722"},
fontFamily:{display:["var(--f-display)","serif"],serif:["var(--f-serif)","serif"],sans:["var(--f-sans)","sans-serif"]}}},plugins:[]} satisfies Config;
