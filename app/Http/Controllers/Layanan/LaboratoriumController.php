<?php

namespace App\Http\Controllers\Layanan;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class LaboratoriumController extends Controller
{
    public function index()
    {
        // Get the search term from the request
        $searchSubject = request('nama') ? strtolower(request('nama')) : null;

        // Start building the query using the query builder
        $query = DB::connection('mysql7')->table('layanan.order_lab as orderLab')
            ->leftJoin('pendaftaran.kunjungan as kunjungan', 'kunjungan.NOMOR', '=', 'orderLab.KUNJUNGAN')
            ->leftJoin('pendaftaran.pendaftaran as pendaftaran', 'pendaftaran.NOMOR', '=', 'kunjungan.NOPEN')
            ->leftJoin('master.pasien as pasien', 'pasien.NORM', '=', 'pendaftaran.NORM')
            ->leftJoin('master.dokter as dokter', 'dokter.ID', '=', 'orderLab.DOKTER_ASAL')
            ->leftJoin('master.pegawai as pegawai', 'pegawai.NIP', '=', 'dokter.NIP')
            ->leftJoin('master.kartu_identitas_pasien as kip', 'pasien.NORM', '=', 'kip.NORM')
            ->leftJoin('bpjs.peserta as peserta', 'kip.NOMOR', '=', 'peserta.nik')
            ->leftJoin('layanan.order_detil_lab as orderDetail', 'orderDetail.ORDER_ID', '=', 'orderLab.NOMOR')
            ->leftJoin('layanan.hasil_lab as hasil', 'hasil.TINDAKAN_MEDIS', '=', 'orderDetail.REF');

        // Add search filter if provided
        if ($searchSubject) {
            $query->whereRaw('LOWER(pasien.nama) LIKE ?', ['%' . $searchSubject . '%']);
        }

        // Group by 'nomor' and select the first occurrence for other fields
        $query->selectRaw('
                orderLab.NOMOR as nomor,
                MIN(orderLab.TANGGAL) as tanggal,
                MIN(orderLab.KUNJUNGAN) as kunjungan,
                MIN(pegawai.NAMA) as dokter,
                MIN(pegawai.GELAR_DEPAN) as gelarDepan,
                MIN(pegawai.GELAR_BELAKANG) as gelarBelakang,
                MIN(pasien.NORM) as norm,
                MIN(pasien.NAMA) as nama,
                MIN(peserta.noKartu) as noKartu,
                MIN(orderLab.STATUS) as statusKunjungan,
                MIN(hasil.STATUS) as statusHasil
            ')
            ->groupBy('orderLab.NOMOR');

        // Paginate the results
        $data = $query->orderByDesc('tanggal')->paginate(5)->appends(request()->query());

        // Convert data to array
        $dataArray = $data->toArray();

        // Return Inertia view with paginated data
        return inertia("Layanan/Laboratorium/Index", [
            'dataTable' => [
                'data' => $dataArray['data'], // Only the paginated data
                'links' => $dataArray['links'], // Pagination links
            ],
            'queryParams' => request()->all()
        ]);
    }


    public function detail($id)
    {
        // Fetch data utama (main lab order details)
        $queryDetail = DB::connection('mysql7')->table('layanan.order_lab as order')
            ->select(
                'order.NOMOR',
                'order.KUNJUNGAN',
                'order.TANGGAL',
                'pasien.NORM',
                'pasien.NAMA',
                DB::raw('CONCAT(pegawai.GELAR_DEPAN, " ", pegawai.NAMA, " ", pegawai.GELAR_BELAKANG) as DOKTER_ASAL'),
                'ruangan.DESKRIPSI as TUJUAN',
                'order.CITO',
                'pengguna.NAMA as OLEH',
                'order.ALASAN',
                'order.KETERANGAN',
                'order.ADA_PENGANTAR_PA',
                'order.NOMOR_SPESIMEN',
                'order.SPESIMEN_KLINIS_ASAL_SUMBER',
                'order.SPESIMEN_KLINIS_CARA_PENGAMBILAN',
                'order.SPESIMEN_KLINIS_WAKTU_PENGAMBILAN',
                'order.SPESIMEN_KLINIS_KONDISI_PENGAMBILAN',
                'order.SPESIMEN_KLINIS_JUMLAH',
                'order.SPESIMEN_KLINIS_VOLUME',
                'order.FIKSASI_WAKTU',
                'order.FIKSASI_CAIRAN',
                'order.FIKSASI_VOLUME_CAIRAN',
                'order.SPESIMEN_KLINIS_PETUGAS_PENGAMBIL',
                'order.SPESIMEN_KLINIS_PETUGAS_PENGANTAR',
                'order.STATUS_PUASA_PASIEN',
                'order.STATUS',
            )
            ->leftJoin('pendaftaran.kunjungan as kunjungan', 'kunjungan.NOMOR', '=', 'order.KUNJUNGAN')
            ->leftJoin('pendaftaran.pendaftaran as pendaftaran', 'pendaftaran.NOMOR', '=', 'kunjungan.NOPEN')
            ->leftJoin('master.pasien as pasien', 'pasien.NORM', '=', 'pendaftaran.NORM')
            ->leftJoin('master.dokter as dokter', 'dokter.ID', '=', 'order.DOKTER_ASAL')
            ->leftJoin('master.pegawai as pegawai', 'pegawai.NIP', '=', 'dokter.NIP')
            ->leftJoin('master.ruangan as ruangan', 'ruangan.ID', '=', 'order.TUJUAN')
            ->leftJoin('aplikasi.pengguna as pengguna', 'pengguna.ID', '=', 'order.OLEH')
            ->where('order.NOMOR', $id)
            ->first();

        $queryHasil = DB::connection('mysql7')->table('layanan.order_detil_lab as orderDetail')
            ->select(
                'orderDetail.ORDER_ID',
                'tindakan.NAMA as TINDAKAN',
                'parameter.PARAMETER as PARAMETER',
                'hasilLab.HASIL',
                'hasilLab.NILAI_NORMAL',
                'hasilLab.SATUAN',
                'hasilLab.STATUS'
            )
            ->leftJoin('master.tindakan as tindakan', 'tindakan.ID', '=', 'orderDetail.TINDAKAN')
            ->leftJoin('layanan.hasil_lab as hasilLab', 'hasilLab.TINDAKAN_MEDIS', '=', 'orderDetail.REF')
            ->leftJoin('master.parameter_tindakan_lab as parameter', 'parameter.ID', '=', 'hasilLab.PARAMETER_TINDAKAN')
            ->where('orderDetail.ORDER_ID', $id)
            ->get();

        // Fetch data catatan (main lab order details)
        $catatanID = $queryDetail->NOMOR;
        $queryCatatan = DB::connection('mysql7')->table('pendaftaran.kunjungan as kunjungan')
            ->select(
                'catatan.KUNJUNGAN',
                'catatan.TANGGAL',
                'catatan.CATATAN',
                DB::raw('CONCAT(dokterLab.GELAR_DEPAN, " ", dokterLab.NAMA, " ", dokterLab.GELAR_BELAKANG) as DOKTER_LAB'),
                'catatan.STATUS',
            )
            ->leftJoin('layanan.catatan_hasil_lab as catatan', 'catatan.KUNJUNGAN', '=', 'kunjungan.NOMOR')
            ->leftJoin('layanan.order_lab as order', 'order.NOMOR', '=', 'kunjungan.REF')
            ->leftJoin('master.dokter as pegawaiLab', 'pegawaiLab.ID', '=', 'catatan.DOKTER')
            ->leftJoin('master.pegawai as dokterLab', 'dokterLab.NIP', '=', 'pegawaiLab.NIP')
            ->where('kunjungan.REF', $catatanID)
            ->first();

        // Error handling: No data found
        if (!$queryDetail) {
            return redirect()->route('layananLab.index')->with('error', 'Data tidak ditemukan.');
        }

        // Return both data to the view
        return inertia("Layanan/Laboratorium/Detail", [
            'detail' => $queryDetail,
            'detailHasil' => $queryHasil,
            'detailCatatan' => $queryCatatan,
        ]);
    }

    public function print(Request $request)
    {
        // Validasi input
        $request->validate([
            'jenisPenjamin'  => 'nullable|integer|in:1,2',
            'jenisKunjungan' => 'nullable|integer|in:1,2',
            'dari_tanggal'   => 'required|date',
            'sampai_tanggal' => 'required|date|after_or_equal:dari_tanggal',
        ]);

        // Ambil nilai input
        $jenisPenjamin  = $request->input('jenisPenjamin');
        $jenisKunjungan = $request->input('jenisKunjungan');
        $dariTanggal    = $request->input('dari_tanggal');
        $sampaiTanggal  = $request->input('sampai_tanggal');

        // Variable default untuk label
        $penjamin = 'Semua Penjamin';
        $kunjungan = 'Semua Kunjungan';

        // Query utama
        $query = DB::connection('mysql7')->table('layanan.hasil_lab as hasilLab')
            ->select([
                'hasilLab.ID as idHasil',
                'hasilLab.TANGGAL as tanggalHasil',
                'tindakan.NAMA as namaTindakan',
                'hasilLab.HASIL as hasil',
                'hasilLab.SATUAN as satuan',
                'pendaftaran.NORM as norm',
                'pasien.NAMA as namaPasien',
                'jenisPenjamin.NOMOR as nomorSEP',
                'pegawai.NAMA as pelaksana',
            ])
            ->leftJoin('layanan.tindakan_medis as tindakanMedis', 'tindakanMedis.ID', '=', 'hasilLab.TINDAKAN_MEDIS')
            ->leftJoin('pendaftaran.kunjungan as kunjungan', 'kunjungan.NOMOR', '=', 'tindakanMedis.KUNJUNGAN')
            ->leftJoin('master.tindakan as tindakan', 'tindakan.ID', '=', 'tindakanMedis.TINDAKAN')
            ->leftJoin('pendaftaran.pendaftaran as pendaftaran', 'pendaftaran.NOMOR', '=', 'kunjungan.NOPEN')
            ->leftJoin('master.pasien as pasien', 'pasien.NORM', '=', 'pendaftaran.NORM')
            ->leftJoin('aplikasi.pengguna as dokter', 'dokter.ID', '=', 'hasilLab.OLEH')
            ->leftJoin('master.pegawai as pegawai', 'pegawai.NIP', '=', 'dokter.NIP')
            ->leftJoin('pendaftaran.tujuan_pasien as tujuanPasien', 'tujuanPasien.NOPEN', '=', 'kunjungan.NOPEN')
            ->leftJoin('master.ruangan as ruangan', 'ruangan.ID', '=', 'tujuanPasien.RUANGAN');

        // Filter berdasarkan jenis penjamin
        if ($jenisPenjamin == 1) {
            $query->leftJoin('pendaftaran.penjamin as jenisPenjamin', 'jenisPenjamin.NOPEN', '=', 'kunjungan.NOPEN')
                ->where('jenisPenjamin.JENIS', 1)
                ->where('jenisPenjamin.NOMOR', ''); // Pasien Non BPJS
            $penjamin = 'Non BPJS';

            // Filter berdasarkan jenis kunjungan
            if ($jenisKunjungan == 1) {
                $query->whereNotIn('ruangan.JENIS_KUNJUNGAN', [1, 5]); // Exclude Rawat Jalan
                $kunjungan = 'Rawat Inap';
            } elseif ($jenisKunjungan == 2) {
                $query->whereIn('ruangan.JENIS_KUNJUNGAN', [1, 5]); // Include Rawat Jalan
                $kunjungan = 'Rawat Jalan';
            }
        } elseif ($jenisPenjamin == 2) {
            $query->leftJoin('pendaftaran.penjamin as jenisPenjamin', 'jenisPenjamin.NOPEN', '=', 'kunjungan.NOPEN')
                ->leftJoin('bpjs.kunjungan as kunjunganBpjs', 'kunjunganBpjs.noSEP', '=', 'jenisPenjamin.NOMOR')
                ->where(function ($query) {
                    $query->where('jenisPenjamin.JENIS', 2)
                        ->whereNotNull('jenisPenjamin.NOMOR')
                        ->where('jenisPenjamin.NOMOR', '!=', '');
                }); // Pasien BPJS
            $penjamin = 'BPJS';

            // Filter berdasarkan jenis kunjungan
            if ($jenisKunjungan == 1) {
                $query->where('kunjunganBpjs.jenisPelayanan', 1); // Pasien Rawat Inap
                $kunjungan = 'Rawat Inap';
            } elseif ($jenisKunjungan == 2) {
                $query->where('kunjunganBpjs.jenisPelayanan', 2); // Pasien Rawat Jalan
                $kunjungan = 'Rawat Jalan';
            }
        }

        // Filter berdasarkan tanggal
        $data = $query->where('hasilLab.HASIL', '!=', '')
            ->whereBetween('hasilLab.TANGGAL', [$dariTanggal, $sampaiTanggal])
            ->orderBy('hasilLab.TANGGAL')
            ->get();

        // Kirim data ke frontend menggunakan Inertia
        return inertia("Layanan/Laboratorium/Print", [
            'data'              => $data,
            'dariTanggal'       => $dariTanggal,
            'sampaiTanggal'     => $sampaiTanggal,
            'jenisPenjamin'     => $penjamin,
            'jenisKunjungan'    => $kunjungan,
        ]);
    }
}