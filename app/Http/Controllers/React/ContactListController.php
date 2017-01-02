<?php

namespace App\Http\Controllers\React;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactListController extends Controller
{
    public function index()
    {
        return view('contactlist/index');
    }

    public function boi()
    {
        $dateRange = range(1, 31);
        $monthRange = range(1, 12);
        $yearRange = range(1990, 2000);

        return view('boi/index', compact('dateRange', 'monthRange', 'yearRange'));
    }
}
