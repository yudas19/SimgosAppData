import{j as a,Y as o,y as m}from"./app-DKKmOrIF.js";import{A as p}from"./AuthenticatedLayout-4cb_uRt5.js";import{T as c}from"./TextInput-C8SWNVjf.js";import{P as g}from"./Pagination-Bt_C256j.js";import"./transition-H8rE-H1q.js";function b({auth:x,ruangan:r,queryParams:n={}}){const d=(e,s)=>{const t={...n,page:1};s?t[e]=s:delete t[e],m.get(route("ruangan.index"),t,{preserveState:!0,preserveScroll:!0})},l=(e,s)=>{const t=s.target.value;d(e,t)},i=(e,s)=>{s.key==="Enter"&&d(e,s.target.value)};return a.jsxs(p,{user:x.user,children:[a.jsx(o,{title:"Inventory"}),a.jsx("div",{className:"py-5",children:a.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:a.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:a.jsxs("div",{className:"overflow-auto",children:[a.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Barang Ruangan"}),a.jsx("div",{className:"mb-4",children:a.jsxs("div",{className:"flex space-x-4",children:[a.jsx(c,{className:"w-full",defaultValue:n.namaRuangan||"",placeholder:"Cari ruangan",onChange:e=>l("namaRuangan",e),onKeyPress:e=>i("namaRuangan",e)}),a.jsx(c,{className:"w-full",defaultValue:n.namaBarang||"",placeholder:"Cari barang",onChange:e=>l("namaBarang",e),onKeyPress:e=>i("namaBarang",e)})]})}),a.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[a.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-3 py-2",children:"RUANGAN"}),a.jsx("th",{className:"px-3 py-2",children:"NAMA BARANG"}),a.jsx("th",{className:"px-3 py-2",children:"SATUAN"}),a.jsx("th",{className:"px-3 py-2 text-center",children:"STOCK"}),a.jsx("th",{className:"px-3 py-2",children:"TANGGAL"})]})}),a.jsx("tbody",{children:r.data.length>0?r.data.map((e,s)=>a.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[a.jsx("td",{className:"px-3 py-3",children:e.namaRuangan}),a.jsx("td",{className:"px-3 py-3",children:e.namaBarang}),a.jsx("td",{className:"px-3 py-3",children:e.satuan}),a.jsx("td",{className:"px-3 py-3 text-center",children:e.stock}),a.jsx("td",{className:"px-3 py-3",children:e.tanggal})]},`${e.id}-${s}`)):a.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:a.jsx("td",{colSpan:"5",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),a.jsx(g,{links:r.links})]})})})})})]})}export{b as default};
