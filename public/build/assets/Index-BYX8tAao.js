import{j as e,Y as c,y as p}from"./app-C-2F5S2g.js";import{A as o}from"./AuthenticatedLayout-S9_dzZ4r.js";import{T as m}from"./TextInput-CrP2Ki8x.js";import{P as h}from"./Pagination-DoWlQGSP.js";import{B as g}from"./ButtonDetail-DipoDQ1k.js";import"./transition-BxtM8ad2.js";function k({auth:d,dataTable:t,queryParams:n={}}){const l=(s,a)=>{const r={...n,page:1};a?r[s]=a:delete r[s],p.get(route("kunjungan.index"),r,{preserveState:!0,preserveScroll:!0})},i=(s,a)=>{const r=a.target.value;l(s,r)},x=(s,a)=>{a.key==="Enter"&&l(s,a.target.value)};return e.jsxs(o,{user:d.user,children:[e.jsx(c,{title:"Pendaftaran"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Kunjungan"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:8,className:"px-3 py-2",children:e.jsx(m,{className:"w-full",defaultValue:n.nama||"",placeholder:"Cari pasien",onChange:s=>i("nama",s),onKeyPress:s=>x("nama",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NOMOR"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsx("th",{className:"px-3 py-2",children:"MASUK"}),e.jsx("th",{className:"px-3 py-2",children:"KELUAR"}),e.jsx("th",{className:"px-3 py-2",children:"RUANGAN"}),e.jsx("th",{className:"px-3 py-2",children:"STATUS"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((s,a)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.nomor}),e.jsx("td",{className:"px-3 py-3",children:s.norm}),e.jsx("td",{className:"px-3 py-3 uppercase",children:s.nama}),e.jsx("td",{className:"px-3 py-3",children:s.masuk}),e.jsx("td",{className:"px-3 py-3",children:s.keluar}),e.jsx("td",{className:"px-3 py-3",children:s.ruangan}),e.jsx("td",{className:"px-3 py-3",children:s.status===0?"Batal":s.status===1?"Aktif":"Selesai"}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(g,{href:route("kunjungan.detail",{id:s.nomor})})})]},`${s.nomor}-${a}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"7",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(h,{links:t.links})]})})})})})]})}export{k as default};
