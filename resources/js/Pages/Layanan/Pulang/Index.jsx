import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import ButtonDetail from "@/Components/ButtonDetail";
import Cetak from "./Cetak"
import ButtonTime from '@/Components/ButtonTime';

export default function Index({ auth, dataTable, header, totalCount, text, keadaanPulang, queryParams = {} }) {

    // Function to handle search input changes
    const searchFieldChanged = (search, value) => {
        const updatedParams = { ...queryParams, page: 1 }; // Reset to the first page
        if (value) {
            updatedParams[search] = value;
        } else {
            delete updatedParams[search];
        }
        // Update the URL and fetch new data based on updatedParams
        router.get(route('layananPulang.index'), updatedParams, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    // Function to handle change in search input
    const onInputChange = (search, e) => {
        const value = e.target.value;
        searchFieldChanged(search, value);
    };

    // Function to handle Enter key press in search input
    const onKeyPress = (search, e) => {
        if (e.key !== 'Enter') return;
        searchFieldChanged(search, e.target.value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Layanan" />

            <div className="py-5">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-5">
                    <div className="bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950">
                            <div className="overflow-auto w-full">
                                <h1 className="uppercase text-center font-bold text-2xl pb-2">Data Pasien Pulang {header} {totalCount} {text}</h1>
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900 border border-gray-500 dark:border-gray-600">
                                    <thead className="text-sm text-nowrap font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100">
                                        <tr>
                                            <th colSpan={9} className="px-3 py-2">
                                                <div className="flex items-center space-x-2">
                                                    <TextInput
                                                        className="w-full"
                                                        defaultValue={queryParams.search || ''}
                                                        placeholder="Cari data berdasarkan nomor kunjungan, NORM, atau nama pasien"
                                                        onChange={e => onInputChange('search', e)}
                                                        onKeyPress={e => onKeyPress('search', e)}
                                                    />
                                                    <ButtonTime href={route("layananPulang.filterByTime", "hariIni")} text="Hari Ini" />
                                                    <ButtonTime href={route("layananPulang.filterByTime", "mingguIni")} text="Minggu Ini" />
                                                    <ButtonTime href={route("layananPulang.filterByTime", "bulanIni")} text="Bulan Ini" />
                                                    <ButtonTime href={route("layananPulang.filterByTime", "tahunIni")} text="Tahun Ini" />
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead className="text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-yellow-500">
                                        <tr>
                                            <th className="px-3 py-2 border border-gray-500 dark:border-gray-600">NORM</th>
                                            <th className="px-3 py-2 border border-gray-500 dark:border-gray-600">NAMA PASIEN</th>
                                            <th className="px-3 py-2 border border-gray-500 dark:border-gray-600">NOMOR KUNJUNGAN</th>
                                            <th className="px-3 py-2 border border-gray-500 dark:border-gray-600">TANGGAL</th>
                                            <th className="px-3 py-2 border border-gray-500 dark:border-gray-600">KEADAAN</th>
                                            <th className="px-3 py-2 border border-gray-500 dark:border-gray-600">DPJP</th>
                                            <th className="px-3 py-2 border border-gray-500 dark:border-gray-600 text-center">MENU</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataTable.data.length > 0 ? (
                                            dataTable.data.map((dataTable, index) => (
                                                <tr key={`${dataTable.id}-${index}`}
                                                    className={`hover:bg-indigo-100 dark:hover:bg-indigo-800 border border-gray-500 dark:border-gray-600 ${index % 2 === 0
                                                        ? 'bg-gray-50 dark:bg-indigo-950'
                                                        : 'bg-gray-50 dark:bg-indigo-950'
                                                        }`}>
                                                    <td className="px-3 py-3 border border-gray-500 dark:border-gray-600">{dataTable.norm}</td>
                                                    <td className="px-3 py-3 border border-gray-500 dark:border-gray-600 uppercase">{dataTable.nama}</td>
                                                    <td className="px-3 py-3 border border-gray-500 dark:border-gray-600">{dataTable.kunjungan}</td>
                                                    <td className="px-3 py-3 border border-gray-500 dark:border-gray-600">{dataTable.tanggal}</td>
                                                    <td className="px-3 py-3 border border-gray-500 dark:border-gray-600">{dataTable.keadaan}</td>
                                                    <td className="px-3 py-3 border border-gray-500 dark:border-gray-600">{dataTable.gelarDepan} <span className='uppercase'>{dataTable.dokter}</span>  {dataTable.gelarBelakang}</td>
                                                    <td className="px-1 py-1 text-center flex items-center justify-center space-x-1">
                                                        <ButtonDetail
                                                            href={route("layananPulang.detail", { id: dataTable.id })}
                                                        />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr className="bg-white border-b dark:bg-indigo-950 dark:border-gray-500">
                                                <td colSpan="7" className="px-3 py-3 text-center">Tidak ada data yang dapat ditampilkan</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                                <Pagination links={dataTable.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <Cetak keadaanPulang={keadaanPulang} />
            </div>
        </AuthenticatedLayout>
    );
}
