<?php

namespace App\Http\Controllers\React;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReduxController extends Controller
{
    public function counter()
    {
        return view('counter/counter');
    }
}
