import{j as r,Y as c,y as g}from"./app-BZRUO3DV.js";import{A as x}from"./AuthenticatedLayout-BAx1oDWl.js";import{T as p}from"./TextInput-ULnzWxAt.js";import{P as b}from"./Pagination-2EDbv7qa.js";import{f as y}from"./formatDate-Dh0UuduE.js";import{T as h}from"./ButtonDetail-CRNKnZga.js";import"./transition-Daa6mMa6.js";function S({auth:n,dataTable:s,queryParams:t={}}){const o=(e,a)=>{const d={...t,page:1};a?d[e]=a:delete d[e],g.get(route("rekonBpjs.index"),d,{preserveState:!0,preserveScroll:!0})},l=(e,a)=>{const d=a.target.value;o(e,d)},i=(e,a)=>{a.key==="Enter"&&o(e,a.target.value)};return r.jsxs(x,{user:n.user,children:[r.jsx(c,{title:"BPJS"}),r.jsx("div",{className:"py-5",children:r.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:r.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:r.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:r.jsxs("div",{className:"overflow-auto w-full",children:[r.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Rencana Kontrol"}),r.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900 border border-gray-500 dark:border-gray-600",children:[r.jsx("thead",{className:"text-sm text-nowrap font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100",children:r.jsx("tr",{children:r.jsx("th",{colSpan:7,className:"px-3 py-2",children:r.jsx(p,{className:"w-full",defaultValue:t.search||"",placeholder:"Cari data berdasarkan nomor kontrol, nomor SEP, NORM atau nama pasien",onChange:e=>l("search",e),onKeyPress:e=>i("search",e)})})})}),r.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500",children:r.jsxs("tr",{children:[r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"NORM"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"NAMA PASIEN"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"NOMOR KONTROL"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"TANGGAL KONTROL"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"NOMOR SEP"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"TUJUAN"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600 text-center",children:"MENU"})]})}),r.jsx("tbody",{children:s.data.length>0?s.data.map((e,a)=>r.jsxs("tr",{className:`hover:bg-indigo-100 dark:hover:bg-indigo-800 border border-gray-500 dark:border-gray-600 ${a%2===0,"bg-gray-50 dark:bg-indigo-950"}`,children:[r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.norm}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600 uppercase",children:e.nama}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.noSurat}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:y(e.tanggal)}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.noSep}),r.jsxs("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:["POLI ",e.poliTujuan]}),r.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:r.jsx(h,{href:route("rekonBpjs.detail",{id:e.noSurat})})})]},`${e.noSurat}-${a}`)):r.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:r.jsx("td",{colSpan:"7",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),r.jsx(b,{links:s.links})]})})})})})]})}export{S as default};
