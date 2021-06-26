<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserQuizQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_quiz_questions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_quiz_id');
            $table->unsignedBigInteger('question_id');
            $table->string('value');
            $table->foreign('user_quiz_id')
                ->references('id')
                ->on('user_quizzes')
                ->onDelete('cascade');

            $table->foreign('question_id')
                ->references('id')
                ->on('questions')
                ->onDelete('cascade');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_quiz_questions');
    }
}
