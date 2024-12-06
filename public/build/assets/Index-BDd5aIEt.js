import{j as r,Y as g,y as x}from"./app-Cv_FtKNC.js";import{A as c}from"./AuthenticatedLayout-J9zICOLn.js";import{T as b}from"./TextInput-YpzqUUu0.js";import{P as y}from"./Pagination-D7oLwUhC.js";import{T as p}from"./ButtonDetail-ljgeon42.js";import"./transition-BTs6vKcd.js";function f({auth:l,dataTable:s,queryParams:t={}}){const o=(e,a)=>{const d={...t,page:1};a?d[e]=a:delete d[e],x.get(route("barangBza.index"),d,{preserveState:!0,preserveScroll:!0})},n=(e,a)=>{const d=a.target.value;o(e,d)},i=(e,a)=>{a.key==="Enter"&&o(e,a.target.value)};return r.jsxs(c,{user:l.user,children:[r.jsx(g,{title:"SatuSehat"}),r.jsx("div",{className:"py-5",children:r.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:r.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:r.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:r.jsxs("div",{className:"overflow-auto w-full",children:[r.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Barang"}),r.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900 border border-gray-500 dark:border-gray-600",children:[r.jsx("thead",{className:"text-sm text-nowrap font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500",children:r.jsx("tr",{children:r.jsx("th",{colSpan:9,className:"px-3 py-2",children:r.jsx(b,{className:"w-full",defaultValue:t.barang||"",placeholder:"Cari berdasarkan barang",onChange:e=>n("barang",e),onKeyPress:e=>i("barang",e)})})})}),r.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500",children:r.jsxs("tr",{children:[r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"ID"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"BARANG"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"BZA DISPLAY"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"DOSIS KFA"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"SATUAN DOSIS KFA"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"DOSIS PER SATUAN"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"SATUAN"}),r.jsx("th",{className:"px-3 py-2 text-center border border-gray-500 dark:border-gray-600",children:"MENU"})]})}),r.jsx("tbody",{children:s.data.length>0?s.data.map((e,a)=>r.jsxs("tr",{className:`hover:bg-indigo-100 dark:hover:bg-indigo-800  border border-gray-500 dark:border-gray-600 ${a%2===0,"bg-gray-50 dark:bg-indigo-950"}`,children:[r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.id}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.barang}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.bzaDisplay}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.dosisKfa}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.satuanKfa}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.dosisSatuan}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.satuan}),r.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:r.jsx(p,{href:route("barangBza.detail",{id:e.id})})})]},`${e.id}-${a}`)):r.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:r.jsx("td",{colSpan:"9",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),r.jsx(y,{links:s.links})]})})})})})]})}export{f as default};
