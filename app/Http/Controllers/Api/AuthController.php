<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Dingo\Api\Routing\Helpers;
use JWTAuth;
use App\Transformers\UserTransformer;

class AuthController extends Controller
{
    use Helpers;

    public function login(Request $request)
    {
        $user = app('Dingo\Api\Auth\Auth')->user();
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (auth()->once($credentials)) {
            $user = auth()->user();
            $token = JWTAuth::fromUser($user);
            $user->token = $token;


            return api_response(0, 'Success', $user);
        }else{
            abort(Response::HTTP_UNAUTHORIZED, trans('auth.failed'));
        }
    }
}
