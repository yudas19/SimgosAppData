import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import ButtonDetail from "@/Components/ButtonDetail";

export default function Index({ auth, dataTable, queryParams = {} }) {

    // Function to handle search input changes
    const searchFieldChanged = (nama, value) => {
        const updatedParams = { ...queryParams, page: 1 }; // Reset to the first page
        if (value) {
            updatedParams[nama] = value;
        } else {
            delete updatedParams[nama];
        }
        // Update the URL and fetch new data based on updatedParams
        router.get(route('tindakanToLoinc.index'), updatedParams, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    // Function to handle change in search input
    const onInputChange = (nama, e) => {
        const value = e.target.value;
        searchFieldChanged(nama, value);
    };

    // Function to handle Enter key press in search input
    const onKeyPress = (nama, e) => {
        if (e.key !== 'Enter') return;
        searchFieldChanged(nama, e.target.value);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="SatuSehat" />

            <div className="py-5">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-5">
                    <div className="bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950">
                            <div className="overflow-auto w-full">
                                <h1 className="uppercase text-center font-bold text-2xl pb-2">Data Tindakan To Loinc</h1>
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900">
                                    <thead className="text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500">
                                        <tr>
                                            <th colSpan={6} className="px-3 py-2">
                                                <TextInput
                                                    className="w-full"
                                                    defaultValue={queryParams.nama || ''}
                                                    placeholder="Cari berdasarkan nama tindakan"
                                                    onChange={e => onInputChange('nama', e)}
                                                    onKeyPress={e => onKeyPress('nama', e)}
                                                />
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead className="text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500">
                                        <tr>
                                            <th className="px-3 py-2">TINDAKAN ID</th>
                                            <th className="px-3 py-2">TINDAKAN NAMA</th>
                                            <th className="px-3 py-2">LOINC ID</th>
                                            <th className="px-3 py-2">LOINC KATEGORI</th>
                                            <th className="px-3 py-2">LOINC NAMA</th>
                                            <th className="px-3 py-2 text-center">MENU</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataTable.data.length > 0 ? (
                                            dataTable.data.map((data, index) => (
                                                <tr key={`${data.refId}-${index}`}
                                                    className="bg-white border-b dark:bg-indigo-950 dark:border-gray-500">
                                                    <td className="px-3 py-3">{data.tindakan_id}</td>
                                                    <td className="px-3 py-3">{data.tindakan_nama}</td>
                                                    <td className="px-3 py-3">{data.loinc_id}</td>
                                                    <td className="px-3 py-3">{data.loinc_kategori}</td>
                                                    <td className="px-3 py-3">{data.loinc_nama}</td>
                                                    <td className="px-1 py-1 text-center flex items-center justify-center space-x-1">
                                                        <ButtonDetail
                                                            href={route("tindakanToLoinc.detail", { id: data.tindakan_id })}
                                                        />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr className="bg-white border-b dark:bg-indigo-950 dark:border-gray-500">
                                                <td colSpan="6" className="px-3 py-3 text-center">Tidak ada data yang dapat ditampilkan</td>
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
        </AuthenticatedLayout>
    );
}