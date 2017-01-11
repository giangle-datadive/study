<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 1/11/2017
 * Time: 9:51 PM
 */

namespace App\DesignPattern\Decorator;

class BasicCheck implements BikeServices
{

    public function getCost()
    {
        return 10;
    }
}