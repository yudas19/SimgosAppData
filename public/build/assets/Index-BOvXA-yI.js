import{j as e,Y as x,y as p}from"./app-Dvlr_T_r.js";import{A as o}from"./AuthenticatedLayout-C05LCJn9.js";import{T as h}from"./TextInput-BJsdl_Bp.js";import{P as m}from"./Pagination-Dh_JhYA8.js";import"./transition-C8nCtlCa.js";function k({auth:l,dataTable:t,queryParams:d={}}){const n=(s,r)=>{const a={...d,page:1};r?a[s]=r:delete a[s],p.get(route("perawat.index"),a,{preserveState:!0,preserveScroll:!0})},i=(s,r)=>{const a=r.target.value;n(s,a)},c=(s,r)=>{r.key==="Enter"&&n(s,r.target.value)};return e.jsxs(o,{user:l.user,children:[e.jsx(x,{title:"Master"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Perawat"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:5,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari perawat",onChange:s=>i("nama",s),onKeyPress:s=>c("nama",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PEGAWAI"}),e.jsx("th",{className:"px-3 py-2",children:"NIP PEGAWAI"}),e.jsx("th",{className:"px-3 py-2",children:"NIK PENGGUNA"}),e.jsx("th",{className:"px-3 py-2",children:"RUANGAN PERAWAT"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((s,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.id}),e.jsxs("td",{className:"px-3 py-3",children:[s.depan," ",e.jsx("span",{className:"uppercase",children:s.nama})," ",s.belakang]}),e.jsx("td",{className:"px-3 py-3",children:s.nip?s.nip:""}),e.jsx("td",{className:"px-3 py-3",children:s.nik?s.nik:e.jsx("span",{className:"text-red-500",children:"Belum ada NIK"})}),e.jsx("td",{className:"px-3 py-3",children:s.ruangan})]},`${s.id}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"4",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:t.links})]})})})})})]})}export{k as default};
