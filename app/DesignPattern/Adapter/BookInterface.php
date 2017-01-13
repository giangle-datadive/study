<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 1/13/2017
 * Time: 9:11 PM
 */

namespace App\DesignPattern\Adapter;


interface BookInterface
{
    public function open();

    public function nextPage();
}