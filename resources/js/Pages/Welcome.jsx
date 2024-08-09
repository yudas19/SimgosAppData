import { useState } from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, hospitalName }) {

    return (
        <>
            <Head title="Dunda" />
            <div className="bg-gray-50 text-black/50 dark:bg-indigo-950 dark:text-gray-200 min-h-screen flex flex-col justify-between relative">
                <div className="absolute top-4 right-4 flex gap-4 z-10">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                            >
                                Login
                            </Link>
                            <Link
                                href={route('register')}
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className="relative flex-grow flex flex-col items-center justify-center pt-16">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl flex flex-col items-center justify-center">


                        <div className="flex flex-col items-center justify-center py-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl sm:leading-none md:text-5xl lg:text-6xl dark:text-white text-center pb-4">
                                Sistem Informasi Manajemen <br /> {hospitalName}
                            </h1>
                            <p className="mt-4 text-md text-gray-500 sm:mt-3 sm:text-2lg lg:text-3xl xl:text-4xl dark:text-gray-400 text-center">
                                Aplikasi ini dibuat sebagai pendukung SIMGOS Kementerian Kesehatan yang merupakan aplikasi utama dalam pelaksanaan pelayanan kesehatan di {hospitalName}.
                            </p>
                            <p className="mt-4 text-md text-gray-500 sm:mt-3 sm:text-2lg lg:text-3xl xl:text-4xl dark:text-gray-400 text-center">
                                Pada aplikasi ini, berisi menu-menu untuk melakukan monitoring data yang dianggap penting, dengan memanfaatkan database dari SIMGOS Kementerian Kesehatan.
                            </p>
                        </div>
                    </div>
                </div>
                <footer className="bg-gray-50 text-black/50 dark:bg-indigo-950 dark:text-gray-200 py-2">
                    <div className="text-center">
                        <p>&copy; {new Date().getFullYear()} Tim IT RSUD Dr. M. M. Dunda Limboto. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
