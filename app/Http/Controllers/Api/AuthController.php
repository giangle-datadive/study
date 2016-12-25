<?php

namespace App\Http\Controllers\Api;

use Dingo\Api\Transformer\Adapter\Fractal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Dingo\Api\Routing\Helpers;
use JWTAuth;
use League\Fractal\Manager;

class AuthController extends Controller
{
    use Helpers;

    public function login(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (auth()->once($credentials)) {
            $user = auth()->user();
            $token = JWTAuth::fromUser($user);
            $user->token = $token;

            return $this->response()->item($user, new Fractal(new Manager()));
        }else{
            abort(Response::HTTP_UNAUTHORIZED, trans('auth.failed'));
        }
    }
}
