import{j as a,Y as d}from"./app-Dw_I0XRi.js";import{A as i}from"./AuthenticatedLayout-CCYuSiPI.js";import{B as x}from"./ButtonBack-DakSnqHK.js";import"./transition-CFU2u1Zh.js";function m({auth:t,detail:e}){const l=Object.keys(e).map(s=>({uraian:s,value:e[s]}));return a.jsxs(i,{user:t.user,children:[a.jsx(d,{title:"BPJS"}),a.jsx("div",{className:"py-5",children:a.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:a.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:a.jsxs("div",{className:"overflow-auto w-full",children:[a.jsxs("div",{className:"relative flex items-center justify-between pb-2",children:[a.jsx(x,{href:route("rekonBpjs.index")}),a.jsx("h1",{className:"absolute left-1/2 transform -translate-x-1/2 uppercase font-bold text-2xl",children:"DATA DETAIL RENCANA KONTROL"})]}),a.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[a.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-3 py-2",children:"NO"}),a.jsx("th",{className:"px-3 py-2",children:"COLUMN"}),a.jsx("th",{className:"px-3 py-2",children:"VALUE"})]})}),a.jsx("tbody",{children:l.map((s,r)=>a.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[a.jsx("td",{className:"px-3 py-3 w-16",children:r+1}),a.jsx("td",{className:"px-3 py-3 w-56",children:s.uraian}),a.jsx("td",{className:"px-3 py-3 break-words",children:s.uraian==="status"?s.value===1?"Final":s.value===0?"Batal":s.value:s.value})]},r))})]})]})})})})})]})}export{m as default};
