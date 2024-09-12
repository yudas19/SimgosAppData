import{j as e,Y as x,y as o}from"./app-1zZPpAWS.js";import{A as p}from"./AuthenticatedLayout-D4bIPIz5.js";import{T as g}from"./TextInput-C2NGnniW.js";import{P as m}from"./Pagination-BauugXwx.js";import{B as h}from"./ButtonDetail-D5wyHxe-.js";import"./transition-CbHdEbjY.js";function k({auth:l,dataTable:s,queryParams:n={}}){const d=(a,t)=>{const r={...n,page:1};t?r[a]=t:delete r[a],o.get(route("stockBarang.index"),r,{preserveState:!0,preserveScroll:!0})},i=(a,t)=>{const r=t.target.value;d(a,r)},c=(a,t)=>{t.key==="Enter"&&d(a,t.target.value)};return e.jsxs(p,{user:l.user,children:[e.jsx(x,{title:"Inventory"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Stock Opname"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:5,className:"px-3 py-2",children:e.jsx(g,{className:"w-full",defaultValue:n.namaRuangan||"",placeholder:"Cari ruangan",onChange:a=>i("namaRuangan",a),onKeyPress:a=>c("namaRuangan",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"RUANGAN"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL OPNAME"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL INPUT"}),e.jsx("th",{className:"px-3 py-2",children:"STATUS"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:s.data.length>0?s.data.map((a,t)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.namaRuangan}),e.jsx("td",{className:"px-3 py-3",children:a.tanggal}),e.jsx("td",{className:"px-3 py-3",children:a.dibuat}),e.jsx("td",{className:"px-3 py-3",children:a.status}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(h,{href:route("stockBarang.list",{id:a.id})})})]},`${a.id}-${t}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"5",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:s.links})]})})})})})]})}export{k as default};
