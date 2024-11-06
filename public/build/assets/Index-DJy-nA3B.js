import{j as e,Y as x,y as o}from"./app-Dvlr_T_r.js";import{A as p}from"./AuthenticatedLayout-C05LCJn9.js";import{T as m}from"./TextInput-BJsdl_Bp.js";import{P as h}from"./Pagination-Dh_JhYA8.js";import{f as g}from"./formatDate-BY4D4dr9.js";import{T as j}from"./ButtonDetail-BP6Y6O8p.js";import"./transition-C8nCtlCa.js";function S({auth:d,dataTable:t,queryParams:l={}}){const n=(s,a)=>{const r={...l,page:1};a?r[s]=a:delete r[s],o.get(route("rekonBpjs.index"),r,{preserveState:!0,preserveScroll:!0})},i=(s,a)=>{const r=a.target.value;n(s,r)},c=(s,a)=>{a.key==="Enter"&&n(s,a.target.value)};return e.jsxs(p,{user:d.user,children:[e.jsx(x,{title:"BPJS"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Rencana Kontrol"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:7,className:"px-3 py-2",children:e.jsx(m,{className:"w-full",defaultValue:l.nama||"",placeholder:"Cari pasien",onChange:s=>i("nama",s),onKeyPress:s=>c("nama",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NOMOR"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL KONTROL"}),e.jsx("th",{className:"px-3 py-2",children:"NO SEP"}),e.jsx("th",{className:"px-3 py-2",children:"TUJUAN"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((s,a)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.noSurat}),e.jsx("td",{className:"px-3 py-3",children:g(s.tanggal)}),e.jsx("td",{className:"px-3 py-3",children:s.noSep}),e.jsxs("td",{className:"px-3 py-3",children:["POLI ",s.poliTujuan]}),e.jsx("td",{className:"px-3 py-3",children:s.norm}),e.jsx("td",{className:"px-3 py-3 uppercase",children:s.nama}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(j,{href:route("rekonBpjs.detail",{id:s.noSurat})})})]},`${s.noSurat}-${a}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"7",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(h,{links:t.links})]})})})})})]})}export{S as default};
