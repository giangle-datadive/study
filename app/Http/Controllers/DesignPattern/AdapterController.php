<?php

namespace App\Http\Controllers\DesignPattern;

use App\DesignPattern\Adapter\eReaderAdapter;
use App\DesignPattern\Adapter\Ipad;
use App\DesignPattern\Adapter\Person;
use App\Http\Controllers\Controller;

class AdapterController extends Controller
{
    public function index()
    {
        $person = new Person();
        $person->read(new eReaderAdapter(new Ipad()));
    }
}
