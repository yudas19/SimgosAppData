import{j as a,Y as i}from"./app-Dvlr_T_r.js";import{A as d}from"./AuthenticatedLayout-C05LCJn9.js";import{B as n}from"./ButtonBack-BS1ugo-q.js";import"./transition-C8nCtlCa.js";function h({auth:l,detail:e}){const t=Object.keys(e).map(s=>({uraian:s,value:e[s]}));return a.jsxs(d,{user:l.user,children:[a.jsx(i,{title:"Pendaftaran"}),a.jsx("div",{className:"py-5",children:a.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:a.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:a.jsxs("div",{className:"overflow-auto w-full",children:[a.jsxs("div",{className:"relative flex items-center justify-between pb-2",children:[a.jsx(n,{href:route("pendaftaran.index")}),a.jsx("h1",{className:"absolute left-1/2 transform -translate-x-1/2 uppercase font-bold text-2xl",children:"DATA DETAIL PENDAFTARAN"})]}),a.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[a.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-3 py-2",children:"NO"}),a.jsx("th",{className:"px-3 py-2",children:"COLUMN"}),a.jsx("th",{className:"px-3 py-2",children:"VALUE"})]})}),a.jsx("tbody",{children:t.map((s,r)=>a.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[a.jsx("td",{className:"px-3 py-3 w-16",children:r+1}),a.jsx("td",{className:"px-3 py-3 w-56",children:s.uraian}),a.jsx("td",{className:"px-3 py-3 break-words",children:s.uraian==="STATUS_PENDAFTARAN"?s.value===0?"Batal":s.value===1?"Aktif":s.value===2?"Selesai":s.value:s.uraian==="STATUS_PASIEN"?s.value===0?"Dibatalkan/Tidak Aktif":s.value===1?"Aktif":s.value===2?"Meninggal":s.value:s.value})]},r))})]})]})})})})})]})}export{h as default};
