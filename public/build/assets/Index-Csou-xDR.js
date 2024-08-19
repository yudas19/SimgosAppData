import{j as e,Y as h,y as m}from"./app-YrTlGhGE.js";import{A as g}from"./AuthenticatedLayout-B9QGAiHM.js";import{T as p}from"./TextInput-wxAcuZNa.js";import{P as y}from"./Pagination-DXOEmRMO.js";import"./transition-BvXmNMu1.js";function k({auth:c,pesertaBpjs:s,queryParams:d={}}){const l=(a,r)=>{const t={...d,page:1};r?t[a]=r:delete t[a],m.get(route("pesertaBpjs.index"),t,{preserveState:!0,preserveScroll:!0})},x=(a,r)=>{const t=r.target.value;l(a,t)},o=(a,r)=>{r.key==="Enter"&&l(a,r.target.value)},n=a=>{const r=a.split("");for(let t=r.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[r[t],r[i]]=[r[i],r[t]]}return r.join("")};return e.jsxs(g,{user:c.user,children:[e.jsx(h,{title:"BPJS"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Peserta BPJS"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(p,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari pasien",onChange:a=>x("nama",a),onKeyPress:a=>o("nama",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NO KARTU"}),e.jsx("th",{className:"px-3 py-2",children:"NIK"}),e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA"}),e.jsx("th",{className:"px-3 py-2",children:"JENIS PESERTA"}),e.jsx("th",{className:"px-3 py-2",children:"KELAS"})]})}),e.jsx("tbody",{children:s.data.length>0?s.data.map((a,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.noKartu?n(a.noKartu):""}),e.jsx("td",{className:"px-3 py-3",children:a.nik?n(a.nik):""}),e.jsx("td",{className:"px-3 py-3",children:a.norm}),e.jsx("td",{className:"px-3 py-3",children:a.nama}),e.jsx("td",{className:"px-3 py-3",children:a.nmJenisPeserta}),e.jsx("td",{className:"px-3 py-3",children:a.nmKelas})]},`${a.noKartu}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(y,{links:s.links})]})})})})})]})}export{k as default};
