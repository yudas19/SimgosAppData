import{r as s,j as e,a as x,q as p}from"./app-VkKzuAuw.js";import{q as g}from"./transition-DFYr2hJ3.js";const f=s.createContext(),l=({children:r})=>{const[i,t]=s.useState(!1),o=()=>{t(c=>!c)};return e.jsx(f.Provider,{value:{open:i,setOpen:t,toggleOpen:o},children:e.jsx("div",{className:"relative",children:r})})},h=({children:r})=>{const{open:i,setOpen:t,toggleOpen:o}=s.useContext(f);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:o,children:r}),i&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>t(!1)})]})},j=({align:r="right",width:i="48",contentClasses:t="py-1 bg-white dark:bg-indigo-950",children:o})=>{const{open:c,setOpen:a}=s.useContext(f);let u="origin-top";r==="left"?u="ltr:origin-top-left rtl:origin-top-right start-0":r==="right"&&(u="ltr:origin-top-right rtl:origin-top-left end-0");let m="";return i==="48"&&(m="w-48"),e.jsx(e.Fragment,{children:e.jsx(g,{as:s.Fragment,show:c,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${u} ${m}`,onClick:()=>a(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+t,children:o})})})})},w=({className:r="",children:i,...t})=>e.jsx(x,{...t,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-indigo-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-indigo-800 transition duration-150 ease-in-out "+r,children:i});l.Trigger=h;l.Content=j;l.Link=w;function d({active:r=!1,className:i="",children:t,...o}){return e.jsx(x,{...o,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${r?"border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-indigo-800 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${i}`,children:t})}function n({active:r=!1,className:i="",children:t,...o}){return e.jsx(x,{...o,className:"inline-flex items-center px-4 py-2 text-sm font-bold leading-5 transition duration-300 ease-in-out focus:outline-none "+(r?"bg-indigo-500 dark:bg-amber-400 text-white dark:text-gray-900 rounded-lg shadow-xl transform scale-105":"bg-transparent text-gray-700 dark:text-amber-400 hover:text-white rounded-lg dark:hover:text-gray-200 dark:hover:bg-indigo-500 focus:text-white dark:focus:text-gray-200 focus:bg-indigo-600 dark:focus:bg-amber-600")+i,children:t})}function b(){const[r,i]=s.useState(!1),t=s.useRef(null),o=a=>{a.preventDefault(),i(!r)};s.useEffect(()=>{const a=u=>{t.current&&!t.current.contains(u.target)&&i(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]);const c=()=>route().current("organization.index")||route().current("location.index")||route().current("patient.index")||route().current("practitioner.index")||route().current("encounter.index")||route().current("condition.index")||route().current("observation.index")||route().current("procedure.index")||route().current("composition.index")||route().current("consent.index")||route().current("diagnosticReport.index")||route().current("medication.index")||route().current("medicationDispanse.index")||route().current("medicationRequest.index")||route().current("serviceRequest.index")||route().current("specimen.index");return e.jsxs("div",{className:"relative pr-1",ref:t,children:[e.jsx(n,{href:"#",onClick:o,active:c(),children:"SatuSehat"}),r&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(n,{href:route("organization.index"),active:route().current("organization.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Organization"}),e.jsx(n,{href:route("location.index"),active:route().current("location.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Location"}),e.jsx(n,{href:route("patient.index"),active:route().current("patient.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Patient"}),e.jsx(n,{href:route("practitioner.index"),active:route().current("practitioner.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Practitioner"}),e.jsx(n,{href:route("encounter.index"),active:route().current("encounter.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Encounter"}),e.jsx(n,{href:route("condition.index"),active:route().current("condition.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Condition"}),e.jsx(n,{href:route("observation.index"),active:route().current("observation.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Observation"}),e.jsx(n,{href:route("procedure.index"),active:route().current("procedure.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Procedure"}),e.jsx(n,{href:route("composition.index"),active:route().current("composition.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Composition"}),e.jsx(n,{href:route("consent.index"),active:route().current("consent.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Consent"}),e.jsx(n,{href:route("diagnosticReport.index"),active:route().current("diagnosticReport.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"DiagnostiC Report"}),e.jsx(n,{href:route("medication.index"),active:route().current("medication.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Medication"}),e.jsx(n,{href:route("medicationDispanse.index"),active:route().current("medicationDispanse.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Medication Dispanse"}),e.jsx(n,{href:route("medicationRequest.index"),active:route().current("medicationRequest.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Medication Request"}),e.jsx(n,{href:route("serviceRequest.index"),active:route().current("serviceRequest.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Service Request"}),e.jsx(n,{href:route("specimen.index"),active:route().current("specimen.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Specimen"})]})]})}function v(){const[r,i]=s.useState(!1),t=s.useRef(null),o=a=>{a.preventDefault(),i(!r)};s.useEffect(()=>{const a=u=>{t.current&&!t.current.contains(u.target)&&i(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]);const c=()=>route().current("daftarBarang.index")||route().current("barangRuangan.index")||route().current("penerimaanBarang.index")||route().current("pengirimanBarang.index")||route().current("permintaanBarang.index")||route().current("orderBarang.index")||route().current("stockBarang.index")||route().current("transaksiBarang.index");return e.jsxs("div",{className:"relative pr-1",ref:t,children:[e.jsx(n,{href:"#",onClick:o,active:c(),children:"Inventory"}),r&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(n,{href:route("daftarBarang.index"),active:route().current("daftarBarang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Daftar Barang"}),e.jsx(n,{href:route("barangRuangan.index"),active:route().current("barangRuangan.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Barang Ruangan"}),e.jsx(n,{href:route("penerimaanBarang.index"),active:route().current("penerimaanBarang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Penerimaan Barang"}),e.jsx(n,{href:route("pengirimanBarang.index"),active:route().current("pengirimanBarang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pengiriman Barang"}),e.jsx(n,{href:route("permintaanBarang.index"),active:route().current("permintaanBarang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Permintaan Barang"}),e.jsx(n,{href:route("orderBarang.index"),active:route().current("orderBarang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Order Barang"}),e.jsx(n,{href:route("stockBarang.index"),active:route().current("stockBarang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Stock Opname"}),e.jsx(n,{href:route("transaksiBarang.index"),active:route().current("transaksiBarang.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Transaksi Ruangan"})]})]})}function y(){const[r,i]=s.useState(!1),t=s.useRef(null),o=a=>{a.preventDefault(),i(!r)};s.useEffect(()=>{const a=u=>{t.current&&!t.current.contains(u.target)&&i(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]);const c=()=>route().current("pasien.index")||route().current("pegawai.index")||route().current("dokter.index")||route().current("perawat.index")||route().current("staf.index")||route().current("referensi.index")||route().current("ruangan.index")||route().current("tindakan.index")||route().current("tindakanRuangan.index");return e.jsxs("div",{className:"relative pr-1",ref:t,children:[e.jsx(n,{href:"#",onClick:o,active:c(),children:"Master"}),r&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(n,{href:route("pasien.index"),active:route().current("pasien.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pasien"}),e.jsx(n,{href:route("pegawai.index"),active:route().current("pegawai.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pegawai"}),e.jsx(n,{href:route("dokter.index"),active:route().current("dokter.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Dokter"}),e.jsx(n,{href:route("perawat.index"),active:route().current("perawat.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Perawat"}),e.jsx(n,{href:route("staf.index"),active:route().current("staf.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Staf"}),e.jsx(n,{href:route("referensi.index"),active:route().current("referensi.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Referensi"}),e.jsx(n,{href:route("ruangan.index"),active:route().current("ruangan.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Ruangan"}),e.jsx(n,{href:route("tindakan.index"),active:route().current("tindakan.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Tindakan"}),e.jsx(n,{href:route("tindakanRuangan.index"),active:route().current("tindakanRuangan.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Tindakan Ruangan"})]})]})}function k(){const[r,i]=s.useState(!1),t=s.useRef(null),o=a=>{a.preventDefault(),i(!r)};s.useEffect(()=>{const a=u=>{t.current&&!t.current.contains(u.target)&&i(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]);const c=()=>route().current("pendaftaran.index")||route().current("kunjungan.index")||route().current("konsul.index")||route().current("mutasi.index")||route().current("reservasi.index")||route().current("antrian.index");return e.jsxs("div",{className:"relative pr-1",ref:t,children:[e.jsx(n,{href:"#",onClick:o,active:c(),children:"Pendaftaran"}),r&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(n,{href:route("pendaftaran.index"),active:route().current("pendaftaran.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pendaftaran"}),e.jsx(n,{href:route("kunjungan.index"),active:route().current("kunjungan.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Kunjungan"}),e.jsx(n,{href:route("konsul.index"),active:route().current("konsul.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Konsul"}),e.jsx(n,{href:route("mutasi.index"),active:route().current("mutasi.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Mutasi"}),e.jsx(n,{href:route("reservasi.index"),active:route().current("reservasi.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Reservasi"}),e.jsx(n,{href:route("antrian.index"),active:route().current("antrian.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Antrian Ruangan"})]})]})}function N(){const[r,i]=s.useState(!1),t=s.useRef(null),o=a=>{a.preventDefault(),i(!r)};s.useEffect(()=>{const a=u=>{t.current&&!t.current.contains(u.target)&&i(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]);const c=()=>route().current("pesertaBpjs.index")||route().current("kunjunganBpjs.index")||route().current("pengajuanSep.index")||route().current("rekonBpjs.index")||route().current("monitoringRekon.index")||route().current("rujukanBpjs.index");return e.jsxs("div",{className:"relative pr-1",ref:t,children:[e.jsx(n,{href:"#",onClick:o,active:c(),children:"BPJS"}),r&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(n,{href:route("pesertaBpjs.index"),active:route().current("pesertaBpjs.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Peserta"}),e.jsx(n,{href:route("kunjunganBpjs.index"),active:route().current("kunjunganBpjs.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Kunjungan"}),e.jsx(n,{href:route("pengajuanSep.index"),active:route().current("pengajuanSep.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pengajuan SEP"}),e.jsx(n,{href:route("rekonBpjs.index"),active:route().current("rekonBpjs.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Rencana Kontrol"}),e.jsx(n,{href:route("monitoringRekon.index"),active:route().current("monitoringRekon.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Monitoring Rekon"}),e.jsx(n,{href:route("rujukanBpjs.index"),active:route().current("rujukanBpjs.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Rujukan Masuk"})]})]})}function R(){const[r,i]=s.useState(!1),t=s.useRef(null),o=a=>{a.preventDefault(),i(!r)};s.useEffect(()=>{const a=u=>{t.current&&!t.current.contains(u.target)&&i(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]);const c=()=>route().current("layananLab.index")||route().current("layananRad.index")||route().current("layananResep.index")||route().current("layananPulang.index");return e.jsxs("div",{className:"relative pr-1",ref:t,children:[e.jsx(n,{href:"#",onClick:o,active:c(),children:"Layanan"}),r&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(n,{href:route("layananLab.index"),active:route().current("layananLab.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Laboratorium"}),e.jsx(n,{href:route("layananRad.index"),active:route().current("layananRad.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Radiologi"}),e.jsx(n,{href:route("layananResep.index"),active:route().current("layananResep.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Resep"}),e.jsx(n,{href:route("layananPulang.index"),active:route().current("layananPulang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pasien Pulang"})]})]})}function D(){return e.jsx("div",{className:"hidden sm:flex items-center space-x-8",children:e.jsxs("div",{className:"flex-grow flex items-center",children:[e.jsx("div",{className:"relative flex items-center pl-0 pr-1",children:e.jsx(n,{href:route("dashboard"),active:route().current("dashboard"),className:"flex",children:"Beranda"})}),e.jsx(b,{}),e.jsx(k,{}),e.jsx(N,{}),e.jsx(R,{}),e.jsx(v,{}),e.jsx(y,{})]})})}function B(){const{auth:r}=p().props;return r.user.id,e.jsx(e.Fragment,{children:e.jsx("div",{className:"pt-2 pb-1 border-t border-gray-200 dark:border-gray-600",children:e.jsxs("div",{className:"mt-1 space-y-1",children:[e.jsx(d,{href:route("organization.index"),children:"Organization"}),e.jsx(d,{href:route("location.index"),children:"Location"}),e.jsx(d,{href:route("patient.index"),children:"Patient"}),e.jsx(d,{href:route("practitioner.index"),children:"Practitioner"}),e.jsx(d,{href:route("encounter.index"),children:"Encounter"}),e.jsx(d,{href:route("condition.index"),children:"Condition"}),e.jsx(d,{href:route("observation.index"),children:"Observation"}),e.jsx(d,{href:route("procedure.index"),children:"Procedure"}),e.jsx(d,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})})})}const L=({user:r})=>{const[i,t]=s.useState(!1);return e.jsxs("nav",{className:"bg-white dark:bg-indigo-950 border-b border-gray-100 dark:border-gray-700 fixed top-0 left-0 right-0 z-10",children:[e.jsx("div",{className:"max-w-8xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsx("div",{className:"flex",children:e.jsx(D,{})}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"ms-3 relative",children:e.jsxs(l,{children:[e.jsx(l.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-indigo-950 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:[r.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsx(l.Content,{children:e.jsx(l.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>t(!i),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:i?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:i?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(i?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(d,{href:route("dashboard"),active:route().current("dashboard"),children:"Beranda"})}),e.jsx(B,{})]})]})},C=L;function E({user:r,header:i,children:t}){return e.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-950",children:[e.jsx(C,{user:r}),e.jsx("main",{className:"pt-16",children:t}),e.jsx("footer",{className:"bg-gray-50 text-black/50 dark:bg-gray-950 dark:text-gray-200",children:e.jsx("div",{className:"text-center",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," Tim IT RSUD Dr. M. M. Dunda Limboto. All rights reserved."]})})})]})}export{E as A};
