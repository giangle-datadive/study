<?php

namespace App\Http\Controllers\React;

use Faker\Factory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BoiController extends Controller
{
    public function index()
    {
        return view('boi/index');
    }

    public function result(Request $request)
    {
        $data = [
            'url' => '/images/rs.jpg',
            'description' => Factory::create()->sentences(6),
            'short_description' => Factory::create()->sentences(2),
        ];
        return response()->json(compact('data'));
    }
}
