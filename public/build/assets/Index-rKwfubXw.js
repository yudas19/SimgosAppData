import{j as e,Y as x,y as o}from"./app-DePqbkop.js";import{A as p}from"./AuthenticatedLayout-DHFb87Se.js";import{T as h}from"./TextInput-DI2OdG3a.js";import{P as m}from"./Pagination-ICti2Y6I.js";import{T as g}from"./ButtonDetail-CQc9aGM1.js";import"./transition-BJM57z2c.js";function f({auth:i,dataTable:t,queryParams:n={}}){const d=(a,r)=>{const s={...n,page:1};r?s[a]=r:delete s[a],o.get(route("tindakanToLoinc.index"),s,{preserveState:!0,preserveScroll:!0})},l=(a,r)=>{const s=r.target.value;d(a,s)},c=(a,r)=>{r.key==="Enter"&&d(a,r.target.value)};return e.jsxs(p,{user:i.user,children:[e.jsx(x,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Tindakan To Loinc"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:n.nama||"",placeholder:"Cari berdasarkan nama tindakan",onChange:a=>l("nama",a),onKeyPress:a=>c("nama",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"TINDAKAN ID"}),e.jsx("th",{className:"px-3 py-2",children:"TINDAKAN NAMA"}),e.jsx("th",{className:"px-3 py-2",children:"LOINC ID"}),e.jsx("th",{className:"px-3 py-2",children:"LOINC KATEGORI"}),e.jsx("th",{className:"px-3 py-2",children:"LOINC NAMA"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((a,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.tindakan_id}),e.jsx("td",{className:"px-3 py-3",children:a.tindakan_nama}),e.jsx("td",{className:"px-3 py-3",children:a.loinc_id}),e.jsx("td",{className:"px-3 py-3",children:a.loinc_kategori}),e.jsx("td",{className:"px-3 py-3",children:a.loinc_nama}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(g,{href:route("tindakanToLoinc.detail",{id:a.tindakan_id})})})]},`${a.refId}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:t.links})]})})})})})]})}export{f as default};