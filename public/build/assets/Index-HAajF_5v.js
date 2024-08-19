import{j as e,Y as c,y as o}from"./app-zeQolDGs.js";import{A as p}from"./AuthenticatedLayout-CLAAmgNs.js";import{T as h}from"./TextInput-BGPbhwXv.js";import{P as m}from"./Pagination-BHy9v7qd.js";import"./transition-DujK9JML.js";function u({auth:n,konsul:s,queryParams:d={}}){const l=(a,r)=>{const t={...d,page:1};r?t[a]=r:delete t[a],o.get(route("konsul.index"),t,{preserveState:!0,preserveScroll:!0})},i=(a,r)=>{const t=r.target.value;l(a,t)},x=(a,r)=>{r.key==="Enter"&&l(a,r.target.value)};return e.jsxs(p,{user:n.user,children:[e.jsx(c,{title:"Pendaftaran"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Konsul"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari pasien",onChange:a=>i("nama",a),onKeyPress:a=>x("nama",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NOMOR"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL"}),e.jsx("th",{className:"px-3 py-2",children:"RUANGAN ASAL"}),e.jsx("th",{className:"px-3 py-2",children:"RUANGAN TUJUAN"})]})}),e.jsx("tbody",{children:s.data.length>0?s.data.map((a,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.nomor}),e.jsx("td",{className:"px-3 py-3",children:a.nama}),e.jsx("td",{className:"px-3 py-3",children:a.tanggal}),e.jsx("td",{className:"px-3 py-3",children:a.asal}),e.jsx("td",{className:"px-3 py-3",children:a.tujuan})]},`${a.nomor}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:s.links})]})})})})})]})}export{u as default};
