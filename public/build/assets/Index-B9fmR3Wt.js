import{j as e,Y as x,y as o}from"./app-OWPptD4K.js";import{A as p}from"./AuthenticatedLayout-BkBfWvkO.js";import{T as h}from"./TextInput-C4hekYzb.js";import{P as m}from"./Pagination-DE3mINR4.js";import{B as g}from"./ButtonDetail-YJn1Ct0H.js";import"./transition-BhUD100l.js";function k({auth:n,dataTable:a,queryParams:d={}}){const l=(s,t)=>{const r={...d,page:1};t?r[s]=t:delete r[s],o.get(route("observation.index"),r,{preserveState:!0,preserveScroll:!0})},i=(s,t)=>{const r=t.target.value;l(s,r)},c=(s,t)=>{t.key==="Enter"&&l(s,t.target.value)};return e.jsxs(p,{user:n.user,children:[e.jsx(x,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Observation"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.subject||"",placeholder:"Cari observation",onChange:s=>i("subject",s),onKeyPress:s=>c("subject",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"SUBJECT"}),e.jsx("th",{className:"px-3 py-2",children:"REF ID"}),e.jsx("th",{className:"px-3 py-2",children:"NOPEN"}),e.jsx("th",{className:"px-3 py-2",children:"SEND DATE"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:a.data.length>0?a.data.map((s,t)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.id}),e.jsx("td",{className:"px-3 py-3",children:s.subject}),e.jsx("td",{className:"px-3 py-3",children:s.refId}),e.jsx("td",{className:"px-3 py-3",children:s.nopen}),e.jsx("td",{className:"px-3 py-3",children:s.sendDate}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(g,{href:route("observation.detail",{id:s.nopen})})})]},`${s.nopen}-${t}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:a.links})]})})})})})]})}export{k as default};
