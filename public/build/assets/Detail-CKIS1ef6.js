import{j as a,Y as n}from"./app-OWPptD4K.js";import{A as l}from"./AuthenticatedLayout-BkBfWvkO.js";import"./transition-BhUD100l.js";function x({auth:i,detail:r}){const t=[{uraian:"ID",value:r.id},{uraian:"IDENTIFIER",value:JSON.stringify(r.identifier)},{uraian:"CLINICAL STATUS",value:r.clinicalStatus},{uraian:"VERIFICATION STATUS",value:JSON.stringify(r.verificationStatus)},{uraian:"CATEGORY",value:JSON.stringify(r.category)},{uraian:"SEVERITY",value:JSON.stringify(r.severity)},{uraian:"CODE",value:JSON.stringify(r.code)},{uraian:"BODY SITE",value:JSON.stringify(r.bodySite)},{uraian:"SUBJECT",value:JSON.stringify(r.subject)},{uraian:"ENCOUNTER",value:JSON.stringify(r.encounter)},{uraian:"REF ID",value:r.refId},{uraian:"NOPEN",value:r.nopen},{uraian:"SEND DATE",value:r.sendDate},{uraian:"SEND",value:r.send}];return a.jsxs(l,{user:i.user,children:[a.jsx(n,{title:"SatuSehat"}),a.jsx("div",{className:"py-5",children:a.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:a.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:a.jsxs("div",{className:"overflow-auto w-full",children:[a.jsx("h1",{className:"uppercase text-center font-bold text-xl pb-2",children:"DATA DETAIL CONDITION"}),a.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[a.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-3 py-2",children:"NO"}),a.jsx("th",{className:"px-3 py-2",children:"URAIAN"}),a.jsx("th",{className:"px-3 py-2",children:"VALUE"})]})}),a.jsx("tbody",{children:t.map((e,s)=>a.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[a.jsx("td",{className:"px-3 py-3 w-16",children:s+1}),a.jsx("td",{className:"px-3 py-3 w-56 uppercase",children:e.uraian}),a.jsx("td",{className:"px-3 py-3 break-words",children:e.value})]},s))})]})]})})})})})]})}export{x as default};