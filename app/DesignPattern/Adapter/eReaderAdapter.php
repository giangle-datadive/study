<?php
/**
 * Created by IntelliJ IDEA.
 * User: Giang
 * Date: 1/13/2017
 * Time: 9:15 PM
 */

namespace App\DesignPattern\Adapter;


class eReaderAdapter implements BookInterface
{

    protected $eReader;

    public function __construct(eReaderInterface $eReader)
    {
        $this->eReader = $eReader;
    }

    public function open()
    {
        return $this->eReader->turnOn();
    }

    public function nextPage()
    {
        return $this->eReader->pressNext();
    }
}