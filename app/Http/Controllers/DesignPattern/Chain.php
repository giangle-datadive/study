<?php

namespace App\Http\Controllers\DesignPattern;

use App\DesignPattern\Chain\Alarms;
use App\DesignPattern\Chain\HomeStatus;
use App\DesignPattern\Chain\Lights;
use App\DesignPattern\Chain\Locks;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Chain extends Controller
{
    public function index()
    {
        $alarm = new Alarms();
        $lock = new Locks();
        $light = new Lights();

        $alarm->succeedWith($lock);
        $lock->succeedWith($light);

        $alarm->check(new HomeStatus());
    }
}
