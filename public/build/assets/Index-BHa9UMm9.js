import{j as e,Y as p,y as n}from"./app-BzH23yRA.js";import{A as o}from"./AuthenticatedLayout-Cjj54v21.js";import{T as h}from"./TextInput-CFPS_reX.js";import{P as m}from"./Pagination-CrJvbQmS.js";import{T as g}from"./ButtonDetail-eDk04-Mh.js";import"./transition-BVkBzBbc.js";function k({auth:i,dataTable:a,queryParams:d={}}){const l=(t,r)=>{const s={...d,page:1};r?s[t]=r:delete s[t],n.get(route("patient.index"),s,{preserveState:!0,preserveScroll:!0})},x=(t,r)=>{const s=r.target.value;s===""?n.get(route("patient.index"),{...d,name:"",page:1},{preserveState:!0,preserveScroll:!0}):l(t,s)},c=(t,r)=>{r.key==="Enter"&&l(t,r.target.value)};return e.jsxs(o,{user:i.user,children:[e.jsx(p,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Patient"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.name||"",placeholder:"Cari pasien",onChange:t=>x("name",t),onKeyPress:t=>c("name",t)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA"}),e.jsx("th",{className:"px-3 py-2",children:"REF ID"}),e.jsx("th",{className:"px-3 py-2",children:"NIK"}),e.jsx("th",{className:"px-3 py-2",children:"GET DATE"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:a.data.length>0?a.data.map((t,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:t.id}),e.jsx("td",{className:"px-3 py-3",children:t.name}),e.jsx("td",{className:"px-3 py-3",children:t.refId}),e.jsx("td",{className:"px-3 py-3",children:t.nik}),e.jsx("td",{className:"px-3 py-3",children:t.getDate}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(g,{href:route("patient.detail",{id:t.refId})})})]},`${t.refId}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:a.links})]})})})})})]})}export{k as default};