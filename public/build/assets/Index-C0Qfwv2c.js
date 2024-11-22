import{j as e,Y as x,y as p}from"./app-DRVCGiTU.js";import{A as o}from"./AuthenticatedLayout-i6LYn1ex.js";import{T as h}from"./TextInput-BjJyySOc.js";import{P as m}from"./Pagination-ChjAy4NW.js";import"./transition-B27wvY1g.js";function k({auth:n,dataTable:t,queryParams:d={}}){const l=(s,a)=>{const r={...d,page:1};a?r[s]=a:delete r[s],p.get(route("layananTindakan.index"),r,{preserveState:!0,preserveScroll:!0})},i=(s,a)=>{const r=a.target.value;l(s,r)},c=(s,a)=>{a.key==="Enter"&&l(s,a.target.value)};return e.jsxs(o,{user:n.user,children:[e.jsx(x,{title:"Layanan"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Tindakan Medis"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:7,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari pasien",onChange:s=>i("nama",s),onKeyPress:s=>c("nama",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsx("th",{className:"px-3 py-2",children:"PELAKSANA TINDAKAN"}),e.jsx("th",{className:"px-3 py-2",children:"JENIS TINDAKAN"}),e.jsx("th",{className:"px-3 py-2",children:"STATUS HASIL"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((s,a)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.id}),e.jsx("td",{className:"px-3 py-3",children:s.tanggal}),e.jsx("td",{className:"px-3 py-3",children:s.norm}),e.jsx("td",{className:"px-3 py-3 uppercase",children:s.nama}),e.jsx("td",{className:"px-3 py-3 uppercase",children:s.pelaksana}),e.jsx("td",{className:"px-3 py-3",children:s.jenisTindakan}),e.jsx("td",{className:"px-3 py-3",children:s.statusHasil===1?"Belum Ada Hasil":s.statusHasil===2?"Belum Final Hasil":"Sudah Final Hasil"})]},`${s.id}-${a}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"7",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:t.links})]})})})})})]})}export{k as default};