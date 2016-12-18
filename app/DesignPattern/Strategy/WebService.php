<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 12/18/2016
 * Time: 10:10 PM
 */

namespace App\DesignPattern\Strategy;


class WebService implements Logger
{

    public function log($data)
    {
        var_dump('Log a data to Sass');
    }
}