import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Detail({ auth, detail }) {
    // Prepare the data to be displayed in the desired format
    const encounterDetails = [
        { no: 1, uraian: 'ID', value: detail.id },
        { no: 2, uraian: 'Identifier', value: JSON.stringify(detail.identifier) },
        { no: 3, uraian: 'Status', value: detail.status },
        { no: 4, uraian: 'Class', value: JSON.stringify(detail.class) },
        { no: 5, uraian: 'Subject', value: JSON.stringify(detail.subject) },
        { no: 6, uraian: 'Participant', value: JSON.stringify(detail.participant) },
        { no: 7, uraian: 'Period', value: JSON.stringify(detail.period) },
        { no: 8, uraian: 'Location', value: JSON.stringify(detail.location) },
        { no: 9, uraian: 'Diagnosis', value: JSON.stringify(detail.diagnosis) },
        { no: 10, uraian: 'Status History', value: JSON.stringify(detail.statusHistory) },
        { no: 11, uraian: 'Service Provider', value: JSON.stringify(detail.serviceProvider) },
        { no: 12, uraian: 'Ref ID', value: detail.refId },
        { no: 13, uraian: 'Send Date', value: detail.sendDate },
        { no: 14, uraian: 'Send', value: detail.send },
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Detail Encounter" />

            <div className="py-5">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-5">
                    <div className="bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950">
                            <div className="overflow-auto w-full">
                                <h1 className="uppercase text-center font-bold text-xl pb-2">
                                    DATA DETAIL ENCOUNTER
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
                                        {encounterDetails.map((detailItem, index) => (
                                            <tr key={index} className="bg-white border-b dark:bg-indigo-950 dark:border-gray-500">
                                                <td className="px-3 py-3">{detailItem.no}</td>
                                                <td className="px-3 py-3">{detailItem.uraian}</td>
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
