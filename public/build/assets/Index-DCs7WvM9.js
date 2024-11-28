import{j as e,Y as i,y as p}from"./app-Dw_I0XRi.js";import{A as o}from"./AuthenticatedLayout-CCYuSiPI.js";import{T as h}from"./TextInput-Bl9dj0qe.js";import{P as m}from"./Pagination-C_vYqGFd.js";import{T as g}from"./ButtonDetail-cki3FOth.js";import"./transition-CFU2u1Zh.js";function f({auth:n,dataTable:t,queryParams:l={}}){const d=(a,s)=>{const r={...l,page:1};s?r[a]=s:delete r[a],p.get(route("pengajuanSep.index"),r,{preserveState:!0,preserveScroll:!0})},x=(a,s)=>{const r=s.target.value;d(a,r)},c=(a,s)=>{s.key==="Enter"&&d(a,s.target.value)};return e.jsxs(o,{user:n.user,children:[e.jsx(i,{title:"BPJS"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Pengajuan SEP"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:7,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:l.search||"",placeholder:"Cari data berdasarkan nomor kartu, NORM atau nama pasien",onChange:a=>x("search",a),onKeyPress:a=>c("search",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NO KARTU"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL SEP"}),e.jsx("th",{className:"px-3 py-2",children:"KETERANGAN"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((a,s)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.noKartu}),e.jsx("td",{className:"px-3 py-3",children:a.tglSep}),e.jsx("td",{className:"px-3 py-3 break-words max-w-xs",children:a.keterangan}),e.jsx("td",{className:"px-3 py-3",children:a.tgl}),e.jsx("td",{className:"px-3 py-3",children:a.norm}),e.jsx("td",{className:"px-3 py-3 uppercase",children:a.nama}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(g,{href:route("pengajuanSep.detail",{id:a.tgl})})})]},`${a.tgl}-${s}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"7",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:t.links})]})})})})})]})}export{f as default};
