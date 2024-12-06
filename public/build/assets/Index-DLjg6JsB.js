import{j as e,Y as g,y as m}from"./app-CFZLW__Q.js";import{A as u}from"./AuthenticatedLayout-D-_T4VPS.js";import{T as j}from"./TextInput-CGd9m7uS.js";import{P as y}from"./Pagination-Bwlhm3jj.js";import{T as b}from"./ButtonDetail-S7_1oVBL.js";import{B as s}from"./ButtonTime-BTW8XetX.js";import"./transition-Br3Ou9xR.js";function w({auth:d,dataTable:n,header:x,totalCount:c,text:o,queryParams:i={}}){const l=(a,r)=>{const t={...i,page:1};r?t[a]=r:delete t[a],m.get(route("carePlan.index"),t,{preserveState:!0,preserveScroll:!0})},h=(a,r)=>{const t=r.target.value;l(a,t)},p=(a,r)=>{r.key==="Enter"&&l(a,r.target.value)};return e.jsxs(u,{user:d.user,children:[e.jsx(g,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsxs("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:["Data Care Plan ",x," ",c," ",o]}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm text-nowrap font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:8,className:"px-3 py-2",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(j,{className:"w-full",defaultValue:i.search||"",placeholder:"Cari data berdasarkan author atau nopen",onChange:a=>h("search",a),onKeyPress:a=>p("search",a)}),e.jsx(s,{href:route("carePlan.filterByTime","hariIni"),text:"Hari Ini"}),e.jsx(s,{href:route("carePlan.filterByTime","mingguIni"),text:"Minggu Ini"}),e.jsx(s,{href:route("carePlan.filterByTime","bulanIni"),text:"Bulan Ini"}),e.jsx(s,{href:route("carePlan.filterByTime","tahunIni"),text:"Tahun Ini"})]})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"AUTHOR"}),e.jsx("th",{className:"px-3 py-2",children:"TITLE"}),e.jsx("th",{className:"px-3 py-2",children:"NOPEN"}),e.jsx("th",{className:"px-3 py-2",children:"SEND DATE"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:n.data.length>0?n.data.map((a,r)=>e.jsxs("tr",{className:`hover:bg-indigo-100 dark:hover:bg-indigo-800 ${r%2===0,"bg-gray-50 dark:bg-indigo-950"}`,children:[e.jsx("td",{className:"px-3 py-3",children:a.id}),e.jsx("td",{className:"px-3 py-3",children:a.author}),e.jsx("td",{className:"px-3 py-3",children:a.title}),e.jsx("td",{className:"px-3 py-3",children:a.nopen}),e.jsx("td",{className:"px-3 py-3",children:a.sendDate}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(b,{href:route("carePlan.detail",{id:a.nopen})})})]},`${a.nopen}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(y,{links:n.links})]})})})})})]})}export{w as default};
