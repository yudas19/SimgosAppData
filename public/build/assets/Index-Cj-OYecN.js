import{j as e,Y as p,y as m}from"./app-B5wOJTLE.js";import{A as h}from"./AuthenticatedLayout-u6fzdqKz.js";import{T as g}from"./TextInput-CyRpPVr4.js";import{P as j}from"./Pagination-UhQCFG0s.js";import{f as y}from"./formatDate-BY4D4dr9.js";import"./transition-B1OcgTnp.js";function v({auth:i,dataTable:t,queryParams:n={}}){const d=(s,r)=>{const a={...n,page:1};r?a[s]=r:delete a[s],m.get(route("pasien.index"),a,{preserveState:!0,preserveScroll:!0})},c=(s,r)=>{const a=r.target.value;d(s,a)},x=(s,r)=>{r.key==="Enter"&&d(s,r.target.value)},o=s=>{const r=s.split("");for(let a=r.length-1;a>0;a--){const l=Math.floor(Math.random()*(a+1));[r[a],r[l]]=[r[l],r[a]]}return r.join("")};return e.jsxs(h,{user:i.user,children:[e.jsx(p,{title:"Master"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Pasien"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(g,{className:"w-full",defaultValue:n.nama||"",placeholder:"Cari pasien",onChange:s=>c("nama",s),onKeyPress:s=>x("nama",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NORM"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA PASIEN"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL LAHIR"}),e.jsx("th",{className:"px-3 py-2",children:"ALAMAT"}),e.jsx("th",{className:"px-3 py-2",children:"BPJS"}),e.jsx("th",{className:"px-3 py-2",children:"TERDAFTAR"})]})}),e.jsx("tbody",{children:t.data.length>0?t.data.map((s,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.norm}),e.jsx("td",{className:"px-3 py-3",children:s.nama}),e.jsx("td",{className:"px-3 py-3",children:y(s.tanggal)}),e.jsx("td",{className:"px-3 py-3",children:s.alamat}),e.jsx("td",{className:"px-3 py-3",children:s.bpjs?o(s.bpjs):""}),e.jsx("td",{className:"px-3 py-3",children:s.terdaftar})]},`${s.norm}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(j,{links:t.links})]})})})})})]})}export{v as default};
