import{j as e,Y as f,y as g}from"./app-odi-087W.js";import{A as b}from"./AuthenticatedLayout-3ne-59MD.js";import{T as v}from"./TextInput-BdBX-KLA.js";import{P as N}from"./Pagination-BjeDYDs9.js";import{T as y}from"./ButtonDetail-DB-5Jaay.js";import{B as n}from"./ButtonTime-BvXu3EL8.js";import{T as I,a as d,b as T,c as k,d as t}from"./TableCell-B7h3cdwd.js";import"./transition-D33yG11G.js";function P({auth:x,dataTable:i,header:o,totalCount:m,text:h,queryParams:l={}}){const u=[{name:"ID"},{name:"SUBJECT"},{name:"REF ID"},{name:"NOPEN"},{name:"SEND DATE"},{name:"MENU",className:"text-center"}],c=(s,r)=>{const a={...l,page:1};r?a[s]=r:delete a[s],g.get(route("serviceRequest.index"),a,{preserveState:!0,preserveScroll:!0})},p=(s,r)=>{const a=r.target.value;c(s,a)},j=(s,r)=>{r.key==="Enter"&&c(s,r.target.value)};return e.jsxs(b,{user:x.user,children:[e.jsx(f,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsxs("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:["Data Service Request ",o," ",m," ",h]}),e.jsxs(I,{children:[e.jsx(d,{children:e.jsx("tr",{children:e.jsx("th",{colSpan:8,className:"px-3 py-2",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(v,{className:"w-full",defaultValue:l.search||"",placeholder:"Cari data berdasarkan subject, ref id dan nopen",onChange:s=>p("search",s),onKeyPress:s=>j("search",s)}),e.jsx(n,{href:route("serviceRequest.filterByTime","hariIni"),text:"Hari Ini"}),e.jsx(n,{href:route("serviceRequest.filterByTime","mingguIni"),text:"Minggu Ini"}),e.jsx(n,{href:route("serviceRequest.filterByTime","bulanIni"),text:"Bulan Ini"}),e.jsx(n,{href:route("serviceRequest.filterByTime","tahunIni"),text:"Tahun Ini"})]})})})}),e.jsx(d,{children:e.jsx("tr",{children:u.map((s,r)=>e.jsx(T,{className:s.className||"",children:s.name},r))})}),e.jsx("tbody",{children:i.data.length>0?i.data.map((s,r)=>e.jsxs(k,{isEven:r%2===0,children:[e.jsx(t,{children:s.id}),e.jsx(t,{children:s.subject}),e.jsx(t,{children:s.refId}),e.jsx(t,{children:s.nopen}),e.jsx(t,{children:s.sendDate}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(y,{href:route("serviceRequest.detail",{id:s.refId})})})]},s.refId)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(N,{links:i.links})]})})})})})]})}export{P as default};
