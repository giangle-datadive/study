<?php

namespace App\Http\Controllers\React;

use App\Http\Controllers\Controller;

class SockchatController extends Controller
{
    public function index()
    {
        return view('sockchat.index');
    }
}
