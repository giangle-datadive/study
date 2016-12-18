<?php

namespace App\Http\Controllers;

use App\DesignPattern\Template\Gmail;
use App\DesignPattern\Template\YahooMail;

class TemplateController extends Controller
{
    public function index()
    {
        $mail = new YahooMail();

        $mail->done();
    }
}
