<?php

namespace App\Http\Controllers\React;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GithubProfile extends Controller
{
    public function index()
    {
        return view('github/index');
    }
}
