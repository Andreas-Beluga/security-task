<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;

Route::get('/', function () {
    return view('home');
});

Route::get('/home', [TestController::class, 'home'])->name('home');