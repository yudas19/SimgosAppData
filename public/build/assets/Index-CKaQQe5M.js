<<<<<<<< HEAD:public/build/assets/Index-CKaQQe5M.js
import{j as e,Y as x,y as p}from"./app-C8QGlm8X.js";import{A as o}from"./AuthenticatedLayout-C_WctN0L.js";import{T as h}from"./TextInput-CAQnJejT.js";import{P as m}from"./Pagination-BjLsCIyl.js";import"./transition-B_OTo9Io.js";function b({auth:l,dataTable:t,queryParams:d={}}){const n=(a,s)=>{const r={...d,page:1};s?r[a]=s:delete r[a],p.get(route("layananTindakan.index"),r,{preserveState:!0,preserveScroll:!0})},i=(a,s)=>{const r=s.target.value;n(a,r)},c=(a,s)=>{s.key==="Enter"&&n(a,s.target.value)};return e.jsxs(o,{user:l.user,children:[e.jsx(x,{title:"Layanan"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Tindakan Medis"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari pasien",onChange:a=>i("nama",a),onKeyPress:a=>c("nama",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsx("th",{className:"px-3 py-2",children:"PELAKSANA TINDAKAN"}),e.jsx("th",{className:"px-3 py-2",children:"JENIS TINDAKAN"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((a,s)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.id}),e.jsx("td",{className:"px-3 py-3",children:a.tanggal}),e.jsx("td",{className:"px-3 py-3",children:a.norm}),e.jsx("td",{className:"px-3 py-3 uppercase",children:a.nama}),e.jsx("td",{className:"px-3 py-3 uppercase",children:a.pelaksana}),e.jsx("td",{className:"px-3 py-3",children:a.jenisTindakan})]},`${a.id}-${s}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:t.links})]})})})})})]})}export{b as default};
========
import{j as e,Y as x,y as p}from"./app-C-2F5S2g.js";import{A as o}from"./AuthenticatedLayout-S9_dzZ4r.js";import{T as h}from"./TextInput-CrP2Ki8x.js";import{P as m}from"./Pagination-DoWlQGSP.js";import"./transition-BxtM8ad2.js";function b({auth:l,dataTable:t,queryParams:d={}}){const n=(a,s)=>{const r={...d,page:1};s?r[a]=s:delete r[a],p.get(route("layananTindakan.index"),r,{preserveState:!0,preserveScroll:!0})},i=(a,s)=>{const r=s.target.value;n(a,r)},c=(a,s)=>{s.key==="Enter"&&n(a,s.target.value)};return e.jsxs(o,{user:l.user,children:[e.jsx(x,{title:"Layanan"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Tindakan Medis"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari pasien",onChange:a=>i("nama",a),onKeyPress:a=>c("nama",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsx("th",{className:"px-3 py-2",children:"PELAKSANA TINDAKAN"}),e.jsx("th",{className:"px-3 py-2",children:"JENIS TINDAKAN"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((a,s)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.id}),e.jsx("td",{className:"px-3 py-3",children:a.tanggal}),e.jsx("td",{className:"px-3 py-3",children:a.norm}),e.jsx("td",{className:"px-3 py-3 uppercase",children:a.nama}),e.jsx("td",{className:"px-3 py-3 uppercase",children:a.pelaksana}),e.jsx("td",{className:"px-3 py-3",children:a.jenisTindakan})]},`${a.id}-${s}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:t.links})]})})})})})]})}export{b as default};
>>>>>>>> refs/remotes/origin/master:public/build/assets/Index-D8rf097M.js
