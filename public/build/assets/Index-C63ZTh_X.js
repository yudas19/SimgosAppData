import{j as e,Y as h,y as m}from"./app-Bmn5bGLx.js";import{A as p}from"./AuthenticatedLayout-BQIiDGka.js";import{T as g}from"./TextInput-WzPGiYOx.js";import{P as j}from"./Pagination-Du2Y9_PN.js";import"./transition-Bw6bVbZW.js";function y(d){const s={day:"2-digit",month:"2-digit",year:"numeric"};return new Date(d).toLocaleDateString("id-ID",s)}function A({auth:d,pasien:s,queryParams:l={}}){const n=(a,t)=>{const r={...l,page:1};t?r[a]=t:delete r[a],m.get(route("pasien.index"),r,{preserveState:!0,preserveScroll:!0})},c=(a,t)=>{const r=t.target.value;n(a,r)},o=(a,t)=>{t.key==="Enter"&&n(a,t.target.value)},x=a=>{const t=a.split("");for(let r=t.length-1;r>0;r--){const i=Math.floor(Math.random()*(r+1));[t[r],t[i]]=[t[i],t[r]]}return t.join("")};return e.jsxs(p,{user:d.user,children:[e.jsx(h,{title:"Master"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Pasien"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(g,{className:"w-full",defaultValue:l.nama||"",placeholder:"Cari pasien",onChange:a=>c("nama",a),onKeyPress:a=>o("nama",a)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL LAHIR"}),e.jsx("th",{className:"px-3 py-2",children:"ALAMAT"}),e.jsx("th",{className:"px-3 py-2",children:"BPJS"}),e.jsx("th",{className:"px-3 py-2",children:"TERDAFTAR"})]})}),e.jsx("tbody",{children:s.data.length>0?s.data.map((a,t)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:a.norm}),e.jsx("td",{className:"px-3 py-3",children:a.nama}),e.jsx("td",{className:"px-3 py-3",children:y(a.tanggal)}),e.jsx("td",{className:"px-3 py-3",children:a.alamat}),e.jsx("td",{className:"px-3 py-3",children:a.bpjs?x(a.bpjs):""}),e.jsx("td",{className:"px-3 py-3",children:a.terdaftar})]},`${a.norm}-${t}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(j,{links:s.links})]})})})})})]})}export{A as default};
