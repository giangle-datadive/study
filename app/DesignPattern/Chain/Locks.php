<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 2/13/2017
 * Time: 10:00 PM
 */

namespace App\DesignPattern\Chain;


class Locks extends HomeChecker
{
    public function check(HomeStatus $home)
    {
        if (!$home->locked) {
            dd('Door is not lock');
        }

        $this->next($home);
    }
}