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

Route::get('/', function () {
    return "OK!";
});

Route::get('/hello/{name}',function($name){
  echo "<h1>Hello, $name</h1>" ;
});

Route::get('test','TasksController@test') ;
Route::get('tasks/create',  'TasksController@create');
Route::post('tasks',  'TasksController@store');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
