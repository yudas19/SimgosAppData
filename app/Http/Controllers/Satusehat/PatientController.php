<?php

namespace App\Http\Controllers\Satusehat;

use App\Http\Controllers\Controller;
use App\Models\SatusehatPatientModel;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function index()
    {
        // Define base query
        $query = SatusehatPatientModel::whereNotNull('id')->orderByDesc('getDate');

        // Apply search filter if 'name' query parameter is present
        if (request('name')) {
            $searchName = strtolower(request('name')); // Convert search term to lowercase
            $query->whereRaw('LOWER(name) LIKE ?', ['%' . $searchName . '%']); // Convert column to lowercase for comparison
        }

        // Paginate the results
        $data = $query->paginate(10)->appends(request()->query());

        // Convert data to array
        $dataArray = $data->toArray();

        // Return Inertia view with paginated data
        return inertia("Satusehat/Patient/Index", [
            'dataTable' => [
                'data' => $dataArray['data'], // Only the paginated data
                'links' => $dataArray['links'], // Pagination links
            ],
            'queryParams' => request()->all()
        ]);
    }
}