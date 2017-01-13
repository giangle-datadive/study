<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 1/13/2017
 * Time: 9:03 PM
 */

namespace App\DesignPattern\Adapter;


class Book implements BookInterface
{
    public function open()
    {
        var_dump("open a book");
    }

    public function nextPage()
    {
        var_dump("next page");
    }
}