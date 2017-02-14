<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 2/13/2017
 * Time: 9:59 PM
 */

namespace App\DesignPattern\Chain;


abstract class HomeChecker
{
    protected $successor;

    public abstract function check(HomeStatus $home);

    public function succeedWith(HomeChecker $successor)
    {
        $this->successor = $successor;
    }

    public function next(HomeStatus $home)
    {
        if($this->successor) {
            $this->successor->check($home);
        }
    }
}