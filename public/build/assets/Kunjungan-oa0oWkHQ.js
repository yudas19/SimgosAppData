import{r as n,j as a,Y as i}from"./app-C7QzPlDx.js";import{A as x}from"./AuthenticatedLayout-CEDLPtpQ.js";import{B as o}from"./ButtonBack-4UjG3ww0.js";import"./transition-BlqZoE6n.js";function g({auth:t,detail:r}){const d=n.useMemo(()=>Object.keys(r).map(s=>({uraian:s,value:r[s]})),[r]),l=(s,e)=>s==="STATUS_KUNJUNGAN"?e===1?"Baru":e===0?"Lama":e:s==="STATUS_AKTIFITAS_KUNJUNGAN"?e===0?"Batal Kunjungan":e===1?"Sedang dilayani":e===2?"Selesai":e:e;return a.jsxs(x,{user:t.user,children:[a.jsx(i,{title:"Pendaftaran"}),a.jsx("div",{className:"py-5",children:a.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:a.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:a.jsxs("div",{className:"overflow-auto w-full",children:[a.jsxs("div",{className:"relative flex items-center justify-between pb-2",children:[a.jsx(o,{href:route("pendaftaran.detail",{id:r.NOMOR_PENDAFTARAN})}),a.jsx("h1",{className:"absolute left-1/2 transform -translate-x-1/2 uppercase font-bold text-2xl",children:"Data Detail Kunjungan"})]}),a.jsxs("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-200 dark:bg-indigo-900 overflow-x-auto",children:[a.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-3 py-2",children:"No"}),a.jsx("th",{className:"px-3 py-2",children:"Column"}),a.jsx("th",{className:"px-3 py-2",children:"Value"})]})}),a.jsx("tbody",{children:d.map((s,e)=>a.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[a.jsx("td",{className:"px-3 py-3 w-16",children:e+1}),a.jsx("td",{className:"px-3 py-3 w-56",children:s.uraian}),a.jsx("td",{className:"px-3 py-3 break-words",children:l(s.uraian,s.value)})]},e))})]})]})})})})})]})}export{g as default};