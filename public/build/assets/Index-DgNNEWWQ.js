import{j as e,Y as o,y as p}from"./app-BkMuWUMQ.js";import{A as h}from"./AuthenticatedLayout-CzWszyg0.js";import{T as m}from"./TextInput-B6XaJBeM.js";import{P as g}from"./Pagination-DYJzXPpu.js";import{f as i}from"./formatNumber-BQjRko1d.js";import"./transition-Bu_xMLHw.js";function k({auth:x,barang:r,queryParams:d={}}){const l=(t,a)=>{const s={...d,page:1};a?s[t]=a:delete s[t],p.get(route("barang.index"),s,{preserveState:!0,preserveScroll:!0})},n=(t,a)=>{const s=a.target.value;l(t,s)},c=(t,a)=>{a.key==="Enter"&&l(t,a.target.value)};return e.jsxs(h,{user:x.user,children:[e.jsx(o,{title:"Inventory"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Barang"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(m,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari barang",onChange:t=>n("nama",t),onKeyPress:t=>c("nama",t)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA BARANG"}),e.jsx("th",{className:"px-3 py-2",children:"KATEGORI"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"SATUAN"}),e.jsx("th",{className:"px-3 py-2 text-right",children:"HARGA BELI"}),e.jsx("th",{className:"px-3 py-2 text-right",children:"HARGA JUAL"})]})}),e.jsx("tbody",{children:r.data.length>0?r.data.map((t,a)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:t.id}),e.jsx("td",{className:"px-3 py-3",children:t.nama}),e.jsx("td",{className:"px-3 py-3",children:t.kategori}),e.jsx("td",{className:"px-3 py-3 text-center",children:t.satuan}),e.jsx("td",{className:"px-3 py-3 text-right",children:i(t.beli)}),e.jsx("td",{className:"px-3 py-3 text-right",children:i(t.jual)})]},`${t.id}-${a}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(g,{links:r.links})]})})})})})]})}export{k as default};