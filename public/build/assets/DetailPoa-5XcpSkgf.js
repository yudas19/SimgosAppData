import{j as e}from"./app-Dvlr_T_r.js";function d({detailPoa:a={}}){const s=[{label:"ID",key:"id"},{label:"DISPLAY",key:"display"},{label:"POV",key:"pov"},{label:"NAMA DAGANG",key:"nama_dagang"},{label:"UNIT LOGISTIK TERKECIL",key:"unit_logistik_terkecil"},{label:"BENTUK SEDIAAN",key:"bentuk_sediaan"},{label:"ID BENTUK SEDIAAN",key:"id_bentuk_sediaan"},{label:"GOLONGAN OBAT",key:"golongan_obat"},{label:"URL",key:"url"},{label:"STATUS",key:"status"}];return e.jsx("div",{className:"py-5",children:e.jsx("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-5",children:e.jsx("div",{className:"bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("h1",{className:"uppercase text-center font-bold text-xl pb-2",children:"DATA DETAIL POA"}),e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900",children:[e.jsx("thead",{className:"text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-3 py-2",children:"URAIAN"}),e.jsx("th",{className:"px-3 py-2",children:"VALUE"})]})}),e.jsx("tbody",{children:Object.keys(a).length>0?s.map((l,t)=>e.jsxs("tr",{className:"bg-white border-b dark:bg-indigo-950 dark:border-gray-500",children:[e.jsx("td",{className:"px-3 py-3 font-bold w-56",children:l.label}),e.jsx("td",{className:"px-3 py-3 w-56",children:a[l.key]||"-"})]},t)):e.jsx("tr",{children:e.jsx("td",{colSpan:"2",className:"text-center px-3 py-3",children:"No data available"})})})]})]})})})})})}export{d as default};
