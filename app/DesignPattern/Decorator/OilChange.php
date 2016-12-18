<?php

namespace App\DesignPattern\Decorator;

class OilChange implements CarService
{
    protected $carService;

    public function __construct(CarService $carService)
    {
        $this->carService = $carService;
    }

    public function getCost()
    {
        return 19 + $this->carService->getCost();
    }

    public function getDescription()
    {
        return $this->carService->getDescription() . " Add OilChange,";
        // TODO: Implement getDescription() method.
    }
}