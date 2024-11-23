import{j as e,Y as n}from"./app-DkArLajV.js";import{A as c}from"./AuthenticatedLayout-DVbw4r6i.js";import{B as o}from"./ButtonBack-CJXfCE-E.js";import{T as h}from"./ButtonDetail-BYB0GxnR.js";import"./transition-BwJMcd1_.js";function b({auth:d,dataTable:a,nomorKunjungan:r,nomorPendaftaran:l,namaPasien:t,normPasien:i}){return e.jsxs(c,{user:d.user,children:[e.jsx(n,{title:"Pendaftaran"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsxs("div",{className:"relative flex items-center justify-between pb-2",children:[e.jsx(o,{href:route("kunjungan.tableRme",{id:r})}),e.jsx("h1",{className:"absolute left-1/2 transform -translate-x-1/2 uppercase font-bold text-2xl",children:"DAFTAR TANDA VITAL"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pb-4",children:[e.jsxs("div",{className:"flex justify-between border p-2 rounded",children:["NOMOR PENDAFTARAN : ",l]}),e.jsxs("div",{className:"flex justify-between border p-2 rounded",children:["NOMOR KUNJUNGAN : ",r]}),e.jsxs("div",{className:"flex justify-between border p-2 rounded",children:["NAMA PASIEN : ",t]}),e.jsxs("div",{className:"flex justify-between border p-2 rounded",children:["NORM : ",i]})]}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NOMOR KUNJUNGAN"}),e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL"}),e.jsx("th",{className:"px-3 py-2",children:"OLEH"}),e.jsx("th",{className:"px-3 py-2",children:"STATUS"}),e.jsx("th",{className:"px-3 py-2",children:"MENU"})]})}),e.jsx("tbody",{children:a.length>0?a.map((s,x)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.kunjungan}),e.jsx("td",{className:"px-3 py-3",children:s.id}),e.jsx("td",{className:"px-3 py-3",children:s.tanggal}),e.jsx("td",{className:"px-3 py-3",children:s.oleh}),e.jsx("td",{className:"px-3 py-3",children:s.status}),e.jsx("td",{className:"px-3 py-3",children:s.id?e.jsx(h,{href:route("kunjungan.detailTandaVital",{id:s.id})}):e.jsx("span",{className:"text-gray-500",children:"No detail available"})})]},x)):e.jsx("tr",{children:e.jsx("td",{colSpan:"8",className:"text-center px-3 py-3",children:"No data available"})})})]})]})})})})})]})}export{b as default};
