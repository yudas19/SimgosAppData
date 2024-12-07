import{j as e,Y as b,y as N}from"./app-BSnGz-ou.js";import{A as u}from"./AuthenticatedLayout-CCJ0PLmy.js";import{T as p}from"./TextInput-38N82J2c.js";import{P as j}from"./Pagination-m4FHcf4N.js";import{T as f,a as o,b as A,c as y,d as t}from"./TableCell-CuSnr96a.js";import"./transition-BFK9tZOD.js";function v({auth:x,dataTable:n,antrianData:l,header:c,queryParams:d={}}){const m=[{name:"NORM"},{name:"NAMA PASIEN"},{name:"NOMOR"},{name:"TANGGAL"},{name:"RUANGAN TUJUAN"},{name:"NOMOR URUT"},{name:"PENDAFTARAN"},{name:"STATUS"}],i=(a,r)=>{const s={...d,page:1};r?s[a]=r:delete s[a],N.get(route("antrian.index"),s,{preserveState:!0,preserveScroll:!0})},h=(a,r)=>{const s=r.target.value;i(a,s)},g=(a,r)=>{r.key==="Enter"&&i(a,r.target.value)};return e.jsxs(u,{user:x.user,children:[e.jsx(b,{title:"Pendaftaran"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsxs("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:["Data Antrian Ruangan ",c]}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-between mb-4",children:[e.jsxs("a",{href:route("antrian.index"),className:"flex-1 p-4 bg-white dark:bg-indigo-800 text-center rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 block",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-700 dark:text-yellow-400",children:"JUMLAH DATA ANTRIAN"}),e.jsxs("p",{className:"text-2xl font-semibold text-indigo-600 dark:text-white mt-2",children:[l.total_antrian," PASIEN"]})]}),e.jsxs("a",{href:route("antrian.filterByStatus","batal"),className:"flex-1 p-4 bg-white dark:bg-indigo-800 text-center rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 block",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-700 dark:text-yellow-400",children:"ANTRIAN BATAL"}),e.jsxs("p",{className:"text-2xl font-semibold text-indigo-600 dark:text-white mt-2",children:[l.total_batal," PASIEN"]})]}),e.jsxs("a",{href:route("antrian.filterByStatus","belumDiterima"),className:"flex-1 p-4 bg-white dark:bg-indigo-800 text-center rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 block",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-700 dark:text-yellow-400",children:"ANTRIAN BELUM DITERIMA"}),e.jsxs("p",{className:"text-2xl font-semibold text-indigo-600 dark:text-white mt-2",children:[l.total_belum_diterima," PASIEN"]})]}),e.jsxs("a",{href:route("antrian.filterByStatus","diterima"),className:"flex-1 p-4 bg-white dark:bg-indigo-800 text-center rounded-lg shadow-sm border border-gray-300 dark:border-gray-700 block",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-700 dark:text-yellow-400",children:"ANTRIAN  SUDAH DITERIMA"}),e.jsxs("p",{className:"text-2xl font-semibold text-indigo-600 dark:text-white mt-2",children:[l.total_diterima," PASIEN"]})]})]}),e.jsxs(f,{children:[e.jsx(o,{children:e.jsx("tr",{children:e.jsx("th",{colSpan:8,className:"px-3 py-2",children:e.jsx(p,{className:"w-full",defaultValue:d.search||"",placeholder:"Cari data berdasarkan nomor antrian, NORM, atau nama pasien",onChange:a=>h("search",a),onKeyPress:a=>g("search",a)})})})}),e.jsx(o,{children:e.jsx("tr",{children:m.map((a,r)=>e.jsx(A,{className:a.className||"",children:a.name},r))})}),e.jsx("tbody",{children:n.data.length>0?n.data.map((a,r)=>e.jsxs(y,{isEven:r%2===0,children:[e.jsx(t,{children:a.norm}),e.jsx(t,{className:"uppercase",children:a.nama}),e.jsx(t,{children:a.nomor}),e.jsx(t,{children:a.tanggal}),e.jsx(t,{children:a.ruangan}),e.jsx(t,{children:a.urut}),e.jsx(t,{children:a.pendaftaran}),e.jsx(t,{children:a.status===0?"Batal":a.status===1?"Belum Diterima":"Sudah Diterima"})]},a.nomor)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"8",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(j,{links:n.links})]})})})})})]})}export{v as default};
