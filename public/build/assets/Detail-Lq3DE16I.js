import{r as l,j as e,a as d,Y as i}from"./app-DjgChlQv.js";import{A as c}from"./AuthenticatedLayout-CEso4M4j.js";import"./transition-BaQd9XAE.js";function x({title:s,titleId:r,...t},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},t),s?l.createElement("title",{id:r},s):null,l.createElement("path",{fillRule:"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm10.25.75a.75.75 0 0 0 0-1.5H6.56l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L6.56 8.75h4.69Z",clipRule:"evenodd"}))}const o=l.forwardRef(x);function u({href:s,text:r="Back"}){return e.jsxs(d,{href:s,className:"bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2 px-2 rounded-lg flex items-center",children:[e.jsx(o,{className:"w-4 h-4 mr-1"}),r]})}function f({auth:s,detail:r}){const t=Object.keys(r).map(a=>({uraian:a,value:r[a]}));return e.jsxs(c,{user:s.user,children:[e.jsx(i,{title:"Pendaftaran"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsxs("div",{className:"relative flex items-center justify-between pb-2",children:[e.jsx(u,{href:route("pendaftaran.index")}),e.jsx("h1",{className:"absolute left-1/2 transform -translate-x-1/2 uppercase font-bold text-2xl",children:"DATA DETAIL PENDAFTARAN"})]}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NO"}),e.jsx("th",{className:"px-3 py-2",children:"COLUMN"}),e.jsx("th",{className:"px-3 py-2",children:"VALUE"})]})}),e.jsx("tbody",{children:t.map((a,n)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3 w-16",children:n+1}),e.jsx("td",{className:"px-3 py-3 w-56",children:a.uraian}),e.jsx("td",{className:"px-3 py-3 break-words",children:a.uraian==="STATUS_PENDAFTARAN"?a.value===0?"Batal":a.value===1?"Aktif":a.value===2?"Selesai":a.value:a.uraian==="STATUS_PASIEN"?a.value===0?"Dibatalkan/Tidak Aktif":a.value===1?"Aktif":a.value===2?"Meninggal":a.value:a.value})]},n))})]})]})})})})})]})}export{f as default};