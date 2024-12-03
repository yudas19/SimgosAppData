import{j as e,Y as m,y as h}from"./app-BH1Xn5CL.js";import{A as g}from"./AuthenticatedLayout-CNDWSZs4.js";import{T as u}from"./TextInput-JUQimn_0.js";import{P as j}from"./Pagination-BG19FEKV.js";import{T as y}from"./ButtonDetail-veh9b4VV.js";import{B as t}from"./ButtonTime-C_6PDr4q.js";import"./transition-DjM1sfli.js";function A({auth:d,dataTable:n,header:x,totalCount:c,queryParams:l={}}){const i=(a,r)=>{const s={...l,page:1};r?s[a]=r:delete s[a],h.get(route("kunjungan.index"),s,{preserveState:!0,preserveScroll:!0})},o=(a,r)=>{const s=r.target.value;i(a,s)},p=(a,r)=>{r.key==="Enter"&&i(a,r.target.value)};return e.jsxs(g,{user:d.user,children:[e.jsx(m,{title:"Pendaftaran"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsxs("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:["Data Kunjungan ",x," ",c," Pasien"]}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm text-nowrap font-bold text-gray-700 bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:8,className:"px-3 py-2",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(u,{className:"w-full",defaultValue:l.search||"",placeholder:"Cari data berdasarkan nomor kunjungan, NORM, atau nama pasien",onChange:a=>o("search",a),onKeyPress:a=>p("search",a)}),e.jsx(t,{href:route("kunjungan.filterByTime","hariIni"),text:"Hari Ini"}),e.jsx(t,{href:route("kunjungan.filterByTime","mingguIni"),text:"Minggu Ini"}),e.jsx(t,{href:route("kunjungan.filterByTime","bulanIni"),text:"Bulan Ini"}),e.jsx(t,{href:route("kunjungan.filterByTime","tahunIni"),text:"Tahun Ini"})]})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:8,className:"px-3 py-2",children:e.jsx("div",{className:"flex items-center space-x-2"})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NOMOR"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsx("th",{className:"px-3 py-2",children:"MASUK"}),e.jsx("th",{className:"px-3 py-2",children:"KELUAR"}),e.jsx("th",{className:"px-3 py-2",children:"RUANGAN"}),e.jsx("th",{className:"px-3 py-2",children:"STATUS"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:n.data.length>0?n.data.map((a,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.nomor}),e.jsx("td",{className:"px-3 py-3",children:a.norm}),e.jsx("td",{className:"px-3 py-3 uppercase",children:a.nama}),e.jsx("td",{className:"px-3 py-3",children:a.masuk}),e.jsx("td",{className:"px-3 py-3",children:a.keluar}),e.jsx("td",{className:"px-3 py-3",children:a.ruangan}),e.jsx("td",{className:"px-3 py-3",children:a.status===0?"Batal":a.status===1?"Aktif":"Selesai"}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(y,{href:route("kunjungan.detail",{id:a.nomor})})})]},`${a.nomor}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"8",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(j,{links:n.links})]})})})})})]})}export{A as default};