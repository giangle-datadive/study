<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 1/11/2017
 * Time: 9:43 PM
 */

namespace App\DesignPattern\Decorator;


class OilChange implements BikeServices
{
    protected $bikeServices;

    public function __construct(BikeServices $bikeServices)
    {
        $this->bikeServices = $bikeServices;
    }

    public function getCost()
    {
        return 25 + $this->bikeServices->getCost();
    }
}