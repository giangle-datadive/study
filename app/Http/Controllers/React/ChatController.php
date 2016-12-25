<?php

namespace App\Http\Controllers\React;

use Faker\Factory;
use App\Http\Controllers\Controller;

class ChatController extends Controller
{
    public function index()
    {
        return view('chat/index');
    }

    public function getMessages() {
        $messages = [];
        foreach (range(1, 10) as $chat) {
            $messages[] = Factory::create()->name;
        }

        return response()->json($messages);
    }
}
