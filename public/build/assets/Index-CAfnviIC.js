import{j as a,Y as m}from"./app-Dvlr_T_r.js";import{A as u}from"./AuthenticatedLayout-C05LCJn9.js";import{f as s}from"./formatDate-BY4D4dr9.js";import"./transition-C8nCtlCa.js";function R({auth:i,items:e=[],tgl_awal:l,tgl_akhir:t}){if(console.log("Received items:",e),!Array.isArray(e))return console.error("Expected items to be an array but received:",e),a.jsx("div",{children:"Error: Data not available"});const n=e[0]||{},d={KODERS:"Kode Rumah Sakit",NAMAINST:"Nama Instansi",KODEPROP:"Kode Provinsi",KOTA:"Kota/Kabupaten",TAHUN:"Tahun",AWAL:"Jumlah Awal",MASUK:"Jumlah Masuk",PINDAHAN:"Pindahan",DIPINDAHKAN:"Dipindahkan",HIDUP:"Pasien Hidup",MATI:"Pasien Mati",MATIKURANG48:"Mati < 48 Jam",MATILEBIH48:"Mati > 48 Jam",LD:"Lama Dirawat",SISA:"Sisa",HP:"Hari Perawatan",JMLTT:"Jumlah Tempat Tidur",BOR:"Bed Occupancy Rate",BORLK:"BOR Laki-laki",BORPR:"BOR Perempuan",AVLOS:"Average Length of Stay",AVLOSLK:"AVLOS Laki-laki",AVLOSPR:"AVLOS Perempuan",BTO:"Bed Turn Over",BTOLK:"BTO Laki-laki",BTOPR:"BTO Perempuan",TOI:"Turn Over Interval",TOILK:"TOI Laki-laki",TOIPR:"TOI Perempuan",NDR:"Net Death Rate",NDRLK:"NDR Laki-laki",NDRPR:"NDR Perempuan",GDR:"Gross Death Rate",GDRLK:"GDR Laki-laki",GDRPR:"GDR Perempuan",JMLKUNJUNGAN:"Jumlah Kunjungan"};return a.jsxs(u,{user:i.user,children:[a.jsx(m,{title:"Beranda"}),a.jsx("div",{className:"py-5 flex flex-wrap w-full",children:a.jsx("div",{className:"max-w-full mx-auto sm:px-5 lg:px-5 w-full",children:a.jsx("div",{className:"bg-white dark:bg-indigo-950 overflow-hidden shadow-sm sm:rounded-lg w-full",children:a.jsxs("div",{className:"p-5 text-gray-900 dark:text-gray-100 w-full",children:[a.jsx("h1",{className:"uppercase text-center font-bold text-2xl pb-2",children:"LAPORAN RL 1.2"}),a.jsxs("p",{className:"text-center pb-4",children:[a.jsx("strong",{children:"Periode Tanggal: "}),s(l)," - ",s(t)]}),a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"min-w-full table-auto w-full border",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"uppercase dark:bg-indigo-700",children:[a.jsx("th",{className:"border px-4 py-2",children:"Nama/Uraian"}),a.jsx("th",{className:"border px-4 py-2",children:"Nilai/Keterangan"})]})}),a.jsx("tbody",{children:Object.entries(n).map(([r,c],o)=>a.jsxs("tr",{children:[a.jsx("td",{className:"border px-4 py-2",children:d[r]||r}),a.jsx("td",{className:"border px-4 py-2 text-center",children:c})]},o))})]})})]})})})})]})}export{R as default};
