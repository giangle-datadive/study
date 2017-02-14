<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 2/13/2017
 * Time: 10:00 PM
 */

namespace App\DesignPattern\Chain;


class Lights extends HomeChecker
{
    public function check(HomeStatus $home)
    {
        if (!$home->lightOff) {
            dd('Light is not off');
        }

        $this->next($home);
    }
}