<<<<<<<< HEAD:public/build/assets/Index-nt_d7SkC.js
import{j as e,Y as x,y as o}from"./app-C8QGlm8X.js";import{A as p}from"./AuthenticatedLayout-C_WctN0L.js";import{T as h}from"./TextInput-CAQnJejT.js";import{P as m}from"./Pagination-BjLsCIyl.js";import{B as g}from"./ButtonDetail-CS-VaNIq.js";import"./transition-B_OTo9Io.js";function k({auth:i,dataTable:a,queryParams:d={}}){const l=(s,r)=>{const t={...d,page:1};r?t[s]=r:delete t[s],o.get(route("serviceRequest.index"),t,{preserveState:!0,preserveScroll:!0})},c=(s,r)=>{const t=r.target.value;l(s,t)},n=(s,r)=>{r.key==="Enter"&&l(s,r.target.value)};return e.jsxs(p,{user:i.user,children:[e.jsx(x,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Service Request"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.subject||"",placeholder:"Cari service request",onChange:s=>c("subject",s),onKeyPress:s=>n("subject",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"SUBJECT"}),e.jsx("th",{className:"px-3 py-2",children:"REF ID"}),e.jsx("th",{className:"px-3 py-2",children:"NOPEN"}),e.jsx("th",{className:"px-3 py-2",children:"SEND DATE"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:a.data.length>0?a.data.map((s,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.id}),e.jsx("td",{className:"px-3 py-3",children:s.subject}),e.jsx("td",{className:"px-3 py-3",children:s.refId}),e.jsx("td",{className:"px-3 py-3",children:s.nopen}),e.jsx("td",{className:"px-3 py-3",children:s.sendDate}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(g,{href:route("serviceRequest.detail",{id:s.refId})})})]},`${s.refId}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:a.links})]})})})})})]})}export{k as default};
========
import{j as e,Y as x,y as o}from"./app-C-2F5S2g.js";import{A as p}from"./AuthenticatedLayout-S9_dzZ4r.js";import{T as h}from"./TextInput-CrP2Ki8x.js";import{P as m}from"./Pagination-DoWlQGSP.js";import{B as g}from"./ButtonDetail-DipoDQ1k.js";import"./transition-BxtM8ad2.js";function k({auth:i,dataTable:a,queryParams:d={}}){const l=(s,r)=>{const t={...d,page:1};r?t[s]=r:delete t[s],o.get(route("serviceRequest.index"),t,{preserveState:!0,preserveScroll:!0})},c=(s,r)=>{const t=r.target.value;l(s,t)},n=(s,r)=>{r.key==="Enter"&&l(s,r.target.value)};return e.jsxs(p,{user:i.user,children:[e.jsx(x,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Service Request"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(h,{className:"w-full",defaultValue:d.subject||"",placeholder:"Cari service request",onChange:s=>c("subject",s),onKeyPress:s=>n("subject",s)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"SUBJECT"}),e.jsx("th",{className:"px-3 py-2",children:"REF ID"}),e.jsx("th",{className:"px-3 py-2",children:"NOPEN"}),e.jsx("th",{className:"px-3 py-2",children:"SEND DATE"}),e.jsx("th",{className:"px-3 py-2 text-center",children:"MENU"})]})}),e.jsx("tbody",{children:a.data.length>0?a.data.map((s,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:s.id}),e.jsx("td",{className:"px-3 py-3",children:s.subject}),e.jsx("td",{className:"px-3 py-3",children:s.refId}),e.jsx("td",{className:"px-3 py-3",children:s.nopen}),e.jsx("td",{className:"px-3 py-3",children:s.sendDate}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(g,{href:route("serviceRequest.detail",{id:s.refId})})})]},`${s.refId}-${r}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(m,{links:a.links})]})})})})})]})}export{k as default};
>>>>>>>> refs/remotes/origin/master:public/build/assets/Index-DhoxsSzW.js
