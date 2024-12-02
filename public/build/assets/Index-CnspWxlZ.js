import{j as e,Y as m,y as u}from"./app-DwNTTMX-.js";import{A as g}from"./AuthenticatedLayout-D_45ZGv0.js";import{T as j}from"./TextInput-BzZLPRXX.js";import{P as y}from"./Pagination-sJMVxQKV.js";import{T as f}from"./ButtonDetail-BxIwa3wr.js";import{B as a}from"./ButtonTime-B52WAKKR.js";import"./transition-CgZdEkK2.js";function S({auth:d,dataTable:n,header:c,totalCount:x,text:o,queryParams:i={}}){const l=(r,t)=>{const s={...i,page:1};t?s[r]=t:delete s[r],u.get(route("encounter.index"),s,{preserveState:!0,preserveScroll:!0})},p=(r,t)=>{const s=t.target.value;l(r,s)},h=(r,t)=>{t.key==="Enter"&&l(r,t.target.value)};return e.jsxs(g,{user:d.user,children:[e.jsx(m,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsxs("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:["Data Encounter ",c," ",x," ",o]}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm text-nowrap font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:8,className:"px-3 py-2",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(j,{className:"w-full",defaultValue:i.search||"",placeholder:"Cari data berdasarkan subject atau ref id",onChange:r=>p("search",r),onKeyPress:r=>h("search",r)}),e.jsx(a,{href:route("encounter.filterByTime","hariIni"),text:"Hari Ini"}),e.jsx(a,{href:route("encounter.filterByTime","mingguIni"),text:"Minggu Ini"}),e.jsx(a,{href:route("encounter.filterByTime","bulanIni"),text:"Bulan Ini"}),e.jsx(a,{href:route("encounter.filterByTime","tahunIni"),text:"Tahun Ini"})]})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"SUBJECT"}),e.jsx("th",{className:"px-3 py-2",children:"PERIOD"}),e.jsx("th",{className:"px-3 py-2",children:"STATUS"}),e.jsx("th",{className:"px-3 py-2",children:"REF ID"}),e.jsx("th",{className:"px-3 py-2",children:"SEND DATE"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:n.data.length>0?n.data.map((r,t)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:r.id}),e.jsx("td",{className:"px-3 py-3",children:r.subject}),e.jsx("td",{className:"px-3 py-3",children:r.period}),e.jsx("td",{className:"px-3 py-3",children:r.status}),e.jsx("td",{className:"px-3 py-3",children:r.refId}),e.jsx("td",{className:"px-3 py-3",children:r.sendDate}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(f,{href:route("encounter.detail",{id:r.refId})})})]},`${r.refId}-${t}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"7",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(y,{links:n.links})]})})})})})]})}export{S as default};
