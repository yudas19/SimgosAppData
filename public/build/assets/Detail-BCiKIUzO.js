import{j as e,Y as d}from"./app-CKtefX_E.js";import{A as i}from"./AuthenticatedLayout-l_m_0adZ.js";import{B as x}from"./ButtonBack-Be_L6VAl.js";import"./transition-C2_yJ5Yi.js";function h({auth:t,detail:s}){const l=Object.keys(s).map(a=>({uraian:a,value:s[a]}));return e.jsxs(i,{user:t.user,children:[e.jsx(d,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsxs("div",{className:"relative flex items-center justify-between pb-2",children:[e.jsx(x,{href:route("patient.index")}),e.jsx("h1",{className:"absolute left-1/2 transform -translate-x-1/2 uppercase font-bold text-2xl",children:"DATA DETAIL PATIENT"})]}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"NO"}),e.jsx("th",{className:"px-3 py-2",children:"COLUMN"}),e.jsx("th",{className:"px-3 py-2",children:"VALUE"})]})}),e.jsx("tbody",{children:l.map((a,r)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3 w-16",children:r+1}),e.jsx("td",{className:"px-3 py-3 w-56",children:a.uraian}),e.jsx("td",{className:"px-3 py-3 break-words max-w-xs",children:a.value})]},r))})]})]})})})})})]})}export{h as default};
