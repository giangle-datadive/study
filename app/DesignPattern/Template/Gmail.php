<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 12/18/2016
 * Time: 9:45 PM
 */

namespace App\DesignPattern\Template;


class Gmail extends Mail
{
    public function send()
    {
        var_dump('send an Gmail');

        return $this;
    }
}