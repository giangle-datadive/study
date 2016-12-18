<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 12/13/2016
 * Time: 11:41 PM
 */

namespace App\DesignPattern\Adapter;


class Kindle implements eReaderInterface
{
    public function turnOn()
    {
        var_dump("Turn the kindle on");
    }

    public function clickNextButton()
    {
        var_dump("click next button");
    }
}