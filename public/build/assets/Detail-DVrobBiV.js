import{j as a,Y as n}from"./app-DjgChlQv.js";import{A as i}from"./AuthenticatedLayout-CEso4M4j.js";import"./transition-BaQd9XAE.js";function o({auth:l,detail:s}){const d=Object.keys(s).map(r=>({uraian:r,value:s[r]}));return a.jsxs(i,{user:l.user,children:[a.jsx(n,{title:"Pendaftaran"}),a.jsx("div",{className:"py-5",children:a.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:a.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:a.jsxs("div",{className:"overflow-auto w-full",children:[a.jsx("h1",{className:"uppercase text-center font-bold text-xl pb-2",children:"DATA DETAIL KUNJUNGAN"}),a.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[a.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-3 py-2",children:"NO"}),a.jsx("th",{className:"px-3 py-2",children:"COLUMN"}),a.jsx("th",{className:"px-3 py-2",children:"VALUE"})]})}),a.jsx("tbody",{children:d.map((r,e)=>a.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[a.jsx("td",{className:"px-3 py-3 w-16",children:e+1}),a.jsx("td",{className:"px-3 py-3 w-56",children:r.uraian}),a.jsx("td",{className:"px-3 py-3 break-words",children:r.uraian==="STATUS_KUNJUNGAN"?r.value===1?"Baru":r.value===2?"Lama":r.value===2?"Selesai":r.value:r.uraian==="STATUS_AKTIFITAS_KUNJUNGAN"?r.value===0?"Batal Kunjungan":r.value===1?"Pasien Berada di ruangan ini / Sedang dilayani":r.value===2?"Selesai":r.value:r.value})]},e))})]})]})})})})})]})}export{o as default};