import{j as a,Y as u}from"./app-DBn8AA6f.js";import{A as c}from"./AuthenticatedLayout-2HJbE8jh.js";import"./transition-5tV1ZH8_.js";function h({auth:n,detail:r}){const l=t=>{const e=t.split("");for(let s=e.length-1;s>0;s--){const i=Math.floor(Math.random()*(s+1));[e[s],e[i]]=[e[i],e[s]]}return e.join("")},d=[{uraian:"ID",value:r.id},{uraian:"ADDRESS",value:JSON.stringify(r.address)},{uraian:"BIRTH DATE",value:JSON.stringify(r.birthDate)},{uraian:"GENDER",value:r.gender},{uraian:"IDENTIFIER",value:JSON.stringify(r.identifier)},{uraian:"META",value:JSON.stringify(r.meta)},{uraian:"NAME",value:JSON.stringify(r.name)},{uraian:"QUALIFICATION",value:JSON.stringify(r.qualification)},{uraian:"TELECOM",value:JSON.stringify(r.telecom)},{uraian:"REF ID",value:r.refId?l(r.refId):"N/A"},{uraian:"GET DATE",value:r.getDate},{uraian:"GET",value:r.get}];return a.jsxs(c,{user:n.user,children:[a.jsx(u,{title:"SatuSehat"}),a.jsx("div",{className:"py-5",children:a.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:a.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:a.jsxs("div",{className:"overflow-auto w-full",children:[a.jsx("h1",{className:"uppercase text-center font-bold text-xl pb-2",children:"DATA DETAIL PRACTITIONER"}),a.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[a.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:a.jsxs("tr",{children:[a.jsx("th",{className:"px-3 py-2",children:"NO"}),a.jsx("th",{className:"px-3 py-2",children:"URAIAN"}),a.jsx("th",{className:"px-3 py-2",children:"VALUE"})]})}),a.jsx("tbody",{children:d.map((t,e)=>a.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[a.jsx("td",{className:"px-3 py-3",children:e+1}),a.jsx("td",{className:"px-3 py-3 uppercase",children:t.uraian}),a.jsx("td",{className:"px-3 py-3",children:t.value})]},e))})]})]})})})})})]})}export{h as default};
