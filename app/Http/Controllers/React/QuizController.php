<?php

namespace App\Http\Controllers\React;

use App\Http\Controllers\Controller;

class QuizController extends Controller
{
    public function index()
    {
        return view('quiz/index');
    }
}
