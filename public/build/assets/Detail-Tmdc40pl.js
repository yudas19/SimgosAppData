import{j as a,Y as n}from"./app-D2LiDAB_.js";import{A as l}from"./AuthenticatedLayout-0v1FbRDC.js";import"./transition-Cx_EL74d.js";function u({auth:i,detail:r}){const t=[{uraian:"ID",value:r.id},{uraian:"IDENTIFIER",value:JSON.stringify(r.identifier)},{uraian:"ACTIVE",value:r.active},{uraian:"NAME",value:JSON.stringify(r.name)},{uraian:"ALIAS",value:JSON.stringify(r.alias)},{uraian:"TELECOM",value:JSON.stringify(r.telecom)},{uraian:"ADDRESS",value:JSON.stringify(r.address)},{uraian:"PART OF",value:JSON.stringify(r.partOf)},{uraian:"REF ID",value:JSON.stringify(r.refId)},{uraian:"SEND DATE",value:JSON.stringify(r.sendDate)},{uraian:"FLAG",value:JSON.stringify(r.flag)},{uraian:"SEND",value:r.send}];return a.jsxs(l,{user:i.user,children:[a.jsx(n,{title:"SatuSehat"}),a.jsx("div",{className:"py-5",children:a.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:a.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:a.jsxs("div",{className:"overflow-auto w-full",children:[a.jsx("h1",{className:"uppercase text-center font-bold text-xl pb-2",children:"DATA DETAIL ORGANIZATION"}),a.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[a.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-3 py-2",children:"NO"}),a.jsx("th",{className:"px-3 py-2",children:"URAIAN"}),a.jsx("th",{className:"px-3 py-2",children:"VALUE"})]})}),a.jsx("tbody",{children:t.map((e,s)=>a.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[a.jsx("td",{className:"px-3 py-3",children:s+1}),a.jsx("td",{className:"px-3 py-3 uppercase",children:e.uraian}),a.jsx("td",{className:"px-3 py-3",children:e.value})]},s))})]})]})})})})})]})}export{u as default};
