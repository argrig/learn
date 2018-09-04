<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', "TasksController@home");
Route::get('{all}', "TasksController@home")->where(['all'=>'.*']);
Route::post("/edit/problem/add","ProblemController@add");


//Route::get('test','TasksController@test') ;

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
