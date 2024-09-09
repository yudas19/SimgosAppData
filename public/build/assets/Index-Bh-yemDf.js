import{j as e,Y as c,y as p}from"./app-Cs7WRBlx.js";import{A as o}from"./AuthenticatedLayout-9fbjDPJ4.js";import{T as m}from"./TextInput-D1iBSl7_.js";import{P as h}from"./Pagination-YemIX9S2.js";import{f as g}from"./formatDate-BY4D4dr9.js";import{B as j}from"./ButtonDetail-BQVzCt1q.js";import"./transition-ByDOqyE3.js";function w({auth:d,dataTable:t,queryParams:n={}}){const l=(a,s)=>{const r={...n,page:1};s?r[a]=s:delete r[a],p.get(route("rujukanBpjs.index"),r,{preserveState:!0,preserveScroll:!0})},i=(a,s)=>{const r=s.target.value;l(a,r)},x=(a,s)=>{s.key==="Enter"&&l(a,s.target.value)};return e.jsxs(o,{user:d.user,children:[e.jsx(c,{title:"BPJS"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Rujukan Masuk"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:7,className:"px-3 py-2",children:e.jsx(m,{className:"w-full",defaultValue:n.nama||"",placeholder:"Cari pasien",onChange:a=>i("nama",a),onKeyPress:a=>x("nama",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NO KUNJUNGAN"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL"}),e.jsx("th",{className:"px-3 py-2",children:"NO BPJS"}),e.jsx("th",{className:"px-3 py-2",children:"PERUJUK"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((a,s)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.noKunjungan}),e.jsx("td",{className:"px-3 py-3",children:g(a.tglKunjungan)}),e.jsx("td",{className:"px-3 py-3",children:a.noKartu}),e.jsx("td",{className:"px-3 py-3",children:a.provPerujuk}),e.jsx("td",{className:"px-3 py-3",children:a.norm}),e.jsx("td",{className:"px-3 py-3 uppercase",children:a.nama}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(j,{href:route("rujukanBpjs.detail",{id:a.noKunjungan})})})]},`${a.noKunjungan}-${s}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"7",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(h,{links:t.links})]})})})})})]})}export{w as default};
