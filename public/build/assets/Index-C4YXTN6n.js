import{j as e,Y as x,y as c}from"./app-BirafpQZ.js";import{A as o}from"./AuthenticatedLayout-BwvfftJP.js";import{T as g}from"./TextInput-GYZ2Zomc.js";import{P as p}from"./Pagination-CCcb_a_7.js";import{f as h}from"./formatNumber-DqAyQwKe.js";import"./transition-DNzYoXoH.js";function f({auth:i,dataTable:s,queryParams:d={}}){const l=(a,r)=>{const t={...d,page:1};r?t[a]=r:delete t[a],c.get(route("tindakan.index"),t,{preserveState:!0,preserveScroll:!0})},n=(a,r)=>{const t=r.target.value;l(a,t)};return e.jsxs(o,{user:i.user,children:[e.jsx(x,{title:"Master"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Tindakan"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:5,className:"px-3 py-2",children:e.jsx(g,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari tindakan",onChange:a=>n("nama",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500 border-b-2 border-gray-500",children:e.jsxs("tr",{className:"text-nowrap",children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"JENIS"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA TINDAKAN"}),e.jsx("th",{className:"px-3 py-2 text-right",children:"TARIF"})]})}),e.jsx("tbody",{children:s.data.length>0?s.data.map((a,r)=>e.jsxs("tr",{className:`hover:bg-indigo-100 dark:hover:bg-indigo-800 ${r%2===0,"bg-gray-50 dark:bg-indigo-950"}`,children:[e.jsx("td",{className:"px-3 py-3",children:a.id}),e.jsx("td",{className:"px-3 py-3",children:a.jenis}),e.jsx("td",{className:"px-3 py-3",children:a.nama}),e.jsx("td",{className:"px-3 py-3 text-right",children:h(a.tarif)})]},`${a.id}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"5",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(p,{links:s.links})]})})})})})]})}export{f as default};
