<?php

namespace App\Http\Controllers;

use App\DesignPattern\Adapter\Book;
use App\DesignPattern\Adapter\BookInterface;
use App\DesignPattern\Adapter\eReaderAdapter;
use App\DesignPattern\Adapter\Kindle;
use App\DesignPattern\Adapter\KindleAdapter;
use App\DesignPattern\Adapter\Nook;
use App\DesignPattern\Adapter\Person;
use Illuminate\Http\Request;

class AdapterController extends Controller
{
    public function index()
    {
        (new Person())->read(new eReaderAdapter(new Nook()));
    }
}
