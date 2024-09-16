import{j as e,Y as x,y as o}from"./app-OCuaDqMv.js";import{A as p}from"./AuthenticatedLayout-T5DiJ462.js";import{T as h}from"./TextInput-CPd3Lc4V.js";import{P as m}from"./Pagination-BcfuaLUP.js";import{B as g}from"./ButtonDetail-Du9vZyLf.js";import"./transition-un57RTrT.js";function k({auth:i,dataTable:a,queryParams:d={}}){const l=(s,r)=>{const t={...d,page:1};r?t[s]=r:delete t[s],o.get(route("serviceRequest.index"),t,{preserveState:!0,preserveScroll:!0})},c=(s,r)=>{const t=r.target.value;l(s,t)},n=(s,r)=>{r.key==="Enter"&&l(s,r.target.value)};return e.jsxs(p,{user:i.user,children:[e.jsx(x,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Service Request"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.subject||"",placeholder:"Cari service request",onChange:s=>c("subject",s),onKeyPress:s=>n("subject",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"SUBJECT"}),e.jsx("th",{className:"px-3 py-2",children:"REF ID"}),e.jsx("th",{className:"px-3 py-2",children:"NOPEN"}),e.jsx("th",{className:"px-3 py-2",children:"SEND DATE"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:a.data.length>0?a.data.map((s,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.id}),e.jsx("td",{className:"px-3 py-3",children:s.subject}),e.jsx("td",{className:"px-3 py-3",children:s.refId}),e.jsx("td",{className:"px-3 py-3",children:s.nopen}),e.jsx("td",{className:"px-3 py-3",children:s.sendDate}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(g,{href:route("serviceRequest.detail",{id:s.refId})})})]},`${s.refId}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:a.links})]})})})})})]})}export{k as default};
