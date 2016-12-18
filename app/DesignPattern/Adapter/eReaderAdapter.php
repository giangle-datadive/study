<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 12/13/2016
 * Time: 11:45 PM
 */

namespace App\DesignPattern\Adapter;


class eReaderAdapter implements BookInterface
{
    protected $reader;

    public function __construct(eReaderInterface $reader)
    {
        $this->reader = $reader;
    }

    public function open()
    {
        $this->reader->turnOn();
    }

    public function nextPage()
    {
        $this->reader->clickNextButton();
    }
}