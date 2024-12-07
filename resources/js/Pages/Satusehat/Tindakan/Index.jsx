import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import Pagination from "@/Components/Pagination";
import ButtonDetail from "@/Components/ButtonDetail";
import Table from "@/Components/Table";
import TableHeader from "@/Components/TableHeader";
import TableHeaderCell from "@/Components/TableHeaderCell";
import TableRow from "@/Components/TableRow";
import TableCell from "@/Components/TableCell";

export default function Index({ auth, dataTable, queryParams = {} }) {

    const headers = [
        { name: "TINDAKAN ID" },
        { name: "TINDAKAN NAMA" },
        { name: "LOINC ID" },
        { name: "LOINC KATEGORI" },
        { name: "LOINC NAMA" },
        { name: "MENU", className: "text-center" },
    ];

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
                                <Table>
                                    <TableHeader>
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
                                    </TableHeader>
                                    <TableHeader>
                                        <tr>
                                            {headers.map((header, index) => (
                                                <TableHeaderCell key={index} className={header.className || ""}>
                                                    {header.name}
                                                </TableHeaderCell>
                                            ))}
                                        </tr>
                                    </TableHeader>
                                    <tbody>
                                        {dataTable.data.length > 0 ? (
                                            dataTable.data.map((data, index) => (
                                                <TableRow key={data.tindakan_id} isEven={index % 2 === 0}>
                                                    <TableCell>{data.tindakan_id}</TableCell>
                                                    <TableCell>{data.tindakan_nama}</TableCell>
                                                    <TableCell>{data.loinc_id}</TableCell>
                                                    <TableCell>{data.loinc_kategori}</TableCell>
                                                    <TableCell>{data.loinc_nama}</TableCell>

                                                    <td className="px-1 py-1 text-center flex items-center justify-center space-x-1">
                                                        <ButtonDetail
                                                            href={route("tindakanToLoinc.detail", { id: data.tindakan_id })}
                                                        />
                                                    </td>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <tr className="bg-white border-b dark:bg-indigo-950 dark:border-gray-500">
                                                <td colSpan="6" className="px-3 py-3 text-center">Tidak ada data yang dapat ditampilkan</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                                <Pagination links={dataTable.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
