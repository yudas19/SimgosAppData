<<<<<<<< HEAD:public/build/assets/Index-4e95Z979.js
import{j as e,Y as p,y as h}from"./app-C8QGlm8X.js";import{A as m}from"./AuthenticatedLayout-C_WctN0L.js";import{T as g}from"./TextInput-CAQnJejT.js";import{P as j}from"./Pagination-BjLsCIyl.js";import"./transition-B_OTo9Io.js";function b({auth:c,dataTable:t,queryParams:d={}}){const n=(s,r)=>{const a={...d,page:1};r?a[s]=r:delete a[s],h.get(route("dokter.index"),a,{preserveState:!0,preserveScroll:!0})},x=(s,r)=>{const a=r.target.value;n(s,a)},o=(s,r)=>{r.key==="Enter"&&n(s,r.target.value)},l=s=>{const r=s.split("");for(let a=r.length-1;a>0;a--){const i=Math.floor(Math.random()*(a+1));[r[a],r[i]]=[r[i],r[a]]}return r.join("")};return e.jsxs(m,{user:c.user,children:[e.jsx(p,{title:"Master"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Dokter"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:5,className:"px-3 py-2",children:e.jsx(g,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari dokter",onChange:s=>x("nama",s),onKeyPress:s=>o("nama",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PEGAWAI"}),e.jsx("th",{className:"px-3 py-2",children:"NIP PENGGUNA"}),e.jsx("th",{className:"px-3 py-2",children:"NIK PENGGUNA"}),e.jsx("th",{className:"px-3 py-2",children:"PROFESI"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((s,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.id}),e.jsxs("td",{className:"px-3 py-3",children:[s.depan," ",e.jsx("span",{className:"uppercase",children:s.nama})," ",s.belakang]}),e.jsx("td",{className:"px-3 py-3",children:s.nip?l(s.nip):""}),e.jsx("td",{className:"px-3 py-3",children:s.nik?l(s.nik):e.jsx("span",{className:"text-red-500",children:"Belum ada NIK"})}),e.jsx("td",{className:"px-3 py-3",children:s.profesi})]},`${s.id}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"5",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(j,{links:t.links})]})})})})})]})}export{b as default};
========
import{j as e,Y as p,y as h}from"./app-C-2F5S2g.js";import{A as m}from"./AuthenticatedLayout-S9_dzZ4r.js";import{T as g}from"./TextInput-CrP2Ki8x.js";import{P as j}from"./Pagination-DoWlQGSP.js";import"./transition-BxtM8ad2.js";function b({auth:c,dataTable:t,queryParams:d={}}){const n=(s,r)=>{const a={...d,page:1};r?a[s]=r:delete a[s],h.get(route("dokter.index"),a,{preserveState:!0,preserveScroll:!0})},x=(s,r)=>{const a=r.target.value;n(s,a)},o=(s,r)=>{r.key==="Enter"&&n(s,r.target.value)},l=s=>{const r=s.split("");for(let a=r.length-1;a>0;a--){const i=Math.floor(Math.random()*(a+1));[r[a],r[i]]=[r[i],r[a]]}return r.join("")};return e.jsxs(m,{user:c.user,children:[e.jsx(p,{title:"Master"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Dokter"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:5,className:"px-3 py-2",children:e.jsx(g,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari dokter",onChange:s=>x("nama",s),onKeyPress:s=>o("nama",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PEGAWAI"}),e.jsx("th",{className:"px-3 py-2",children:"NIP PENGGUNA"}),e.jsx("th",{className:"px-3 py-2",children:"NIK PENGGUNA"}),e.jsx("th",{className:"px-3 py-2",children:"PROFESI"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((s,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.id}),e.jsxs("td",{className:"px-3 py-3",children:[s.depan," ",e.jsx("span",{className:"uppercase",children:s.nama})," ",s.belakang]}),e.jsx("td",{className:"px-3 py-3",children:s.nip?l(s.nip):""}),e.jsx("td",{className:"px-3 py-3",children:s.nik?l(s.nik):e.jsx("span",{className:"text-red-500",children:"Belum ada NIK"})}),e.jsx("td",{className:"px-3 py-3",children:s.profesi})]},`${s.id}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"5",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(j,{links:t.links})]})})})})})]})}export{b as default};
>>>>>>>> refs/remotes/origin/master:public/build/assets/Index-DzULsFfN.js
