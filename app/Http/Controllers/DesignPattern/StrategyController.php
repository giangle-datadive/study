<?php

namespace App\Http\Controllers;

use App\DesignPattern\Strategy\App;
use App\DesignPattern\Strategy\Database;
use Illuminate\Http\Request;

class StrategyController extends Controller
{

    public function index()
    {
        $app = new App();

        $app->log('data');
    }
}
