<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTesterToProblems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('problems', function($table){
        $table->string('uname',40)->after('id') ;
        $table->dropColumn('generator') ;
        $table->dropcolumn('checker') ;
      }) ;
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('problems',function($table){
        $table->dropColumn('uname') ;
        $table->string('generator',40)->after('name') ;
        $table->string('checker',40)->after('generator') ;
      });
    }
}
