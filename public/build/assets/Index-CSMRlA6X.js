import{j as e,Y as m,y as p}from"./app-Cv_FtKNC.js";import{A as u}from"./AuthenticatedLayout-J9zICOLn.js";import{T as j}from"./TextInput-YpzqUUu0.js";import{P as b}from"./Pagination-D7oLwUhC.js";import{T as y}from"./ButtonDetail-ljgeon42.js";import{B as n}from"./ButtonTime-CB1tXuYX.js";import"./transition-BTs6vKcd.js";function I({auth:x,dataTable:l,header:o,totalCount:c,rataRata:s,queryParams:d={}}){const i=(r,t)=>{const a={...d,page:1};t?a[r]=t:delete a[r],p.get(route("kunjungan.index"),a,{preserveState:!0,preserveScroll:!0})},g=(r,t)=>{const a=t.target.value;i(r,a)},h=(r,t)=>{t.key==="Enter"&&i(r,t.target.value)};return e.jsxs(u,{user:x.user,children:[e.jsx(m,{title:"Pendaftaran"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsxs("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:["Data Kunjungan ",o," ",c," Pasien"]}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-between mb-4",children:[e.jsxs("div",{className:"flex-1 p-4 bg-white dark:bg-indigo-800 text-center rounded-lg shadow-sm border border-gray-300 dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-700 dark:text-yellow-400",children:"RATA-RATA PER HARI"}),e.jsxs("p",{className:"text-2xl font-semibold text-indigo-600 dark:text-white mt-2",children:[s.rata_rata_per_hari," PASIEN"]})]}),e.jsxs("div",{className:"flex-1 p-4 bg-white dark:bg-indigo-800 text-center rounded-lg shadow-sm border border-gray-300 dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-700 dark:text-yellow-400",children:"RATA-RATA PER MINGGU"}),e.jsxs("p",{className:"text-2xl font-semibold text-indigo-600 dark:text-white mt-2",children:[s.rata_rata_per_minggu," PASIEN"]})]}),e.jsxs("div",{className:"flex-1 p-4 bg-white dark:bg-indigo-800 text-center rounded-lg shadow-sm border border-gray-300 dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-700 dark:text-yellow-400",children:"RATA-RATA PER BULAN"}),e.jsxs("p",{className:"text-2xl font-semibold text-indigo-600 dark:text-white mt-2",children:[s.rata_rata_per_bulan," PASIEN"]})]}),e.jsxs("div",{className:"flex-1 p-4 bg-white dark:bg-indigo-800 text-center rounded-lg shadow-sm border border-gray-300 dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-700 dark:text-yellow-400",children:"RATA-RATA PER TAHUN"}),e.jsxs("p",{className:"text-2xl font-semibold text-indigo-600 dark:text-white mt-2",children:[s.rata_rata_per_tahun," PASIEN"]})]})]}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm text-nowrap font-bold text-gray-700 bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:8,className:"px-3 py-2",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(j,{className:"w-full",defaultValue:d.search||"",placeholder:"Cari data berdasarkan nomor kunjungan, NORM, atau nama pasien",onChange:r=>g("search",r),onKeyPress:r=>h("search",r)}),e.jsx(n,{href:route("kunjungan.filterByTime","hariIni"),text:"Hari Ini"}),e.jsx(n,{href:route("kunjungan.filterByTime","mingguIni"),text:"Minggu Ini"}),e.jsx(n,{href:route("kunjungan.filterByTime","bulanIni"),text:"Bulan Ini"}),e.jsx(n,{href:route("kunjungan.filterByTime","tahunIni"),text:"Tahun Ini"})]})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NOMOR"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsx("th",{className:"px-3 py-2",children:"MASUK"}),e.jsx("th",{className:"px-3 py-2",children:"KELUAR"}),e.jsx("th",{className:"px-3 py-2",children:"RUANGAN"}),e.jsx("th",{className:"px-3 py-2",children:"STATUS"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:l.data.length>0?l.data.map((r,t)=>e.jsxs("tr",{className:`hover:bg-indigo-100 dark:hover:bg-indigo-800 ${t%2===0,"bg-gray-50 dark:bg-indigo-950"}`,children:[e.jsx("td",{className:"px-3 py-3",children:r.nomor}),e.jsx("td",{className:"px-3 py-3",children:r.norm}),e.jsx("td",{className:"px-3 py-3 uppercase",children:r.nama}),e.jsx("td",{className:"px-3 py-3",children:r.masuk}),e.jsx("td",{className:"px-3 py-3",children:r.keluar}),e.jsx("td",{className:"px-3 py-3",children:r.ruangan}),e.jsx("td",{className:"px-3 py-3",children:r.status===0?"Batal":r.status===1?"Aktif":"Selesai"}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(y,{href:route("kunjungan.detail",{id:r.nomor})})})]},`${r.nomor}-${t}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"8",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(b,{links:l.links})]})})})})})]})}export{I as default};