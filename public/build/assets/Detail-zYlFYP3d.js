import{j as r,Y as c}from"./app-OWPptD4K.js";import{A as o}from"./AuthenticatedLayout-BkBfWvkO.js";import"./transition-BhUD100l.js";function g({auth:n,detail:a}){const u=i=>{const e=i.split("");for(let s=e.length-1;s>0;s--){const t=Math.floor(Math.random()*(s+1));[e[s],e[t]]=[e[t],e[s]]}return e.join("")},l=[{uraian:"ID",value:a.id},{uraian:"IDENTIFIER",value:JSON.stringify(a.identifier)},{uraian:"ACTIVE",value:a.active},{uraian:"ADDRESS",value:JSON.stringify(a.address)},{uraian:"BIRTH DATE",value:JSON.stringify(a.birthDate)},{uraian:"COMMUNICATION",value:JSON.stringify(a.communication)},{uraian:"DECEASED BOOLEAN",value:JSON.stringify(a.deceasedBoolean)},{uraian:"EXTENSION",value:JSON.stringify(a.extension)},{uraian:"GENDER",value:JSON.stringify(a.gender)},{uraian:"MARITAL STATUS",value:JSON.stringify(a.maritalStatus)},{uraian:"META",value:JSON.stringify(a.meta)},{uraian:"MULTIPLE BIRTH BOOLEAN",value:JSON.stringify(a.multipleBirthBoolean)},{uraian:"NAME",value:JSON.stringify(a.name)},{uraian:"TELECOM",value:JSON.stringify(a.telecom)},{uraian:"REF ID",value:JSON.stringify(a.refId)},{uraian:"NIK",value:a.nik?u(a.nik):"N/A"},{uraian:"GET DATE",value:JSON.stringify(a.getDate)},{uraian:"HTTP REQUEST",value:JSON.stringify(a.httpRequest)},{uraian:"STATUS REQUEST",value:a.statusRequest}];return r.jsxs(o,{user:n.user,children:[r.jsx(c,{title:"SatuSehat"}),r.jsx("div",{className:"py-5",children:r.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:r.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:r.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:r.jsxs("div",{className:"overflow-auto w-full",children:[r.jsx("h1",{className:"uppercase text-center font-bold text-xl pb-2",children:"DATA DETAIL PATIENT"}),r.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[r.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:r.jsxs("tr",{children:[r.jsx("th",{className:"px-3 py-2",children:"NO"}),r.jsx("th",{className:"px-3 py-2",children:"URAIAN"}),r.jsx("th",{className:"px-3 py-2",children:"VALUE"})]})}),r.jsx("tbody",{children:l.map((i,e)=>r.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[r.jsx("td",{className:"px-3 py-3 w-16",children:e+1}),r.jsx("td",{className:"px-3 py-3 w-56 uppercase",children:i.uraian}),r.jsx("td",{className:"px-3 py-3",children:i.value})]},e))})]})]})})})})})]})}export{g as default};