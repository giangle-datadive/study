<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 12/18/2016
 * Time: 9:54 PM
 */

namespace App\DesignPattern\Template;


abstract class Mail
{
    public function writeMail()
    {
        var_dump('Write an email');

        return $this;
    }

    protected abstract function send();

    public function done()
    {
        $this->writeMail()->send();
    }
}