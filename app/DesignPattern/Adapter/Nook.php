<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 12/13/2016
 * Time: 11:54 PM
 */

namespace App\DesignPattern\Adapter;


class Nook implements eReaderInterface
{

    public function turnOn()
    {
        var_dump("Turn the Nook on");
    }

    public function clickNextButton()
    {
        var_dump("click next button Nook");
    }
}