import{r as o,j as e,a as x,q as m}from"./app-DKKmOrIF.js";import{q as g}from"./transition-H8rE-H1q.js";const f=o.createContext(),l=({children:n})=>{const[i,r]=o.useState(!1),a=()=>{r(s=>!s)};return e.jsx(f.Provider,{value:{open:i,setOpen:r,toggleOpen:a},children:e.jsx("div",{className:"relative",children:n})})},p=({children:n})=>{const{open:i,setOpen:r,toggleOpen:a}=o.useContext(f);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:a,children:n}),i&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},j=({align:n="right",width:i="48",contentClasses:r="py-1 bg-white dark:bg-indigo-950",children:a})=>{const{open:s,setOpen:c}=o.useContext(f);let u="origin-top";n==="left"?u="ltr:origin-top-left rtl:origin-top-right start-0":n==="right"&&(u="ltr:origin-top-right rtl:origin-top-left end-0");let h="";return i==="48"&&(h="w-48"),e.jsx(e.Fragment,{children:e.jsx(g,{as:o.Fragment,show:s,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${u} ${h}`,onClick:()=>c(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:a})})})})},v=({className:n="",children:i,...r})=>e.jsx(x,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-indigo-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-indigo-800 transition duration-150 ease-in-out "+n,children:i});l.Trigger=p;l.Content=j;l.Link=v;function d({active:n=!1,className:i="",children:r,...a}){return e.jsx(x,{...a,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${n?"border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-indigo-800 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${i}`,children:r})}function t({active:n=!1,className:i="",children:r,...a}){return e.jsx(x,{...a,className:"inline-flex items-center px-4 py-2 text-sm font-bold leading-5 transition duration-300 ease-in-out focus:outline-none "+(n?"bg-indigo-500 dark:bg-amber-400 text-white dark:text-gray-900 rounded-lg shadow-xl transform scale-105":"bg-transparent text-gray-700 dark:text-amber-400 hover:text-white rounded-lg dark:hover:text-gray-200 dark:hover:bg-indigo-500 focus:text-white dark:focus:text-gray-200 focus:bg-indigo-600 dark:focus:bg-amber-600")+i,children:r})}function w(){const[n,i]=o.useState(!1),r=o.useRef(null),a=s=>{s.preventDefault(),i(!n)};return o.useEffect(()=>{const s=c=>{r.current&&!r.current.contains(c.target)&&i(!1)};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[]),e.jsxs("div",{className:"relative",ref:r,children:[e.jsx(t,{href:"#",onClick:a,children:"SatuSehat"}),n&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 w-48",children:[e.jsx(t,{href:route("organization.index"),active:route().current("organization.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Organization"}),e.jsx(t,{href:route("location.index"),active:route().current("location.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Location"}),e.jsx(t,{href:route("patient.index"),active:route().current("patient.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Patient"}),e.jsx(t,{href:route("practitioner.index"),active:route().current("practitioner.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Practitioner"}),e.jsx(t,{href:route("encounter.index"),active:route().current("encounter.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Encounter"}),e.jsx(t,{href:route("condition.index"),active:route().current("condition.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Condition"}),e.jsx(t,{href:route("observation.index"),active:route().current("observation.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Observation"}),e.jsx(t,{href:route("procedure.index"),active:route().current("procedure.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Procedure"}),e.jsx(t,{href:route("composition.index"),active:route().current("composition.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Composition"}),e.jsx(t,{href:route("consent.index"),active:route().current("consent.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Consent"}),e.jsx(t,{href:route("diagnosticReport.index"),active:route().current("diagnosticReport.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"DiagnostiC Report"}),e.jsx(t,{href:route("medication.index"),active:route().current("medication.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Medication"}),e.jsx(t,{href:route("medicationDispanse.index"),active:route().current("medicationDispanse.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Medication Dispanse"}),e.jsx(t,{href:route("medicationRequest.index"),active:route().current("medicationRequest.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Medication Request"}),e.jsx(t,{href:route("serviceRequest.index"),active:route().current("serviceRequest.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Service Request"}),e.jsx(t,{href:route("specimen.index"),active:route().current("specimen.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Specimen"})]})]})}function y(){const[n,i]=o.useState(!1),r=o.useRef(null),a=s=>{s.preventDefault(),i(!n)};return o.useEffect(()=>{const s=c=>{r.current&&!r.current.contains(c.target)&&i(!1)};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[]),e.jsxs("div",{className:"relative",ref:r,children:[e.jsx(t,{href:"#",onClick:a,children:"Inventory"}),n&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 w-48",children:[e.jsx(t,{href:route("barang.index"),active:route().current("barang.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Barang"}),e.jsx(t,{href:route("barangRuangan.index"),active:route().current("barangRuangan.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Barang Ruangan"}),e.jsx(t,{href:route("penerimaan.index"),active:route().current("penerimaan.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Penerimaan"}),e.jsx(t,{href:route("pengiriman.index"),active:route().current("pengiriman.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Pengiriman"}),e.jsx(t,{href:route("permintaan.index"),active:route().current("permintaan.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Permintaan"}),e.jsx(t,{href:route("order.index"),active:route().current("order.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Purchase Order"}),e.jsx(t,{href:route("stock.index"),active:route().current("stock.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Stock Opname"}),e.jsx(t,{href:route("transaksi.index"),active:route().current("transaksi.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Transaksi Ruangan"})]})]})}function b(){const[n,i]=o.useState(!1),r=o.useRef(null),a=s=>{s.preventDefault(),i(!n)};return o.useEffect(()=>{const s=c=>{r.current&&!r.current.contains(c.target)&&i(!1)};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[]),e.jsxs("div",{className:"relative",ref:r,children:[e.jsx(t,{href:"#",onClick:a,children:"Master"}),n&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 w-48",children:[e.jsx(t,{href:route("pasien.index"),active:route().current("pasien.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Pasien"}),e.jsx(t,{href:route("pegawai.index"),active:route().current("pegawai.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Pegawai"}),e.jsx(t,{href:route("dokter.index"),active:route().current("dokter.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Dokter"}),e.jsx(t,{href:route("perawat.index"),active:route().current("perawat.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Perawat"}),e.jsx(t,{href:route("staf.index"),active:route().current("staf.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Staf"}),e.jsx(t,{href:route("referensi.index"),active:route().current("referensi.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Referensi"}),e.jsx(t,{href:route("tindakan.index"),active:route().current("tindakan.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Tindakan"})]})]})}function N(){return e.jsx("div",{className:"hidden sm:flex items-center space-x-8",children:e.jsxs("div",{className:"flex-grow flex items-center",children:[e.jsx("div",{className:"relative flex items-center pl-0 pr-3",children:e.jsx(t,{href:route("dashboard"),active:route().current("dashboard"),className:"flex",children:"Beranda"})}),e.jsx(w,{}),e.jsx(y,{}),e.jsx(b,{})]})})}function k(){const{auth:n}=m().props;return n.user.id,e.jsx(e.Fragment,{children:e.jsx("div",{className:"pt-2 pb-1 border-t border-gray-200 dark:border-gray-600",children:e.jsxs("div",{className:"mt-1 space-y-1",children:[e.jsx(d,{href:route("organization.index"),children:"Organization"}),e.jsx(d,{href:route("location.index"),children:"Location"}),e.jsx(d,{href:route("patient.index"),children:"Patient"}),e.jsx(d,{href:route("practitioner.index"),children:"Practitioner"}),e.jsx(d,{href:route("encounter.index"),children:"Encounter"}),e.jsx(d,{href:route("condition.index"),children:"Condition"}),e.jsx(d,{href:route("observation.index"),children:"Observation"}),e.jsx(d,{href:route("procedure.index"),children:"Procedure"}),e.jsx(d,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})})})}const D=({user:n})=>{const[i,r]=o.useState(!1);return e.jsxs("nav",{className:"bg-white dark:bg-indigo-950 border-b border-gray-100 dark:border-gray-700 fixed top-0 left-0 right-0 z-10",children:[e.jsx("div",{className:"max-w-8xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsx("div",{className:"flex",children:e.jsx(N,{})}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"ms-3 relative",children:e.jsxs(l,{children:[e.jsx(l.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-indigo-950 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:[n.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsx(l.Content,{children:e.jsx(l.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>r(!i),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(i?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(d,{href:route("dashboard"),active:route().current("dashboard"),children:"Beranda"})}),e.jsx(k,{})]})]})},C=D;function O({user:n,header:i,children:r}){return e.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-950",children:[e.jsx(C,{user:n}),e.jsx("main",{className:"pt-16",children:r}),e.jsx("footer",{className:"bg-gray-50 text-black/50 dark:bg-gray-950 dark:text-gray-200",children:e.jsx("div",{className:"text-center",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," Tim IT RSUD Dr. M. M. Dunda Limboto. All rights reserved."]})})})]})}export{O as A};
