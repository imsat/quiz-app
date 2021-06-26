<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Auth\LoginController as ApiLoginController;
use App\Http\Controllers\QuizController;

// JWT authentication
Route::group(['middleware' => 'api', 'prefix' => 'auth', 'namespace' => 'Api/Auth'], function () {

    Route::post('/login', [ApiLoginController::class, 'login']);
    Route::post('/logout', [ApiLoginController::class, 'logout']);

});


Route::get('/quizzes/exam', [QuizController::class, 'getQuizzesForExam']);
Route::apiResource('/quizzes', 'QuizController');

