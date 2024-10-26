import{r as o,j as e,a as f,q as m}from"./app-XvJdv0Jc.js";import{q as p}from"./transition-DTWfXt7f.js";const h=o.createContext(),x=({children:n})=>{const[t,r]=o.useState(!1),d=()=>{r(l=>!l)};return e.jsx(h.Provider,{value:{open:t,setOpen:r,toggleOpen:d},children:e.jsx("div",{className:"relative",children:n})})},b=({children:n})=>{const{open:t,setOpen:r,toggleOpen:d}=o.useContext(h);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:d,children:n}),t&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},v=({align:n="right",width:t="48",contentClasses:r="py-1 bg-white dark:bg-indigo-950",children:d})=>{const{open:l,setOpen:i}=o.useContext(h);let u="origin-top";n==="left"?u="ltr:origin-top-left rtl:origin-top-right start-0":n==="right"&&(u="ltr:origin-top-right rtl:origin-top-left end-0");let c="";return t==="48"&&(c="w-48"),e.jsx(e.Fragment,{children:e.jsx(p,{as:o.Fragment,show:l,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${u} ${c}`,onClick:()=>i(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:d})})})})},j=({className:n="",children:t,...r})=>e.jsx(f,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-indigo-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-indigo-800 transition duration-150 ease-in-out "+n,children:t});x.Trigger=b;x.Content=v;x.Link=j;function s({active:n=!1,className:t="",children:r,...d}){return e.jsx(f,{...d,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${n?"border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-indigo-800 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:r})}function a({active:n=!1,className:t="",children:r,...d}){return e.jsx(f,{...d,className:"inline-flex items-center px-4 py-2 text-sm font-bold leading-5 transition duration-300 ease-in-out focus:outline-none "+(n?"bg-indigo-500 dark:bg-amber-400 text-white dark:text-gray-900 rounded-lg shadow-xl transform scale-105":"bg-transparent text-gray-700 dark:text-amber-400 hover:text-white rounded-lg dark:hover:text-gray-200 dark:hover:bg-indigo-500 focus:text-white dark:focus:text-gray-200 focus:bg-indigo-600 dark:focus:bg-amber-600")+t,children:r})}function w(){const[n,t]=o.useState(!1),r=o.useRef(null),d=c=>{c.preventDefault(),t(!n)};o.useEffect(()=>{const c=g=>{r.current&&!r.current.contains(g.target)&&t(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const l=()=>route().current("organization.index")||route().current("location.index")||route().current("patient.index")||route().current("practitioner.index")||route().current("encounter.index")||route().current("condition.index")||route().current("observation.index")||route().current("procedure.index")||route().current("composition.index")||route().current("consent.index")||route().current("diagnosticReport.index")||route().current("medication.index")||route().current("medicationDispanse.index")||route().current("medicationRequest.index")||route().current("serviceRequest.index")||route().current("specimen.index")||route().current("allergy.index")||route().current("barangBza.index")||route().current("carePlan.index")||route().current("conditionPa.index")||route().current("conditionTumor.index")||route().current("imagingStudy.index"),u=[{label:"Organization",route:"organization.index"},{label:"Location",route:"location.index"},{label:"Patient",route:"patient.index"},{label:"Practitioner",route:"practitioner.index"},{label:"Encounter",route:"encounter.index"},{label:"Condition",route:"condition.index"},{label:"Observation",route:"observation.index"},{label:"Procedure",route:"procedure.index"},{label:"Composition",route:"composition.index"},{label:"Consent",route:"consent.index"},{label:"Diagnostic Report",route:"diagnosticReport.index"},{label:"Medication",route:"medication.index"},{label:"Medication Dispanse",route:"medicationDispanse.index"},{label:"Medication Request",route:"medicationRequest.index"},{label:"Service Request",route:"serviceRequest.index"},{label:"Specimen",route:"specimen.index"},{label:"Allergy Intolerance",route:"allergy.index"},{label:"Barang",route:"barangBza.index"},{label:"Care Plan",route:"carePlan.index"},{label:"Condition Hasil PA",route:"conditionPa.index"},{label:"Condition Penilaian Tumor",route:"conditionTumor.index"},{label:"Imaging Study",route:"imagingStudy.index"}].sort((c,g)=>c.label.localeCompare(g.label));return e.jsxs("div",{className:"relative pr-1",ref:r,children:[e.jsx(a,{href:"#",onClick:d,active:l(),children:"SatuSehat"}),n&&e.jsx("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-96 grid grid-cols-2 gap-2",children:u.map(c=>e.jsx(a,{href:route(c.route),active:route().current(c.route),className:"flex justify-between items-center px-4 py-2 w-full",children:c.label},c.route))})]})}function y(){const[n,t]=o.useState(!1),r=o.useRef(null),d=i=>{i.preventDefault(),t(!n)};o.useEffect(()=>{const i=u=>{r.current&&!r.current.contains(u.target)&&t(!1)};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]);const l=()=>route().current("daftarBarang.index")||route().current("barangRuangan.index")||route().current("penerimaanBarang.index")||route().current("pengirimanBarang.index")||route().current("permintaanBarang.index")||route().current("orderBarang.index")||route().current("stockBarang.index")||route().current("transaksiBarang.index");return e.jsxs("div",{className:"relative pr-1",ref:r,children:[e.jsx(a,{href:"#",onClick:d,active:l(),children:"Inventory"}),n&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(a,{href:route("daftarBarang.index"),active:route().current("daftarBarang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Daftar Barang"}),e.jsx(a,{href:route("barangRuangan.index"),active:route().current("barangRuangan.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Barang Ruangan"}),e.jsx(a,{href:route("penerimaanBarang.index"),active:route().current("penerimaanBarang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Penerimaan Barang"}),e.jsx(a,{href:route("pengirimanBarang.index"),active:route().current("pengirimanBarang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pengiriman Barang"}),e.jsx(a,{href:route("permintaanBarang.index"),active:route().current("permintaanBarang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Permintaan Barang"}),e.jsx(a,{href:route("orderBarang.index"),active:route().current("orderBarang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Order Barang"}),e.jsx(a,{href:route("stockBarang.index"),active:route().current("stockBarang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Stock Opname"}),e.jsx(a,{href:route("transaksiBarang.index"),active:route().current("transaksiBarang.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Transaksi Ruangan"})]})]})}function k(){const[n,t]=o.useState(!1),r=o.useRef(null),d=i=>{i.preventDefault(),t(!n)};o.useEffect(()=>{const i=u=>{r.current&&!r.current.contains(u.target)&&t(!1)};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]);const l=()=>route().current("pasien.index")||route().current("pegawai.index")||route().current("dokter.index")||route().current("perawat.index")||route().current("staf.index")||route().current("referensi.index")||route().current("ruangan.index")||route().current("tindakan.index")||route().current("tindakanRuangan.index");return e.jsxs("div",{className:"relative pr-1",ref:r,children:[e.jsx(a,{href:"#",onClick:d,active:l(),children:"Master"}),n&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(a,{href:route("pasien.index"),active:route().current("pasien.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pasien"}),e.jsx(a,{href:route("pegawai.index"),active:route().current("pegawai.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pegawai"}),e.jsx(a,{href:route("dokter.index"),active:route().current("dokter.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Dokter"}),e.jsx(a,{href:route("perawat.index"),active:route().current("perawat.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Perawat"}),e.jsx(a,{href:route("staf.index"),active:route().current("staf.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Staf"}),e.jsx(a,{href:route("referensi.index"),active:route().current("referensi.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Referensi"}),e.jsx(a,{href:route("ruangan.index"),active:route().current("ruangan.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Ruangan"}),e.jsx(a,{href:route("tindakan.index"),active:route().current("tindakan.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Tindakan"}),e.jsx(a,{href:route("tindakanRuangan.index"),active:route().current("tindakanRuangan.index"),className:"flex justify-between items-center px-4 py-2 w-full",children:"Tindakan Ruangan"})]})]})}function N(){const[n,t]=o.useState(!1),r=o.useRef(null),d=i=>{i.preventDefault(),t(!n)};o.useEffect(()=>{const i=u=>{r.current&&!r.current.contains(u.target)&&t(!1)};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]);const l=()=>route().current("pendaftaran.index")||route().current("kunjungan.index")||route().current("konsul.index")||route().current("mutasi.index")||route().current("reservasi.index")||route().current("antrian.index");return e.jsxs("div",{className:"relative pr-1",ref:r,children:[e.jsx(a,{href:"#",onClick:d,active:l(),children:"Pendaftaran"}),n&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(a,{href:route("pendaftaran.index"),active:route().current("pendaftaran.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pendaftaran"}),e.jsx(a,{href:route("kunjungan.index"),active:route().current("kunjungan.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Kunjungan"}),e.jsx(a,{href:route("konsul.index"),active:route().current("konsul.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Konsul"}),e.jsx(a,{href:route("mutasi.index"),active:route().current("mutasi.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Mutasi"}),e.jsx(a,{href:route("antrian.index"),active:route().current("antrian.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Antrian Ruangan"})]})]})}function R(){const[n,t]=o.useState(!1),r=o.useRef(null),d=i=>{i.preventDefault(),t(!n)};o.useEffect(()=>{const i=u=>{r.current&&!r.current.contains(u.target)&&t(!1)};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]);const l=()=>route().current("pesertaBpjs.index")||route().current("kunjunganBpjs.index")||route().current("pengajuanSep.index")||route().current("rekonBpjs.index")||route().current("monitoringRekon.index")||route().current("rujukanBpjs.index");return e.jsxs("div",{className:"relative pr-1",ref:r,children:[e.jsx(a,{href:"#",onClick:d,active:l(),children:"BPJS"}),n&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(a,{href:route("pesertaBpjs.index"),active:route().current("pesertaBpjs.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Peserta"}),e.jsx(a,{href:route("kunjunganBpjs.index"),active:route().current("kunjunganBpjs.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Kunjungan"}),e.jsx(a,{href:route("pengajuanSep.index"),active:route().current("pengajuanSep.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pengajuan SEP"}),e.jsx(a,{href:route("rekonBpjs.index"),active:route().current("rekonBpjs.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Rencana Kontrol"}),e.jsx(a,{href:route("monitoringRekon.index"),active:route().current("monitoringRekon.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Monitoring Rekon"}),e.jsx(a,{href:route("rujukanBpjs.index"),active:route().current("rujukanBpjs.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Rujukan Masuk"})]})]})}function L(){const[n,t]=o.useState(!1),r=o.useRef(null),d=i=>{i.preventDefault(),t(!n)};o.useEffect(()=>{const i=u=>{r.current&&!r.current.contains(u.target)&&t(!1)};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]);const l=()=>route().current("layananLab.index")||route().current("layananRad.index")||route().current("layananResep.index")||route().current("layananPulang.index")||route().current("layananTindakan.index");return e.jsxs("div",{className:"relative pr-1",ref:r,children:[e.jsx(a,{href:"#",onClick:d,active:l(),children:"Layanan"}),n&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(a,{href:route("layananLab.index"),active:route().current("layananLab.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Laboratorium"}),e.jsx(a,{href:route("layananRad.index"),active:route().current("layananRad.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Radiologi"}),e.jsx(a,{href:route("layananResep.index"),active:route().current("layananResep.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Resep"}),e.jsx(a,{href:route("layananTindakan.index"),active:route().current("layananTindakan.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Tindakan Medis"}),e.jsx(a,{href:route("layananPulang.index"),active:route().current("layananPulang.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pasien Pulang"})]})]})}function B(){const[n,t]=o.useState(!1),r=o.useRef(null),d=i=>{i.preventDefault(),t(!n)};o.useEffect(()=>{const i=u=>{r.current&&!r.current.contains(u.target)&&t(!1)};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]);const l=()=>route().current("logsBridge.index")||route().current("logsAkses.index")||route().current("logsRequest.index");return e.jsxs("div",{className:"relative pr-1",ref:r,children:[e.jsx(a,{href:"#",onClick:d,active:l(),children:"Logs"}),n&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(a,{href:route("logsBridge.index"),active:route().current("logsBridge.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Bridge Logs"}),e.jsx(a,{href:route("logsAkses.index"),active:route().current("logsAkses.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pengguna Akses"}),e.jsx(a,{href:route("logsRequest.index"),active:route().current("logsRequest.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pengguna Request"}),e.jsx(a,{href:route("logsPengguna.index"),active:route().current("logsPengguna.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Pengguna Aplikasi"})]})]})}function D(){const[n,t]=o.useState(!1),r=o.useRef(null),d=i=>{i.preventDefault(),t(!n)};o.useEffect(()=>{const i=u=>{r.current&&!r.current.contains(u.target)&&t(!1)};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]);const l=()=>route().current("laporanRl12.index");return e.jsxs("div",{className:"relative pr-1",ref:r,children:[e.jsx(a,{href:"#",onClick:d,active:l(),children:"Laporan"}),n&&e.jsxs("div",{className:"absolute dark:bg-indigo-900 text-white shadow-md mt-2 rounded-lg py-2 px-1 w-48",children:[e.jsx(a,{href:route("laporanRl12.index"),active:route().current("laporanRl12.index"),className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Laporan RL 1.2"}),e.jsx(a,{href:"#",className:"flex justify-between items-center px-4 py-2 mb-1 w-full",children:"Laporan RL 1.3"})]})]})}function P(){return e.jsx("div",{className:"hidden sm:flex items-center space-x-8",children:e.jsxs("div",{className:"flex-grow flex items-center",children:[e.jsx("div",{className:"relative flex items-center pl-0 pr-1",children:e.jsx(a,{href:route("dashboard"),active:route().current("dashboard"),className:"flex",children:"Beranda"})}),e.jsx(w,{}),e.jsx(N,{}),e.jsx(R,{}),e.jsx(L,{}),e.jsx(y,{}),e.jsx(D,{}),e.jsx(B,{}),e.jsx(k,{})]})})}function C(){const[n,t]=o.useState(!1),r=()=>{t(!n)},l=[{href:"organization.index",label:"Organization"},{href:"location.index",label:"Location"},{href:"patient.index",label:"Patient"},{href:"practitioner.index",label:"Practitioner"},{href:"encounter.index",label:"Encounter"},{href:"condition.index",label:"Condition"},{href:"observation.index",label:"Observation"},{href:"procedure.index",label:"Procedure"},{href:"composition.index",label:"Composition"},{href:"consent.index",label:"Consent"},{href:"diagnosticReport.index",label:"Diagnostic Report"},{href:"medication.index",label:"Medication"},{href:"medicationDispanse.index",label:"Medication Dispanse"},{href:"medicationRequest.index",label:"Medication Request"},{href:"serviceRequest.index",label:"Service Request"},{href:"specimen.index",label:"Specimen"},{href:"barangBza.index",label:"Barang"},{href:"carePlan.index",label:"Care Plan"},{label:"Condition Hasil PA",route:"conditionPa.index"},{label:"Condition Penilaian Tumor",route:"conditionTumor.index"},{label:"Imaging Study",route:"imagingStudy.index"}].sort((i,u)=>i.label.localeCompare(u.label));return e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:r,className:"w-full flex items-center justify-between ps-3 pe-4 py-2 border-l-4 border-transparent text-gray-600 dark:text-amber-400 hover:text-gray-800 dark:hover:text-amber-300 hover:bg-gray-50 dark:hover:bg-indigo-800 hover:border-gray-300 dark:hover:border-gray-600 text-base font-medium focus:outline-none transition duration-150 ease-in-out",children:["SatuSehat",e.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${n?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),n&&e.jsx("div",{className:"absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white dark:bg-indigo-950 z-10",children:e.jsx("div",{className:"rounded-md shadow-xs",children:e.jsx("div",{className:"py-1",children:l.map(i=>e.jsx(s,{href:route(i.href),children:i.label},i.href))})})})]})}function O(){const[n,t]=o.useState(!1),r=()=>{t(!n)};return e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:r,className:"w-full flex items-center justify-between ps-3 pe-4 py-2 border-l-4 border-transparent text-gray-600 dark:text-amber-400 hover:text-gray-800 dark:hover:text-amber-300 hover:bg-gray-50 dark:hover:bg-indigo-800 hover:border-gray-300 dark:hover:border-gray-600 text-base font-medium focus:outline-none transition duration-150 ease-in-out",children:["Pendaftaran",e.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${n?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),n&&e.jsx("div",{className:"absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white dark:bg-indigo-950 z-10",children:e.jsx("div",{className:"rounded-md shadow-xs",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{href:route("pendaftaran.index"),children:"Pendaftaran"}),e.jsx(s,{href:route("kunjungan.index"),children:"Kunjungan"}),e.jsx(s,{href:route("konsul.index"),children:"Konsul"}),e.jsx(s,{href:route("mutasi.index"),children:"Mutasi"}),e.jsx(s,{href:route("antrian.index"),children:"Antrian Ruangan"})]})})})]})}function S(){const[n,t]=o.useState(!1),r=()=>{t(!n)};return e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:r,className:"w-full flex items-center justify-between ps-3 pe-4 py-2 border-l-4 border-transparent text-gray-600 dark:text-amber-400 hover:text-gray-800 dark:hover:text-amber-300 hover:bg-gray-50 dark:hover:bg-indigo-800 hover:border-gray-300 dark:hover:border-gray-600 text-base font-medium focus:outline-none transition duration-150 ease-in-out",children:["BPJS",e.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${n?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),n&&e.jsx("div",{className:"absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white dark:bg-indigo-950 z-10",children:e.jsx("div",{className:"rounded-md shadow-xs",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{href:route("pesertaBpjs.index"),children:"Peserta"}),e.jsx(s,{href:route("kunjunganBpjs.index"),children:"Kunjungan"}),e.jsx(s,{href:route("pengajuanSep.index"),children:"Pengajuan SEP"}),e.jsx(s,{href:route("rekonBpjs.index"),children:"Rencana Kontrol"}),e.jsx(s,{href:route("monitoringRekon.index"),children:"Monitoring Rekon"}),e.jsx(s,{href:route("rujukanBpjs.index"),children:"Rujukan Masuk"})]})})})]})}function M(){const[n,t]=o.useState(!1),r=()=>{t(!n)};return e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:r,className:"w-full flex items-center justify-between ps-3 pe-4 py-2 border-l-4 border-transparent text-gray-600 dark:text-amber-400 hover:text-gray-800 dark:hover:text-amber-300 hover:bg-gray-50 dark:hover:bg-indigo-800 hover:border-gray-300 dark:hover:border-gray-600 text-base font-medium focus:outline-none transition duration-150 ease-in-out",children:["Layanan",e.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${n?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),n&&e.jsx("div",{className:"absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white dark:bg-indigo-950 z-10",children:e.jsx("div",{className:"rounded-md shadow-xs",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{href:route("layananLab.index"),children:"Laboratorium"}),e.jsx(s,{href:route("layananRad.index"),children:"Radiologi"}),e.jsx(s,{href:route("layananResep.index"),children:"Resep"}),e.jsx(s,{href:route("layananTindakan.index"),children:"Tindakan Medis"}),e.jsx(s,{href:route("layananPulang.index"),children:"Pasien Pulang"})]})})})]})}function A(){const[n,t]=o.useState(!1),r=()=>{t(!n)};return e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:r,className:"w-full flex items-center justify-between ps-3 pe-4 py-2 border-l-4 border-transparent text-gray-600 dark:text-amber-400 hover:text-gray-800 dark:hover:text-amber-300 hover:bg-gray-50 dark:hover:bg-indigo-800 hover:border-gray-300 dark:hover:border-gray-600 text-base font-medium focus:outline-none transition duration-150 ease-in-out",children:["Inventory",e.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${n?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),n&&e.jsx("div",{className:"absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white dark:bg-indigo-950 z-10",children:e.jsx("div",{className:"rounded-md shadow-xs",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{href:route("daftarBarang.index"),children:"Daftar Barang"}),e.jsx(s,{href:route("barangRuangan.index"),children:"Barang Ruangan"}),e.jsx(s,{href:route("penerimaanBarang.index"),children:"Penerimaan Barang"}),e.jsx(s,{href:route("pengirimanBarang.index"),children:"Pengiriman Barang"}),e.jsx(s,{href:route("permintaanBarang.index"),children:"Permintaan Barang"}),e.jsx(s,{href:route("orderBarang.index"),children:"Order Barang"}),e.jsx(s,{href:route("stockBarang.index"),children:"Stock Opname"}),e.jsx(s,{href:route("transaksiBarang.index"),children:"Transaksi Ruangan"})]})})})]})}function E(){const[n,t]=o.useState(!1),r=()=>{t(!n)};return e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:r,className:"w-full flex items-center justify-between ps-3 pe-4 py-2 border-l-4 border-transparent text-gray-600 dark:text-amber-400 hover:text-gray-800 dark:hover:text-amber-300 hover:bg-gray-50 dark:hover:bg-indigo-800 hover:border-gray-300 dark:hover:border-gray-600 text-base font-medium focus:outline-none transition duration-150 ease-in-out",children:["Logs",e.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${n?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),n&&e.jsx("div",{className:"absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white dark:bg-indigo-950 z-10",children:e.jsx("div",{className:"rounded-md shadow-xs",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{href:route("logsBridge.index"),children:"Bridge Logs"}),e.jsx(s,{href:route("logsAkses.index"),children:"Pengguna Akses"}),e.jsx(s,{href:route("logsRequest.index"),children:"Pengguna Request"}),e.jsx(s,{href:route("logsPengguna.index"),children:"Pengguna Aplikasi"})]})})})]})}function T(){const[n,t]=o.useState(!1),r=()=>{t(!n)};return e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:r,className:"w-full flex items-center justify-between ps-3 pe-4 py-2 border-l-4 border-transparent text-gray-600 dark:text-amber-400 hover:text-gray-800 dark:hover:text-amber-300 hover:bg-gray-50 dark:hover:bg-indigo-800 hover:border-gray-300 dark:hover:border-gray-600 text-base font-medium focus:outline-none transition duration-150 ease-in-out",children:["Master",e.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${n?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),n&&e.jsx("div",{className:"absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white dark:bg-indigo-950 z-10",children:e.jsx("div",{className:"rounded-md shadow-xs",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{href:route("pasien.index"),children:"Pasien"}),e.jsx(s,{href:route("pegawai.index"),children:"Pegawai"}),e.jsx(s,{href:route("dokter.index"),children:"Dokter"}),e.jsx(s,{href:route("perawat.index"),children:"Perawat"}),e.jsx(s,{href:route("staf.index"),children:"Staf"}),e.jsx(s,{href:route("referensi.index"),children:"Referensi"}),e.jsx(s,{href:route("ruangan.index"),children:"Ruangan"}),e.jsx(s,{href:route("tindakan.index"),children:"Tindakan"}),e.jsx(s,{href:route("tindakanRuangan.index"),children:"Tindakan Ruangan"})]})})})]})}function I(){const[n,t]=o.useState(!1),r=()=>{t(!n)};return e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:r,className:"w-full flex items-center justify-between ps-3 pe-4 py-2 border-l-4 border-transparent text-gray-600 dark:text-amber-400 hover:text-gray-800 dark:hover:text-amber-300 hover:bg-gray-50 dark:hover:bg-indigo-800 hover:border-gray-300 dark:hover:border-gray-600 text-base font-medium focus:outline-none transition duration-150 ease-in-out",children:["Logs",e.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${n?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),n&&e.jsx("div",{className:"absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white dark:bg-indigo-950 z-10",children:e.jsx("div",{className:"rounded-md shadow-xs",children:e.jsxs("div",{className:"py-1",children:[e.jsx(s,{href:route("laporanRl12.index"),children:"Laporan RL 1.2"}),e.jsx(s,{href:"#",children:"Laporan RL 1.3"})]})})})]})}function z(){const{auth:n}=m().props;return n.user.id,e.jsx(e.Fragment,{children:e.jsx("div",{className:"pt-2 pb-1 border-t border-gray-200 dark:border-gray-600",children:e.jsxs("div",{className:"mt-1 space-y-1",children:[e.jsx(C,{}),e.jsx(O,{}),e.jsx(S,{}),e.jsx(M,{}),e.jsx(A,{}),e.jsx(I,{}),e.jsx(E,{}),e.jsx(T,{}),e.jsx(s,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})})})}const q=({user:n})=>{const[t,r]=o.useState(!1);return e.jsxs("nav",{className:"bg-white dark:bg-indigo-950 border-b border-amber-400 dark:border-amber-400 fixed top-0 left-0 right-0 z-10",children:[e.jsx("div",{className:"max-w-8xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsx("div",{className:"flex",children:e.jsx(P,{})}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"ms-3 relative",children:e.jsxs(x,{children:[e.jsx(x.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-indigo-950 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:[n.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsx(x.Content,{children:e.jsx(x.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>r(!t),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:t?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:t?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(t?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(s,{href:route("dashboard"),active:route().current("dashboard"),children:"Beranda"})}),e.jsx(z,{})]})]})};function K({user:n,header:t,children:r}){return e.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-950",children:[e.jsx(q,{user:n}),e.jsx("main",{className:"pt-16",children:r}),e.jsx("footer",{className:"bg-gray-50 text-black/50 dark:bg-gray-950 dark:text-gray-200",children:e.jsx("div",{className:"text-center",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," Hidayat - Tim IT RSUD Dr. M. M. Dunda Limboto. All rights reserved."]})})})]})}export{K as A};
