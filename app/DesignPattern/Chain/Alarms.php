<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 2/13/2017
 * Time: 10:01 PM
 */

namespace App\DesignPattern\Chain;


class Alarms extends HomeChecker
{
    public function check(HomeStatus $home)
    {
        if (!$home->alarmOn) {
            dd('Alarm is not on');
        }

        $this->next($home);
    }
}