import{j as e,Y as c,y as o}from"./app-Cwzwl08L.js";import{A as g}from"./AuthenticatedLayout-BefrLGCA.js";import{T as p}from"./TextInput-BeRNTaiN.js";import{P as h}from"./Pagination-CAzJ1KlV.js";import"./transition-BS7h6PSH.js";function N({auth:n,dataTable:t,queryParams:d={}}){const l=(r,s)=>{const a={...d,page:1};s?a[r]=s:delete a[r],o.get(route("logsBridge.index"),a,{preserveState:!0,preserveScroll:!0})},i=(r,s)=>{const a=s.target.value;l(r,a)},x=(r,s)=>{s.key==="Enter"&&l(r,s.target.value)};return e.jsxs(g,{user:n.user,children:[e.jsx(c,{title:"BPJS"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Bridge Logs"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(p,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari url",onChange:r=>i("nama",r),onKeyPress:r=>x("nama",r)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"URL"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL"}),e.jsx("th",{className:"px-3 py-2",children:"RESPONSE"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((r,s)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:r.ID}),e.jsx("td",{className:"px-3 py-3 break-words max-w-xs",children:r.URL}),e.jsx("td",{className:"px-3 py-3",children:r.TGL_REQUEST}),e.jsx("td",{className:"px-3 py-3 break-words max-w-xs",children:r.RESPONSE})]},`${r.ID}-${s}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(h,{links:t.links})]})})})})})]})}export{N as default};