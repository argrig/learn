<?php

namespace App\Http\Controllers;

use App\Problem ;
use Illuminate\Http\Request ;
use Symfony\Component\Process\Process;

class ProblemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return response()->json(Problem::all()) ;
    }

    public function render($id) {
      $problem = Problem::find($id) ;
      $prog = config('my.bindir') . $problem->uname . '_gen_json' ;
      $process = new Process($prog) ;
      $process->run() ;
      $out = json_decode($process->getOutput(),true);
      if(json_last_error() == JSON_ERROR_NONE) {
        return response()->json(array_merge(["status"=>"ok"],$out['problem'])) ;
      }
      else {
        return response()->json(["status"=>"error", "JSON_LAST_ERROR"=>json_last_error()]) ;
      }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $resp=[];
      $problem = new Problem ;
      try { 
        $problem->fill($request->input()) ;
        $problem->save() ;
        //Problem::insert($request->input()) ; 
      } 
      catch (\Illuminate\Database\QueryException  $e) {
        return response()->json(["status"=>"error","message"=> $e->getMessage(),"code"=>$e->getCode()])
          ->header("Cache-Control","no-cache") ;
      }
      return response()
        ->json(["status"=>"ok"])
        ->header("Cache-Control","no-cache") ;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Problem  $problem
     * @return \Illuminate\Http\Response
     */
    public function show(Problem $problem)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Problem  $problem
     * @return \Illuminate\Http\Response
     */
    public function edit(Problem $problem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Problem  $problem
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Problem $problem)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Problem  $problem
     * @return \Illuminate\Http\Response
     */
    public function destroy(Problem $problem)
    {
        //
    }
}
