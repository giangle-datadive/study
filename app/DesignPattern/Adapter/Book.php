<?php

namespace App\DesignPattern\Adapter;

class Book implements BookInterface
{
    public function open()
    {
        var_dump("Opening a book");
    }

    public function nextPage()
    {
        var_dump("Next page of book");
    }
}