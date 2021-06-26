<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuizQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quiz_questions', function (Blueprint $table) {
            $table->id();
            $table->boolean('is_fixed_duration')->default(0);
            $table->decimal('fixed_duration', 10, 2)->nullable();
            $table->boolean('mark_wise_duration')->default(0);
            $table->decimal('mark', 10, 2);
            $table->unsignedBigInteger('quiz_id');
            $table->unsignedBigInteger('question_id');

            $table->foreign('quiz_id')
                ->references('id')
                ->on('quizzes')
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
        Schema::dropIfExists('quiz_questions');
    }
}
