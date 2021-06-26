<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ApiController;


class LoginController extends ApiController
{
    /**
     * ApiLoginController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * JWT auth login
     *
     * @param Request $request
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request)
    {

        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:30',
        ]);

        $credentials = $request->only(['email', 'password']);


        $token = auth('api')->attempt($credentials);

        if (!$token) {
            return $this->errorResponse('unauthorized', 401);
        }

        $data = [
            'token' => $token,
            'user' => auth('api')->user(),
            'message' => 'login successfully',
            'code' => '200',
        ];

        return $this->successResponse($data);

    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('api')->logout();

        $data = [
            'message' => 'successfully logged out',
            'code' => '200',
        ];
        return $this->successResponse($data, 200);

    }
}

