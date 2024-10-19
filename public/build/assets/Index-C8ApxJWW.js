import{j as e,Y as x,y as o}from"./app-DzI-Knno.js";import{A as p}from"./AuthenticatedLayout-BdWc-w2G.js";import{T as h}from"./TextInput-C7okBoNt.js";import{P as g}from"./Pagination-Dk2sKNzv.js";import"./transition-gM-W-6Mm.js";function N({auth:n,dataTable:t,queryParams:d={}}){const l=(s,a)=>{const r={...d,page:1};a?r[s]=a:delete r[s],o.get(route("conditionPa.index"),r,{preserveState:!0,preserveScroll:!0})},i=(s,a)=>{const r=a.target.value;l(s,r)},c=(s,a)=>{a.key==="Enter"&&l(s,a.target.value)};return e.jsxs(p,{user:n.user,children:[e.jsx(x,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Condition Hasil PA"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.subject||"",placeholder:"Cari condition hasil PA",onChange:s=>i("subject",s),onKeyPress:s=>c("subject",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"SUBJECT"}),e.jsx("th",{className:"px-3 py-2",children:"REF ID"}),e.jsx("th",{className:"px-3 py-2",children:"NOPEN"}),e.jsx("th",{className:"px-3 py-2",children:"SEND DATE"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((s,a)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.id}),e.jsx("td",{className:"px-3 py-3",children:s.subject}),e.jsx("td",{className:"px-3 py-3",children:s.refId}),e.jsx("td",{className:"px-3 py-3",children:s.nopen}),e.jsx("td",{className:"px-3 py-3",children:s.sendDate})]},`${s.nopen}-${a}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(g,{links:t.links})]})})})})})]})}export{N as default};
