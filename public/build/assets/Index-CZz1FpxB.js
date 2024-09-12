import{j as e,Y as c,y as o}from"./app-1zZPpAWS.js";import{A as p}from"./AuthenticatedLayout-D4bIPIz5.js";import{T as h}from"./TextInput-C2NGnniW.js";import{P as g}from"./Pagination-BauugXwx.js";import"./transition-CbHdEbjY.js";function b({auth:l,dataTable:a,queryParams:d={}}){const n=(s,t)=>{const r={...d,page:1};t?r[s]=t:delete r[s],o.get(route("consent.index"),r,{preserveState:!0,preserveScroll:!0})},i=(s,t)=>{const r=t.target.value;n(s,r)},x=(s,t)=>{t.key==="Enter"&&n(s,t.target.value)};return e.jsxs(p,{user:l.user,children:[e.jsx(c,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Consent"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:5,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.patient||"",placeholder:"Cari patient",onChange:s=>i("patient",s),onKeyPress:s=>x("patient",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"PATIENT"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"REF ID"}),e.jsx("th",{className:"px-3 py-2",children:"SEND DATE"})]})}),e.jsx("tbody",{children:a.data.length>0?a.data.map((s,t)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.id}),e.jsx("td",{className:"px-3 py-3",children:s.patient}),e.jsx("td",{className:"px-3 py-3",children:s.refId}),e.jsx("td",{className:"px-3 py-3",children:s.nopen}),e.jsx("td",{className:"px-3 py-3",children:s.sendDate})]},`${s.id}-${t}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"5",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(g,{links:a.links})]})})})})})]})}export{b as default};
