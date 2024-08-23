import{j as e,Y as x,y as p}from"./app-DUlCdx9c.js";import{A as o}from"./AuthenticatedLayout-D1KYo42O.js";import{T as h}from"./TextInput-VqLIXFbl.js";import{P as g}from"./Pagination-CzpV41YR.js";import"./transition-C9MWiMfQ.js";function k({auth:l,dataTable:t,queryParams:d={}}){const n=(a,s)=>{const r={...d,page:1};s?r[a]=s:delete r[a],p.get(route("layananTindakan.index"),r,{preserveState:!0,preserveScroll:!0})},i=(a,s)=>{const r=s.target.value;n(a,r)},c=(a,s)=>{s.key==="Enter"&&n(a,s.target.value)};return e.jsxs(o,{user:l.user,children:[e.jsx(x,{title:"Layanan"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Tindakan Medis"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari pasien",onChange:a=>i("nama",a),onKeyPress:a=>c("nama",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsx("th",{className:"px-3 py-2",children:"PELAKSANA TINDAKAN"}),e.jsx("th",{className:"px-3 py-2",children:"JENIS TINDAKAN"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((a,s)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.id}),e.jsx("td",{className:"px-3 py-3",children:a.tanggal}),e.jsx("td",{className:"px-3 py-3",children:a.norm}),e.jsx("td",{className:"px-3 py-3 uppercase",children:a.nama}),e.jsxs("td",{className:"px-3 py-3",children:[a.gelarDepan," ",e.jsx("span",{className:"uppercase",children:a.dokter}),"  ",a.gelarBelakang]}),e.jsx("td",{className:"px-3 py-3",children:a.jenisTindakan})]},`${a.id}-${s}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(g,{links:t.links})]})})})})})]})}export{k as default};
