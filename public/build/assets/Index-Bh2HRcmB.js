import{j as e,Y as x,y as p}from"./app-DvB8DnlN.js";import{A as o}from"./AuthenticatedLayout-C5ukB2gR.js";import{T as h}from"./TextInput-CGGNwWF2.js";import{P as m}from"./Pagination-CmDe3E0l.js";import{T as g}from"./ButtonDetail-DIQJwfxi.js";import"./transition-BRQ0UwOz.js";function f({auth:n,dataTable:t,queryParams:l={}}){const d=(s,a)=>{const r={...l,page:1};a?r[s]=a:delete r[s],p.get(route("pesertaBpjs.index"),r,{preserveState:!0,preserveScroll:!0})},i=(s,a)=>{const r=a.target.value;d(s,r)},c=(s,a)=>{a.key==="Enter"&&d(s,a.target.value)};return e.jsxs(o,{user:n.user,children:[e.jsx(x,{title:"BPJS"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Peserta BPJS"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:7,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:l.search||"",placeholder:"Cari data berdasarkan nomor kartu, NIK, NORM atau nama pasien",onChange:s=>i("search",s),onKeyPress:s=>c("search",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NO KARTU"}),e.jsx("th",{className:"px-3 py-2",children:"NIK"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PESERTA"}),e.jsx("th",{className:"px-3 py-2",children:"JENIS PESERTA"}),e.jsx("th",{className:"px-3 py-2",children:"STATUS PESERTA"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((s,a)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.noKartu}),e.jsx("td",{className:"px-3 py-3",children:s.nik}),e.jsx("td",{className:"px-3 py-3",children:s.norm}),e.jsx("td",{className:"px-3 py-3 uppercase",children:s.nama}),e.jsx("td",{className:"px-3 py-3",children:s.nmJenisPeserta}),e.jsx("td",{className:"px-3 py-3",children:s.ketStatusPeserta}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(g,{href:route("pesertaBpjs.detail",{id:s.noKartu})})})]},`${s.noKartu}-${a}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"7",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:t.links})]})})})})})]})}export{f as default};
