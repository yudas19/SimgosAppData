import{j as e,Y as p,y as i}from"./app-BSnGz-ou.js";import{A as h}from"./AuthenticatedLayout-CCJ0PLmy.js";import{T as j}from"./TextInput-38N82J2c.js";import{P as g}from"./Pagination-m4FHcf4N.js";import{T as u}from"./ButtonDetail-BForSxeg.js";import{T as f,a as d,b as N,c as b,d as t}from"./TableCell-CuSnr96a.js";import"./transition-BFK9tZOD.js";function E({auth:c,dataTable:n,queryParams:l={}}){const o=[{name:"ID"},{name:"NAME"},{name:"PART OF"},{name:"REF ID"},{name:"SEND DATE"},{name:"MENU",className:"text-center"}],x=(a,s)=>{const r={...l,page:1};s?r[a]=s:delete r[a],i.get(route("organization.index"),r,{preserveState:!0,preserveScroll:!0})},m=(a,s)=>{const r=s.target.value;r===""?i.get(route("organization.index"),{...l,name:"",page:1},{preserveState:!0,preserveScroll:!0}):x(a,r)};return e.jsxs(h,{user:c.user,children:[e.jsx(p,{title:"SatuSehat"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Organization"}),e.jsxs(f,{children:[e.jsx(d,{children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(j,{className:"w-full",defaultValue:l.name||"",placeholder:"Cari organization",onChange:a=>m("name",a)})})})}),e.jsx(d,{children:e.jsx("tr",{children:o.map((a,s)=>e.jsx(N,{className:a.className||"",children:a.name},s))})}),e.jsx("tbody",{children:n.data.length>0?n.data.map((a,s)=>e.jsxs(b,{isEven:s%2===0,children:[e.jsx(t,{children:a.id}),e.jsx(t,{children:a.name}),e.jsx(t,{children:a.partOf}),e.jsx(t,{children:a.refId}),e.jsx(t,{children:a.sendDate}),e.jsx("td",{className:"px-1 py-1 text-center flex items-center justify-center space-x-1",children:e.jsx(u,{href:route("organization.detail",{id:a.refId})})})]},a.refId)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]}),e.jsx(g,{links:n.links})]})})})})})]})}export{E as default};
