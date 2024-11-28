import{j as e,Y as x,y as p}from"./app-C7QzPlDx.js";import{A as o}from"./AuthenticatedLayout-CEDLPtpQ.js";import{T as m}from"./TextInput-DZ5bYh34.js";import{P as h}from"./Pagination-D1vdnClm.js";import{T as g}from"./ButtonDetail-CTgcLF7a.js";import j from"./Cetak-CV2PHr11.js";import"./transition-BlqZoE6n.js";import"./SelectTwoInput-D7ECrpfM.js";import"./InputLabel-B-TXbpBY.js";function w({auth:d,dataTable:t,queryParams:l={}}){const n=(a,s)=>{const r={...l,page:1};s?r[a]=s:delete r[a],p.get(route("layananLab.index"),r,{preserveState:!0,preserveScroll:!0})},i=(a,s)=>{const r=s.target.value;n(a,r)},c=(a,s)=>{s.key==="Enter"&&n(a,s.target.value)};return e.jsxs(o,{user:d.user,children:[e.jsx(x,{title:"Layanan"}),e.jsx("div",{className:"pt-5 pb-2",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Order Laboratorium"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:9,className:"px-3 py-2",children:e.jsx(m,{className:"w-full",defaultValue:l.search||"",placeholder:"Cari data berdasarkan nomor kunjungan, NORM, atau nama pasien",onChange:a=>i("search",a),onKeyPress:a=>c("search",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NOMOR KUNJUNGAN"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL"}),e.jsx("th",{className:"px-3 py-2",children:"OLEH"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsxs("th",{className:"px-3 py-2",children:["STATUS",e.jsx("br",{}),"KUNJUNGAN"]}),e.jsxs("th",{className:"px-3 py-2",children:["STATUS",e.jsx("br",{}),"ORDER"]}),e.jsxs("th",{className:"px-3 py-2",children:["STATUS",e.jsx("br",{}),"HASIL"]}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((a,s)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.nomor}),e.jsx("td",{className:"px-3 py-3",children:a.tanggal}),e.jsxs("td",{className:"px-3 py-3",children:[a.gelarDepan," ",e.jsx("span",{className:"uppercase",children:a.dokter})," ",a.gelarBelakang]}),e.jsx("td",{className:"px-3 py-3",children:a.norm}),e.jsx("td",{className:"px-3 py-3 uppercase",children:a.nama}),e.jsx("td",{className:"px-3 py-3",children:a.statusKunjungan===0?"Batal":a.statusKunjungan===1?"Sedang Dilayani":a.statusKunjungan===2?"Selesai":""}),e.jsx("td",{className:"px-3 py-3",children:a.statusOrder===2?"Sudah Final":a.statusOrder===1?"Belum Final":"Batal"}),e.jsx("td",{className:"px-3 py-3",children:a.statusHasil===1?"Sudah Final":"Belum Ada Hasil"}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(g,{href:route("layananLab.detail",{id:a.nomor})})})]},`${a.nomor}-${s}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"9",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(h,{links:t.links})]})})})})}),e.jsx("div",{className:"w-full",children:e.jsx(j,{})})]})}export{w as default};