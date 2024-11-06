import React, { useState } from 'react';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';

export default function ResponsiveNavInventory() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="w-full flex items-center justify-between ps-3 pe-4 py-2 border-l-4 border-transparent text-gray-600 dark:text-amber-400 hover:text-gray-800 dark:hover:text-amber-300 hover:bg-gray-50 dark:hover:bg-indigo-800 hover:border-gray-300 dark:hover:border-gray-600 text-base font-medium focus:outline-none transition duration-150 ease-in-out"
            >
                Inventory
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white dark:bg-indigo-950 z-10">
                    <div className="rounded-md shadow-xs">
                        <div className="py-1">
                            <ResponsiveNavLink href={route('daftarBarang.index')}>Daftar Barang</ResponsiveNavLink>
                            <ResponsiveNavLink href={route('barangRuangan.index')}>Barang Ruangan</ResponsiveNavLink>
                            <ResponsiveNavLink href={route('penerimaanBarang.index')}>Penerimaan Barang</ResponsiveNavLink>
                            <ResponsiveNavLink href={route('pengirimanBarang.index')}>Pengiriman Barang</ResponsiveNavLink>
                            <ResponsiveNavLink href={route('permintaanBarang.index')}>Permintaan Barang</ResponsiveNavLink>
                            <ResponsiveNavLink href={route('orderBarang.index')}>Order Barang</ResponsiveNavLink>
                            <ResponsiveNavLink href={route('stockBarang.index')}>Stock Opname</ResponsiveNavLink>
                            <ResponsiveNavLink href={route('transaksiBarang.index')}>Transaksi Ruangan</ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
