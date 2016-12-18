<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 12/8/2016
 * Time: 11:06 PM
 */

namespace App\DesignPattern\Decorator;


class TierRotation implements CarService
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
        return $this->carService->getDescription() . " Add TierRotation,";
        // TODO: Implement getDescription() method.
    }
}