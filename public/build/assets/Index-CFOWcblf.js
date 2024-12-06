import{j as r,Y as b,y as h}from"./app-Cv_FtKNC.js";import{A as m}from"./AuthenticatedLayout-J9zICOLn.js";import{T as y}from"./TextInput-YpzqUUu0.js";import{P as j}from"./Pagination-D7oLwUhC.js";import{T as u}from"./ButtonDetail-ljgeon42.js";import{B as d}from"./ButtonTime-CB1tXuYX.js";import"./transition-BTs6vKcd.js";function S({auth:o,dataTable:t,header:l,totalCount:c,text:x,queryParams:i={}}){const n=(e,a)=>{const s={...i,page:1};a?s[e]=a:delete s[e],h.get(route("specimen.index"),s,{preserveState:!0,preserveScroll:!0})},g=(e,a)=>{const s=a.target.value;n(e,s)},p=(e,a)=>{a.key==="Enter"&&n(e,a.target.value)};return r.jsxs(m,{user:o.user,children:[r.jsx(b,{title:"SatuSehat"}),r.jsx("div",{className:"py-5",children:r.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:r.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:r.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:r.jsxs("div",{className:"overflow-auto w-full",children:[r.jsxs("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:["Data Specimen ",l," ",c," ",x]}),r.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900 border border-gray-500 dark:border-gray-600",children:[r.jsx("thead",{className:"text-sm text-nowrap font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500",children:r.jsx("tr",{children:r.jsx("th",{colSpan:8,className:"px-3 py-2",children:r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(y,{className:"w-full",defaultValue:i.search||"",placeholder:"Cari data berdasarkan subject, ref id dan nopen",onChange:e=>g("search",e),onKeyPress:e=>p("search",e)}),r.jsx(d,{href:route("specimen.filterByTime","hariIni"),text:"Hari Ini"}),r.jsx(d,{href:route("specimen.filterByTime","mingguIni"),text:"Minggu Ini"}),r.jsx(d,{href:route("specimen.filterByTime","bulanIni"),text:"Bulan Ini"}),r.jsx(d,{href:route("specimen.filterByTime","tahunIni"),text:"Tahun Ini"})]})})})}),r.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500",children:r.jsxs("tr",{children:[r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"ID"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"SUBJECT"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"REF ID"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"NOPEN"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"SEND DATE"}),r.jsx("th",{className:"px-3 py-2 text-center border border-gray-500 dark:border-gray-600",children:"MENU"})]})}),r.jsx("tbody",{children:t.data.length>0?t.data.map((e,a)=>r.jsxs("tr",{className:`hover:bg-indigo-100 dark:hover:bg-indigo-800 border border-gray-500 dark:border-gray-600 ${a%2===0,"bg-gray-50 dark:bg-indigo-950"}`,children:[r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.id}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.subject}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.refId}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.nopen}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.sendDate}),r.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:r.jsx(u,{href:route("specimen.detail",{id:e.refId})})})]},`${e.nopen}-${a}`)):r.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:r.jsx("td",{colSpan:"5",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),r.jsx(j,{links:t.links})]})})})})})]})}export{S as default};
