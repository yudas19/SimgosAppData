import{j as e,Y as h,y as i}from"./app-VkKzuAuw.js";import{A as g}from"./AuthenticatedLayout-XgaQl9KX.js";import{T as m}from"./TextInput-CRATeqfG.js";import{P as j}from"./Pagination-DTMN8Cds.js";import"./transition-DFYr2hJ3.js";function k({auth:c,dataTable:a,queryParams:d={}}){const n=(r,t)=>{const s={...d,page:1};t?s[r]=t:delete s[r],i.get(route("patient.index"),s,{preserveState:!0,preserveScroll:!0})},x=(r,t)=>{const s=t.target.value;s===""?i.get(route("patient.index"),{...d,name:"",page:1},{preserveState:!0,preserveScroll:!0}):n(r,s)},o=(r,t)=>{t.key==="Enter"&&n(r,t.target.value)},p=r=>{const t=r.split("");for(let s=t.length-1;s>0;s--){const l=Math.floor(Math.random()*(s+1));[t[s],t[l]]=[t[l],t[s]]}return t.join("")};return e.jsxs(g,{user:c.user,children:[e.jsx(h,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Patient"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:5,className:"px-3 py-2",children:e.jsx(m,{className:"w-full",defaultValue:d.name||"",placeholder:"Cari pasien",onChange:r=>x("name",r),onKeyPress:r=>o("name",r)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"NAMA"}),e.jsx("th",{className:"px-3 py-2",children:"REF ID"}),e.jsx("th",{className:"px-3 py-2",children:"NIK"}),e.jsx("th",{className:"px-3 py-2",children:"GET DATE"})]})}),e.jsx("tbody",{children:a.data.length>0?a.data.map((r,t)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:r.id}),e.jsx("td",{className:"px-3 py-3",children:r.name}),e.jsx("td",{className:"px-3 py-3",children:r.refId}),e.jsx("td",{className:"px-3 py-3",children:p(r.nik)}),e.jsx("td",{className:"px-3 py-3",children:r.getDate})]},`${r.id}-${t}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"5",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(j,{links:a.links})]})})})})})]})}export{k as default};
