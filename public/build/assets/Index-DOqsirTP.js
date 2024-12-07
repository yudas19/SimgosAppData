import{j as r,Y as b,y as p}from"./app-BZRUO3DV.js";import{A as m}from"./AuthenticatedLayout-BAx1oDWl.js";import{T as h}from"./TextInput-ULnzWxAt.js";import{P as u}from"./Pagination-2EDbv7qa.js";import{T as j}from"./ButtonDetail-CRNKnZga.js";import N from"./Cetak-DKrQ2HwC.js";import{B as d}from"./ButtonTime-BbvBmmbv.js";import"./transition-Daa6mMa6.js";import"./SelectTwoInput-CB2Gj2jA.js";import"./InputLabel-C8WDVo1R.js";function O({auth:o,dataTable:t,header:i,totalCount:x,text:g,queryParams:n={}}){const l=(e,a)=>{const s={...n,page:1};a?s[e]=a:delete s[e],p.get(route("layananRad.index"),s,{preserveState:!0,preserveScroll:!0})},c=(e,a)=>{const s=a.target.value;l(e,s)},y=(e,a)=>{a.key==="Enter"&&l(e,a.target.value)};return r.jsxs(m,{user:o.user,children:[r.jsx(b,{title:"Layanan"}),r.jsx("div",{className:"pt-5 pb-2",children:r.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:r.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:r.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:r.jsxs("div",{className:"overflow-auto w-full",children:[r.jsxs("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:["Data Order Radiologi ",i," ",x," ",g]}),r.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900 border border-gray-500 dark:border-gray-600",children:[r.jsx("thead",{className:"text-sm text-nowrap font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100",children:r.jsx("tr",{children:r.jsx("th",{colSpan:9,className:"px-3 py-2",children:r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(h,{className:"w-full",defaultValue:n.search||"",placeholder:"Cari data berdasarkan nomor order, NORM, atau nama pasien",onChange:e=>c("search",e),onKeyPress:e=>y("search",e)}),r.jsx(d,{href:route("layananRad.filterByTime","hariIni"),text:"Hari Ini"}),r.jsx(d,{href:route("layananRad.filterByTime","mingguIni"),text:"Minggu Ini"}),r.jsx(d,{href:route("layananRad.filterByTime","bulanIni"),text:"Bulan Ini"}),r.jsx(d,{href:route("layananRad.filterByTime","tahunIni"),text:"Tahun Ini"})]})})})}),r.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500",children:r.jsxs("tr",{children:[r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"NORM"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"NAMA PASIEN"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"NOMOR ORDER"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"TANGGAL"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"ORDER OLEH"}),r.jsxs("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:["STATUS",r.jsx("br",{}),"KUNJUNGAN"]}),r.jsxs("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:["STATUS",r.jsx("br",{}),"ORDER"]}),r.jsxs("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:["STATUS",r.jsx("br",{}),"HASIL"]}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600 text-center",children:"MENU"})]})}),r.jsx("tbody",{children:t.data.length>0?t.data.map((e,a)=>r.jsxs("tr",{className:`hover:bg-indigo-100 dark:hover:bg-indigo-800 border border-gray-500 dark:border-gray-600 ${a%2===0,"bg-gray-50 dark:bg-indigo-950"}`,children:[r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.norm}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600 uppercase",children:e.nama}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.nomor}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.tanggal}),r.jsxs("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:[e.gelarDepan," ",r.jsx("span",{className:"uppercase",children:e.dokter}),"  ",e.gelarBelakang]}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.statusKunjungan===0?"Batal":e.statusKunjungan===1?"Sedang Dilayani":e.statusKunjungan===2?"Selesai":""}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.statusOrder===0?"Batal":e.statusOrder===1?"Belum Final":e.statusOrder===2?"Sudah Final":""}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.statusHasil===1?"Belum Final":e.statusHasil===2?"Sudah Final":"Belum Ada Hasil"}),r.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:r.jsx(j,{href:route("layananRad.detail",{id:e.nomor})})})]},`${e.nomor}-${a}`)):r.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:r.jsx("td",{colSpan:"8",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),r.jsx(u,{links:t.links})]})})})})}),r.jsx("div",{className:"w-full",children:r.jsx(N,{})})]})}export{O as default};
