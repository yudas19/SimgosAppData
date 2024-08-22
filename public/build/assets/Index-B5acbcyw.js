import{j as e,Y as p,y as g}from"./app-C_4lpRLF.js";import{A as h}from"./AuthenticatedLayout-aCrBCWwt.js";import{T as m}from"./TextInput-CvNi7Zzp.js";import"./transition-CpVu8bYb.js";function b({auth:o,dataTable:i,queryParams:d={}}){const n=(r,t)=>{const s={...d,page:1};t?s[r]=t:delete s[r],g.get(route("logsBridge.index"),s,{preserveState:!0,preserveScroll:!0})},l=(r,t)=>{const s=t.target.value;n(r,s)},c=(r,t)=>{t.key==="Enter"&&n(r,t.target.value)},x=r=>{const t=['{"code":"200","message":"Sukses"}','{"code":"200","message":"OK"}','{"code":"200","message":"Ok"}'];for(const s of t)if(r.includes(s))return s;try{const s=JSON.parse(r),a={};return s.hasOwnProperty("refresh_token_expires_in")&&(a.refresh_token_expires_in=s.refresh_token_expires_in),s.hasOwnProperty("api_product_list")&&(a.api_product_list=s.api_product_list),s.hasOwnProperty("api_product_list_json")&&(a.api_product_list_json=s.api_product_list_json),s.hasOwnProperty("organization_name")&&(a.organization_name=s.organization_name),Object.keys(a).length>0?JSON.stringify(a):r}catch(s){return console.error("Failed to parse JSON:",s),r}};return e.jsxs(h,{user:o.user,children:[e.jsx(p,{title:"Logs"}),e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"Data Bridge Logs"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsx("tr",{children:e.jsx("th",{colSpan:6,className:"px-3 py-2",children:e.jsx(m,{className:"w-full",defaultValue:d.nama||"",placeholder:"Cari url",onChange:r=>l("nama",r),onKeyPress:r=>c("nama",r)})})})}),e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"ID"}),e.jsx("th",{className:"px-3 py-2",children:"URL"}),e.jsx("th",{className:"px-3 py-2",children:"TANGGAL"}),e.jsx("th",{className:"px-3 py-2",children:"RESPONSE"})]})}),e.jsx("tbody",{children:i.data.length>0?i.data.map((r,t)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3",children:r.ID}),e.jsx("td",{className:"px-3 py-3 break-words max-w-xs",children:r.URL}),e.jsx("td",{className:"px-3 py-3",children:r.TGL_REQUEST}),e.jsx("td",{className:"px-3 py-3 break-words max-w-xs",children:x(r.RESPONSE)})]},`${r.ID}-${t}`)):e.jsx("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:e.jsx("td",{colSpan:"6",className:"px-3 py-3 text-center",children:"Tidak ada data yang dapat ditampilkan"})})})]})]})})})})})]})}export{b as default};
