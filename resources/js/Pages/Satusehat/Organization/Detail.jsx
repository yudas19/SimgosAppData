import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Detail({ auth, detail }) {
    // Prepare the data to be displayed in the desired format
    const detailData = [
        { uraian: 'ID', value: detail.id },
        { uraian: 'IDENTIFIER', value: JSON.stringify(detail.identifier) },
        { uraian: 'ACTIVE', value: detail.active },
        { uraian: 'NAME', value: JSON.stringify(detail.name) },
        { uraian: 'ALIAS', value: JSON.stringify(detail.alias) },
        { uraian: 'TELECOM', value: JSON.stringify(detail.telecom) },
        { uraian: 'ADDRESS', value: JSON.stringify(detail.address) },
        { uraian: 'PART OF', value: JSON.stringify(detail.partOf) },
        { uraian: 'REF ID', value: JSON.stringify(detail.refId) },
        { uraian: 'SEND DATE', value: JSON.stringify(detail.sendDate) },
        { uraian: 'FLAG', value: JSON.stringify(detail.flag) },
        { uraian: 'SEND', value: detail.send },
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="SatuSehat" />

            <div className="py-5">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-5">
                    <div className="bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950">
                            <div className="overflow-auto w-full">
                                <h1 className="uppercase text-center font-bold text-xl pb-2">
                                    DATA DETAIL ORGANIZATION
                                </h1>
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900">
                                    <thead className="text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500">
                                        <tr>
                                            <th className="px-3 py-2">NO</th>
                                            <th className="px-3 py-2">URAIAN</th>
                                            <th className="px-3 py-2">VALUE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {detailData.map((detailItem, index) => (
                                            <tr key={index} className="bg-white border-b dark:bg-indigo-950 dark:border-gray-500">
                                                <td className="px-3 py-3">{index + 1}</td>
                                                <td className="px-3 py-3 uppercase">{detailItem.uraian}</td>
                                                <td className="px-3 py-3">{detailItem.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
