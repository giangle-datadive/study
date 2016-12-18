<?php

namespace App\DesignPattern\Adapter;

class Person
{
    public function read(BookInterface $book)
    {
        $book->open();

        $book->nextPage();
    }
}