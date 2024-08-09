import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";

export default function Index({ auth, medication, queryParams = {} }) {

    // Function to handle search input changes
    const searchFieldChanged = (manufacturer, value) => {
        const updatedParams = { ...queryParams, page: 1 }; // Reset to the first page
        if (value) {
            updatedParams[manufacturer] = value;
        } else {
            delete updatedParams[manufacturer];
        }
        // Update the URL and fetch new data based on updatedParams
        router.get(route('medication.index'), updatedParams, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    // Function to handle change in search input
    const onInputChange = (manufacturer, e) => {
        const value = e.target.value;
        searchFieldChanged(manufacturer, value);
    };

    // Function to handle Enter key press in search input
    const onKeyPress = (manufacturer, e) => {
        if (e.key !== 'Enter') return;
        searchFieldChanged(manufacturer, e.target.value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="SatuSehat" />

            <div className="py-5">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950">
                            <div className="overflow-auto">
                                <h1 className="uppercase text-center font-bold text-2xl pb-2">Data Medication</h1>
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900">
                                    <thead className="text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500">
                                        <tr>
                                            <th colSpan={5} className="px-3 py-2">
                                                <TextInput
                                                    className="w-full"
                                                    defaultValue={queryParams.manufacturer || ''}
                                                    placeholder="Cari medication"
                                                    onChange={e => onInputChange('manufacturer', e)}
                                                    onKeyPress={e => onKeyPress('manufacturer', e)}
                                                />
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead className="text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500">
                                        <tr>
                                            <th className="px-3 py-2">ID</th>
                                            <th className="px-3 py-2">MANUFACTURER</th>
                                            <th className="px-3 py-2">REF ID</th>
                                            <th className="px-3 py-2">NOPEN</th>
                                            <th className="px-3 py-2">SEND DATE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {medication.data.length > 0 ? (
                                            medication.data.map((medication, index) => (
                                                <tr key={`${medication.id}-${index}`} className="bg-white border-b dark:bg-indigo-950 dark:border-gray-500">
                                                    <td className="px-3 py-3">{medication.id}</td>
                                                    <td className="px-3 py-3">{medication.manufacturer}</td>
                                                    <td className="px-3 py-3">{medication.refId}</td>
                                                    <td className="px-3 py-3">{medication.nopen}</td>
                                                    <td className="px-3 py-3">{medication.sendDate}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr className="bg-white border-b dark:bg-indigo-950 dark:border-gray-500">
                                                <td colSpan="5" className="px-3 py-3 text-center">Tidak ada data yang dapat ditampilkan</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                                <Pagination links={medication.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
