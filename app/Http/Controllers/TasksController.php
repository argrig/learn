<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request ;
use Illuminate\Support\Facades\Input ;
use App\Task ;

class TasksController extends Controller
{
	public function test() {
	  return view('test') ;
  }
  public function store() {
    $task = new Task() ;
    $task->title = Input::post('title') ;
    $task->description = Input::post('description') ;
    $task->save();
    return redirect('tasks/create') ;
  }
  public function create() {
  
  }

};


