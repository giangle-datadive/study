<?php

namespace App\Http\Controllers\React;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StickyNoteController extends Controller
{
    public function index()
    {
        return view('sticky/index');
    }
}
