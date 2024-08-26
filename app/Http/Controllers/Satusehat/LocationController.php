<?php

namespace App\Http\Controllers\Satusehat;

use App\Http\Controllers\Controller;
use App\Models\SatusehatLocationModel;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function index()
    {
        // Define base query
        $query = SatusehatLocationModel::orderBy('refID');

        // Apply search filter if 'name' query parameter is present
        if (request('name')) {
            $query->where('name', 'like', '%' . request('name') . '%');
        }

        // Paginate the results
        $data = $query->paginate(10)->appends(request()->query());

        // Convert data to array
        $dataArray = $data->toArray();

        // Return Inertia view with paginated data
        return inertia("Satusehat/Location/Index", [
            'dataTable' => [
                'data' => $dataArray['data'], // Only the paginated data
                'links' => $dataArray['links'], // Pagination links
            ],
            'queryParams' => request()->all()
        ]);
    }

    public function detail($id)
    {
        // Fetch the specific encounter by ID
        $query = SatusehatLocationModel::where('refId', $id)->first();

        // Check if the record exists
        if (!$query) {
            // Handle the case where the encounter was not found
            return redirect()->route('encounter.index')->with('error', 'Encounter not found.');
        }

        // Return Inertia view with the encounter data
        return inertia("Satusehat/Location/Detail", [
            'detail' => $query,
        ]);
    }
}