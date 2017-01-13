<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 1/13/2017
 * Time: 9:20 PM
 */

namespace App\DesignPattern\Adapter;


class Ipad implements eReaderInterface
{

    public function turnOn()
    {
        var_dump("Turn on ipad");
    }

    public function pressNext()
    {
        var_dump("Press next on ipad");
    }
}