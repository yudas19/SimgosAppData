import{j as r,Y as y,y as h}from"./app-Cv_FtKNC.js";import{A as p}from"./AuthenticatedLayout-J9zICOLn.js";import{T as m}from"./TextInput-YpzqUUu0.js";import{P as u}from"./Pagination-D7oLwUhC.js";import{T as j}from"./ButtonDetail-ljgeon42.js";import{B as t}from"./ButtonTime-CB1tXuYX.js";import"./transition-BTs6vKcd.js";function S({auth:i,dataTable:s,header:l,totalCount:c,text:x,queryParams:o={}}){const n=(e,a)=>{const d={...o,page:1};a?d[e]=a:delete d[e],h.get(route("encounter.index"),d,{preserveState:!0,preserveScroll:!0})},g=(e,a)=>{const d=a.target.value;n(e,d)},b=(e,a)=>{a.key==="Enter"&&n(e,a.target.value)};return r.jsxs(p,{user:i.user,children:[r.jsx(y,{title:"SatuSehat"}),r.jsx("div",{className:"py-5",children:r.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:r.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:r.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:r.jsxs("div",{className:"overflow-auto w-full",children:[r.jsxs("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:["Data Encounter ",l," ",c," ",x]}),r.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900 border border-gray-500 dark:border-gray-600",children:[r.jsx("thead",{className:"text-sm text-nowrap font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500",children:r.jsx("tr",{children:r.jsx("th",{colSpan:8,className:"px-3 py-2",children:r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(m,{className:"w-full",defaultValue:o.search||"",placeholder:"Cari data berdasarkan subject atau ref id",onChange:e=>g("search",e),onKeyPress:e=>b("search",e)}),r.jsx(t,{href:route("encounter.filterByTime","hariIni"),text:"Hari Ini"}),r.jsx(t,{href:route("encounter.filterByTime","mingguIni"),text:"Minggu Ini"}),r.jsx(t,{href:route("encounter.filterByTime","bulanIni"),text:"Bulan Ini"}),r.jsx(t,{href:route("encounter.filterByTime","tahunIni"),text:"Tahun Ini"})]})})})}),r.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500",children:r.jsxs("tr",{children:[r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"ID"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"SUBJECT"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"PERIOD"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"STATUS"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"REF ID"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"SEND DATE"}),r.jsx("th",{className:"px-3 py-2 text-center border border-gray-500 dark:border-gray-600",children:"MENU"})]})}),r.jsx("tbody",{children:s.data.length>0?s.data.map((e,a)=>r.jsxs("tr",{className:`hover:bg-indigo-100 dark:hover:bg-indigo-800 border border-gray-500 dark:border-gray-600 ${a%2===0,"bg-gray-50 dark:bg-indigo-950"}`,children:[r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.id}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.subject}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.period}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.status}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.refId}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.sendDate}),r.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:r.jsx(j,{href:route("encounter.detail",{id:e.refId})})})]},`${e.refId}-${a}`)):r.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:r.jsx("td",{colSpan:"7",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),r.jsx(u,{links:s.links})]})})})})})]})}export{S as default};
