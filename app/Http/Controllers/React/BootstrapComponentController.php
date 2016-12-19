<?php

namespace App\Http\Controllers\React;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BootstrapComponentController extends Controller
{
    public function index()
    {
        return view('bootstrap/index');
    }
}
