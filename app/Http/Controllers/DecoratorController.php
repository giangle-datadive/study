<?php

namespace App\Http\Controllers;

use App\DesignPattern\Decorator\BasicInspection;
use App\DesignPattern\Decorator\OilChange;
use App\DesignPattern\Decorator\TierRotation;

class DecoratorController extends Controller
{
    public function index()
    {
        $basicInspection = new TierRotation(new OilChange(new BasicInspection()));
//        echo $basicInspection->getCost();
        echo $basicInspection->getDescription();
    }
}
