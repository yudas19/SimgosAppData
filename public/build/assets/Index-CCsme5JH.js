import{j as r,Y as p,y as b}from"./app-BZRUO3DV.js";import{A as y}from"./AuthenticatedLayout-BAx1oDWl.js";import{T as h}from"./TextInput-ULnzWxAt.js";import{P as m}from"./Pagination-2EDbv7qa.js";import{f as u}from"./formatDate-Dh0UuduE.js";import{T as j}from"./ButtonDetail-CRNKnZga.js";import{B as d}from"./ButtonTime-BbvBmmbv.js";import"./transition-Daa6mMa6.js";function w({auth:i,dataTable:t,header:l,totalCount:g,queryParams:n={}}){const o=(e,a)=>{const s={...n,page:1};a?s[e]=a:delete s[e],b.get(route("kunjunganBpjs.index"),s,{preserveState:!0,preserveScroll:!0})},x=(e,a)=>{const s=a.target.value;o(e,s)},c=(e,a)=>{a.key==="Enter"&&o(e,a.target.value)};return r.jsxs(y,{user:i.user,children:[r.jsx(p,{title:"BPJS"}),r.jsx("div",{className:"py-5",children:r.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:r.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:r.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:r.jsxs("div",{className:"overflow-auto w-full",children:[r.jsxs("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:["Data Kunjungan BPJS ",l," ",g," Pasien"]}),r.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900 border border-gray-500 dark:border-gray-600",children:[r.jsx("thead",{className:"text-sm text-nowrap font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100",children:r.jsx("tr",{children:r.jsx("th",{colSpan:7,className:"px-3 py-2",children:r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(h,{className:"w-full",defaultValue:n.search||"",placeholder:"Cari data berdasarkan SEP, rujukan, NORM atau nama pasien",onChange:e=>x("search",e),onKeyPress:e=>c("search",e)}),r.jsx(d,{href:route("kunjunganBpjs.filterByTime","hariIni"),text:"Hari Ini"}),r.jsx(d,{href:route("kunjunganBpjs.filterByTime","mingguIni"),text:"Minggu Ini"}),r.jsx(d,{href:route("kunjunganBpjs.filterByTime","bulanIni"),text:"Bulan Ini"}),r.jsx(d,{href:route("kunjunganBpjs.filterByTime","tahunIni"),text:"Tahun Ini"})]})})})}),r.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500",children:r.jsxs("tr",{children:[r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"NORM"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"NAMA PASIEN"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"SEP"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"TANGGAL SEP"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"RUJUKAN"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600",children:"TANGGAL RUJUKAN"}),r.jsx("th",{className:"px-3 py-2 border border-gray-500 dark:border-gray-600 text-center",children:"MENU"})]})}),r.jsx("tbody",{children:t.data.length>0?t.data.map((e,a)=>r.jsxs("tr",{className:`hover:bg-indigo-100 dark:hover:bg-indigo-800 border border-gray-500 dark:border-gray-600 ${a%2===0,"bg-gray-50 dark:bg-indigo-950"}`,children:[r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.norm}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600 uppercase",children:e.nama}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.noSEP}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.tglSEP}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:e.noRujukan}),r.jsx("td",{className:"px-3 py-3 border border-gray-500 dark:border-gray-600",children:u(e.tglRujukan)}),r.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:r.jsx(j,{href:route("kunjunganBpjs.detail",{id:e.noSEP})})})]},`${e.noSEP}-${a}`)):r.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:r.jsx("td",{colSpan:"7",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),r.jsx(m,{links:t.links})]})})})})})]})}export{w as default};
