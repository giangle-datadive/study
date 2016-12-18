<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 12/18/2016
 * Time: 10:09 PM
 */

namespace App\DesignPattern\Strategy;


class File implements Logger
{

    public function log($data)
    {
        var_dump('log a data to File');
    }
}