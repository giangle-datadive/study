<?php

namespace App\Http\Controllers\DesignPattern;

use App\Http\Controllers\Controller;
use App\DesignPattern\Decorator\OilChange;
use App\DesignPattern\Decorator\BasicCheck;

class DecoratorController extends Controller
{
    public function index()
    {
        $bikefix = new OilChange(new BasicCheck());

        dd($bikefix->getCost());
    }
}
