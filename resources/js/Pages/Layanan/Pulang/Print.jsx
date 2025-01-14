import React, { useEffect } from 'react';
import { Head } from "@inertiajs/react";
import { formatDate } from '@/utils/formatDate';

export default function Print({ data, dariTanggal, sampaiTanggal, keadaanPulang, jenisPenjamin }) {

    useEffect(() => {
        import('@/../../resources/css/print.css');
    }, []);

    return (
        <div className="h-screen w-screen bg-white">
            <Head title="Layanan" />

            <div className="content">
                <div className="w-full mx-auto sm:px-6 lg:px-5">
                    <div className="w-full bg-white overflow-hidden">
                        <div className="p-2 bg-white">
                            <div className="overflow-auto">
                                <h1 className="text-center font-bold text-2xl">
                                    LAYANAN LABORATORIUM
                                </h1>
                                <h2 className="text-center font-bold text-2xl uppercase">
                                    JENIS PENJAMIN : {jenisPenjamin}
                                </h2>
                                <h2 className="text-center font-bold text-2xl uppercase">
                                    KEADAAN PULANG : {keadaanPulang}
                                </h2>
                                <p className="text-center font-bold text-2xl">
                                    Selang Tanggal : {formatDate(dariTanggal)} s.d {formatDate(sampaiTanggal)}
                                </p>

                                <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-900 mt-4">
                                    <thead className="text-sm font-bold text-gray-900 bg-white dark:text-gray-900 border-b-2 border-gray-500">
                                        <tr>
                                            <th className="px-3 py-2">NO</th>
                                            <th className="px-3 py-2">ID PULANG</th>
                                            <th className="px-3 py-2">TANGGAL</th>
                                            <th className="px-3 py-2">NORM</th>
                                            <th className="px-3 py-2">NAMA PASIEN</th>
                                            {jenisPenjamin === 'BPJS KESEHATAN' && (
                                                <th className="px-3 py-2">NOMOR SEP</th>
                                            )}
                                            <th className="px-3 py-2">KEADAAN</th>
                                            <th className="px-3 py-2">DPJP</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, key) => (
                                            <tr key={item.idPulang} className="border-b bg-white dark:border-gray-500">
                                                <td className="px-3 py-2 text-nowrap">{key + 1}</td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    {item.idPulang}
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    {item.tanggal}
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    {item.norm}
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    {item.namaPasien}
                                                </td>
                                                {jenisPenjamin === 'BPJS KESEHATAN' && (
                                                    <td className="px-3 py-2 text-nowrap">{item.nomorSEP}</td>
                                                )}
                                                <td className="px-3 py-2 text-nowrap">
                                                    {item.keadaan}
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    {item.gelarDepan} <span className='uppercase'>{item.dokter}</span> {item.gelarBelakang}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="bg-white text-black text-sm">
                    <div className="text-center">
                        <p>&copy; {new Date().getFullYear()} Hidayat - Tim IT RSUD Dr. M. M. Dunda Limboto. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
