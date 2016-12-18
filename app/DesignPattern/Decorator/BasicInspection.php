<?php

namespace App\DesignPattern\Decorator;

class BasicInspection implements CarService
{
    public function getCost()
    {
        return 25;
    }

    public function getDescription()
    {
        return "Basic Inspection,";
    }
}