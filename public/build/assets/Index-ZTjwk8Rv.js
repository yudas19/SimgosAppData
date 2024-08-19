import{j as e,Y as n,y as o}from"./app-C5nMPAon.js";import{A as h}from"./AuthenticatedLayout-_1RWvRA1.js";import{T as p}from"./TextInput-Dk2uvUIJ.js";import{P as m}from"./Pagination-DVvg9H6a.js";import"./transition-COwOUNjP.js";function u({auth:i,kunjunganBpjs:t,queryParams:d={}}){const l=(a,r)=>{const s={...d,page:1};r?s[a]=r:delete s[a],o.get(route("kunjunganBpjs.index"),s,{preserveState:!0,preserveScroll:!0})},x=(a,r)=>{const s=r.target.value;l(a,s)},c=(a,r)=>{r.key==="Enter"&&l(a,r.target.value)};return e.jsxs(h,{user:i.user,children:[e.jsx(n,{title:"BPJS"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Kunjungan BPJS"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(p,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari pasien",onChange:a=>x("nama",a),onKeyPress:a=>c("nama",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"SEP"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL SEP"}),e.jsx("th",{className:"px-3 py-2",children:"RUJUKAN"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL RUJUKAN"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((a,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.noSEP}),e.jsx("td",{className:"px-3 py-3",children:a.tglSEP}),e.jsx("td",{className:"px-3 py-3",children:a.noRujukan}),e.jsx("td",{className:"px-3 py-3",children:a.tglRujukan}),e.jsx("td",{className:"px-3 py-3",children:a.norm}),e.jsx("td",{className:"px-3 py-3",children:a.nama})]},`${a.noKartu}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:t.links})]})})})})})]})}export{u as default};
