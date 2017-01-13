<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 1/13/2017
 * Time: 9:09 PM
 */

namespace App\DesignPattern\Adapter;


class Person
{
    public function read(BookInterface $book)
    {
        $book->open();
        $book->nextPage();
    }
}