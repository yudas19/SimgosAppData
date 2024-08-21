import{j as e,Y as c,y as o}from"./app-VkKzuAuw.js";import{A as p}from"./AuthenticatedLayout-XgaQl9KX.js";import{T as m}from"./TextInput-CRATeqfG.js";import{P as h}from"./Pagination-DTMN8Cds.js";import"./transition-DFYr2hJ3.js";function b({auth:l,dataTable:t,queryParams:d={}}){const n=(s,a)=>{const r={...d,page:1};a?r[s]=a:delete r[s],o.get(route("mutasi.index"),r,{preserveState:!0,preserveScroll:!0})},i=(s,a)=>{const r=a.target.value;n(s,r)},x=(s,a)=>{a.key==="Enter"&&n(s,a.target.value)};return e.jsxs(p,{user:l.user,children:[e.jsx(c,{title:"Pendaftaran"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Mutasi"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(m,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari pasien",onChange:s=>i("nama",s),onKeyPress:s=>x("nama",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NOMOR"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL"}),e.jsx("th",{className:"px-3 py-2",children:"RUANGAN TUJUAN"}),e.jsx("th",{className:"px-3 py-2",children:"RESERVASI"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((s,a)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.nomor}),e.jsx("td",{className:"px-3 py-3",children:s.norm}),e.jsx("td",{className:"px-3 py-3",children:s.nama}),e.jsx("td",{className:"px-3 py-3",children:s.tanggal}),e.jsx("td",{className:"px-3 py-3",children:s.tujuan}),e.jsx("td",{className:"px-3 py-3",children:s.reservasi})]},`${s.nomor}-${a}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(h,{links:t.links})]})})})})})]})}export{b as default};
