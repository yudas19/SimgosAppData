import{j as e,Y as j,y as b}from"./app-BSnGz-ou.js";import{A as f}from"./AuthenticatedLayout-CCJ0PLmy.js";import{T as N}from"./TextInput-38N82J2c.js";import{P as A}from"./Pagination-m4FHcf4N.js";import{T as y}from"./ButtonDetail-BForSxeg.js";import{B as l}from"./ButtonTime-DwP0b3ux.js";import{T as k,a as o,b as w,c as T,d as t}from"./TableCell-CuSnr96a.js";import"./transition-BFK9tZOD.js";function M({auth:c,dataTable:n,header:m,totalCount:h,rataRata:i,queryParams:d={}}){const g=[{name:"NORM"},{name:"NAMA PASIEN"},{name:"NOMOR"},{name:"TANGGAL"},{name:"RUANGAN TUJUAN"},{name:"RESERVASI"},{name:"STATUS"},{name:"MENU",className:"text-center"}],x=(r,a)=>{const s={...d,page:1};a?s[r]=a:delete s[r],b.get(route("mutasi.index"),s,{preserveState:!0,preserveScroll:!0})},u=(r,a)=>{const s=a.target.value;x(r,s)},p=(r,a)=>{a.key==="Enter"&&x(r,a.target.value)};return e.jsxs(f,{user:c.user,children:[e.jsx(j,{title:"Pendaftaran"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsxs("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:["Data Mutasi ",m," ",h," Pasien"]}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-between mb-4",children:[e.jsxs("div",{className:"flex-1 p-4 bg-white dark:bg-indigo-800 text-center rounded-lg shadow-sm border border-gray-300 dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-700 dark:text-yellow-400",children:"RATA-RATA PER HARI"}),e.jsxs("p",{className:"text-2xl font-semibold text-indigo-600 dark:text-white mt-2",children:[i.rata_rata_per_hari," PASIEN"]})]}),e.jsxs("div",{className:"flex-1 p-4 bg-white dark:bg-indigo-800 text-center rounded-lg shadow-sm border border-gray-300 dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-700 dark:text-yellow-400",children:"RATA-RATA PER MINGGU"}),e.jsxs("p",{className:"text-2xl font-semibold text-indigo-600 dark:text-white mt-2",children:[i.rata_rata_per_minggu," PASIEN"]})]}),e.jsxs("div",{className:"flex-1 p-4 bg-white dark:bg-indigo-800 text-center rounded-lg shadow-sm border border-gray-300 dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-700 dark:text-yellow-400",children:"RATA-RATA PER BULAN"}),e.jsxs("p",{className:"text-2xl font-semibold text-indigo-600 dark:text-white mt-2",children:[i.rata_rata_per_bulan," PASIEN"]})]}),e.jsxs("div",{className:"flex-1 p-4 bg-white dark:bg-indigo-800 text-center rounded-lg shadow-sm border border-gray-300 dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-700 dark:text-yellow-400",children:"RATA-RATA PER TAHUN"}),e.jsxs("p",{className:"text-2xl font-semibold text-indigo-600 dark:text-white mt-2",children:[i.rata_rata_per_tahun," PASIEN"]})]})]}),e.jsxs(k,{children:[e.jsx(o,{children:e.jsx("tr",{children:e.jsx("th",{colSpan:8,className:"px-3 py-2",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(N,{className:"w-full",defaultValue:d.search||"",placeholder:"Cari data berdasarkan nomor mutasi, NORM, atau nama pasien",onChange:r=>u("search",r),onKeyPress:r=>p("search",r)}),e.jsx(l,{href:route("mutasi.filterByTime","hariIni"),text:"Hari Ini"}),e.jsx(l,{href:route("mutasi.filterByTime","mingguIni"),text:"Minggu Ini"}),e.jsx(l,{href:route("mutasi.filterByTime","bulanIni"),text:"Bulan Ini"}),e.jsx(l,{href:route("mutasi.filterByTime","tahunIni"),text:"Tahun Ini"})]})})})}),e.jsx(o,{children:e.jsx("tr",{children:g.map((r,a)=>e.jsx(w,{className:r.className||"",children:r.name},a))})}),e.jsx("tbody",{children:n.data.length>0?n.data.map((r,a)=>e.jsxs(T,{isEven:a%2===0,children:[e.jsx(t,{children:r.norm}),e.jsx(t,{className:"uppercase",children:r.nama}),e.jsx(t,{children:r.nomor}),e.jsx(t,{children:r.tanggal}),e.jsx(t,{children:r.tujuan}),e.jsx(t,{children:r.reservasi}),e.jsx(t,{children:r.status===0?"Batal":r.status===1?"Aktif":"Selesai"}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(y,{href:route("mutasi.detail",{id:r.nomor})})})]},r.nomor)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"8",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(A,{links:n.links})]})})})})})]})}export{M as default};