<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 12/18/2016
 * Time: 10:17 PM
 */

namespace App\DesignPattern\Strategy;


class App
{
    public function log($data, Logger $logger = null)
    {
        $logger = $logger ? $logger : new File();

        $logger->log($data);
    }
}