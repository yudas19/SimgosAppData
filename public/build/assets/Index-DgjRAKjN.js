import{j as e,Y as c,y as l}from"./app-Cwzwl08L.js";import{A as o}from"./AuthenticatedLayout-BefrLGCA.js";import{T as p}from"./TextInput-BeRNTaiN.js";import{P as g}from"./Pagination-CAzJ1KlV.js";import"./transition-BS7h6PSH.js";function N({auth:i,dataTable:t,queryParams:d={}}){const n=(a,r)=>{const s={...d,page:1};r?s[a]=r:delete s[a],l.get(route("organization.index"),s,{preserveState:!0,preserveScroll:!0})},x=(a,r)=>{const s=r.target.value;s===""?l.get(route("organization.index"),{...d,name:"",page:1},{preserveState:!0,preserveScroll:!0}):n(a,s)};return e.jsxs(o,{user:i.user,children:[e.jsx(c,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Organization"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:5,className:"px-3 py-2",children:e.jsx(p,{className:"w-full",defaultValue:d.name||"",placeholder:"Cari organization",onChange:a=>x("name",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{className:"text-nowrap",children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA"}),e.jsx("th",{className:"px-3 py-2",children:"PART OF"}),e.jsx("th",{className:"px-3 py-2",children:"REF ID"}),e.jsx("th",{className:"px-3 py-2",children:"SEND DATE"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((a,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.id}),e.jsx("td",{className:"px-3 py-3",children:a.name}),e.jsx("td",{className:"px-3 py-3",children:a.partOf}),e.jsx("td",{className:"px-3 py-3",children:a.refId}),e.jsx("td",{className:"px-3 py-3",children:a.sendDate})]},`${a.id}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"5",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(g,{links:t.links})]})})})})})]})}export{N as default};