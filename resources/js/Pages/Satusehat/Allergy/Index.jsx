import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import ButtonDetail from "@/Components/ButtonDetail";

export default function Index({ auth, dataTable, queryParams = {} }) {

    // Function to handle search input changes
    const searchFieldChanged = (patient, value) => {
        const updatedParams = { ...queryParams, page: 1 }; // Reset to the first page
        if (value) {
            updatedParams[patient] = value;
        } else {
            delete updatedParams[patient];
        }
        // Update the URL and fetch new data based on updatedParams
        router.get(route('allergy.index'), updatedParams, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    // Function to handle change in search input
    const onInputChange = (patient, e) => {
        const value = e.target.value;
        searchFieldChanged(patient, value);
    };

    // Function to handle Enter key press in search input
    const onKeyPress = (patient, e) => {
        if (e.key !== 'Enter') return;
        searchFieldChanged(patient, e.target.value);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="SatuSehat" />

            <div className="py-5">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-5">
                    <div className="bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950">
                            <div className="overflow-auto w-full">
                                <h1 className="uppercase text-center font-bold text-2xl pb-2">Data Allergy Intolerance</h1>
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900">
                                    <thead className="text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500">
                                        <tr>
                                            <th colSpan={6} className="px-3 py-2">
                                                <TextInput
                                                    className="w-full"
                                                    defaultValue={queryParams.patient || ''}
                                                    placeholder="Cari berdasarkan patient"
                                                    onChange={e => onInputChange('patient', e)}
                                                    onKeyPress={e => onKeyPress('patient', e)}
                                                />
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead className="text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500">
                                        <tr>
                                            <th className="px-3 py-2">ID</th>
                                            <th className="px-3 py-2">PATIENT</th>
                                            <th className="px-3 py-2">CLINICAL STATUS</th>
                                            <th className="px-3 py-2">REF ID</th>
                                            <th className="px-3 py-2">SEND DATE</th>
                                            <th className="px-3 py-2 text-center">MENU</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataTable.data.length > 0 ? (
                                            dataTable.data.map((data, index) => (
                                                <tr key={`${data.refId}-${index}`}
                                                    className="bg-white border-b dark:bg-indigo-950 dark:border-gray-500">
                                                    <td className="px-3 py-3">{data.id}</td>
                                                    <td className="px-3 py-3">{data.patient}</td>
                                                    <td className="px-3 py-3">{data.clinicalStatus}</td>
                                                    <td className="px-3 py-3">{data.refId}</td>
                                                    <td className="px-3 py-3">{data.sendDate}</td>
                                                    <td className="px-1 py-1 text-center flex items-center justify-center space-x-1">
                                                        <ButtonDetail
                                                            href={route("allergy.detail", { id: data.refId })}
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