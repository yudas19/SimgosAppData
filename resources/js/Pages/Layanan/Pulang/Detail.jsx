import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ButtonBack from '@/Components/ButtonBack';
import DetailMeninggal from './DetailMeninggal';

export default function Detail({ auth, detail, detailMeninggal }) {
    // Generate detailData dynamically from the detail object
    const detailData = Object.keys(detail).map((key) => ({
        uraian: key,
        value: detail[key],
    }));

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Layanan" />

            <div className="py-5">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-5">
                    <div className="bg-white dark:bg-indigo-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-5 text-gray-900 dark:text-gray-100 dark:bg-indigo-950">
                            <div className="overflow-auto w-full">
                                <div className="relative flex items-center justify-between pb-2">
                                    <ButtonBack href={route("layananPulang.index")} />
                                    <h1 className="absolute left-1/2 transform -translate-x-1/2 uppercase font-bold text-2xl">DATA DETAIL LAYANAN PASIEN PULANG</h1>
                                </div>
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 dark:bg-indigo-900">
                                    <thead className="text-sm font-bold text-gray-700 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-100 border-b-2 border-gray-500">
                                        <tr>
                                            <th className="px-3 py-2">NO</th>
                                            <th className="px-3 py-2">COLUMN</th>
                                            <th className="px-3 py-2">VALUE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {detailData.map((detailItem, index) => (
                                            <tr key={index} className="bg-white border-b dark:bg-indigo-950 dark:border-gray-500">
                                                <td className="px-3 py-3 w-16">{index + 1}</td>
                                                <td className="px-3 py-3 w-56">{detailItem.uraian}</td>
                                                <td className="px-3 py-3 break-words">
                                                    {detailItem.uraian === "STATUS" ? (
                                                        detailItem.value === 0 ? "Belum Final" :
                                                            detailItem.value === 1 ? "Sudah Final" :
                                                                detailItem.value
                                                    ) : detailItem.value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Render DetailMeninggal only if detailMeninggal is available */}
            {detailMeninggal && (
                <DetailMeninggal detailMeninggal={Object.keys(detailMeninggal).map((key) => ({
                    uraian: key,
                    value: detailMeninggal[key],
                }))} />
            )}
        </AuthenticatedLayout>
    );
}