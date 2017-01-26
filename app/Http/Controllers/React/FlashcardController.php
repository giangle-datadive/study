<?php

namespace App\Http\Controllers\React;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FlashcardController extends Controller
{
    public function index()
    {
        return view('flash-card.index');
    }
}
