import{j as r,Y as c,y as x}from"./app-Cv_FtKNC.js";import{A as g}from"./AuthenticatedLayout-J9zICOLn.js";import{T as b}from"./TextInput-YpzqUUu0.js";import{P as p}from"./Pagination-D7oLwUhC.js";import{T as y}from"./ButtonDetail-ljgeon42.js";import"./transition-BTs6vKcd.js";function f({auth:l,dataTable:s,queryParams:t={}}){const o=(e,a)=>{const d={...t,page:1};a?d[e]=a:delete d[e],x.get(route("location.index"),d,{preserveState:!0,preserveScroll:!0})},n=(e,a)=>{const d=a.target.value;o(e,d)},i=(e,a)=>{a.key==="Enter"&&o(e,a.target.value)};return r.jsxs(g,{user:l.user,children:[r.jsx(c,{title:"SatuSehat"}),r.jsx("div",{className:"py-5",children:r.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:r.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:r.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:r.jsxs("div",{className:"overflow-auto w-full",children:[r.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Location"}),r.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900 border border-gray-500 dark:border-gray-600",children:[r.jsx("thead",{className:"text-sm text-nowrap font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500",children:r.jsx("tr",{children:r.jsx("th",{colSpan:6,className:"px-3 py-2",children:r.jsx(b,{className:"w-full",defaultValue:t.name||"",placeholder:"Cari location",onChange:e=>n("name",e),onKeyPress:e=>i("name",e)})})})}),r.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500",children:r.jsxs("tr",{className:"text-nowrap",children:[r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"ID"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"NAME"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"PART OF"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"REF ID"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"SEND DATE"}),r.jsx("th",{className:"px-3 py-2 text-center border border-gray-500 dark:border-gray-600",children:"MENU"})]})}),r.jsx("tbody",{children:s.data.length>0?s.data.map((e,a)=>r.jsxs("tr",{className:`hover:bg-indigo-100 dark:hover:bg-indigo-800 border border-gray-500 dark:border-gray-600 ${a%2===0,"bg-gray-50 dark:bg-indigo-950"}`,children:[r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.id}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.name}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.partOf}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.refId}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.sendDate}),r.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:r.jsx(y,{href:route("location.detail",{id:e.refId})})})]},`${e.refId}-${a}`)):r.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:r.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),r.jsx(p,{links:s.links})]})})})})})]})}export{f as default};
