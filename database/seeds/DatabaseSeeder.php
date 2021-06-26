<?php

use App\Answer;
use App\Option;
use App\Question;
use App\Quiz;
use App\QuizQuestion;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');

        User::truncate();
        Question::truncate();
        Option::truncate();
//        Answer::truncate();
        Quiz::truncate();
        QuizQuestion::truncate();

        //for admin
        $admin = factory(User::class)->create([
            'name' => 'Admin',
            'email' => 'admin@mail.com',
            'is_admin' => 1,
        ]);

        //for user
        $user = factory(User::class)->create([
            'name' => 'User',
            'email' => 'user@mail.com',
        ]);

        factory(Question::class, 100)->create()->each(function ($question) {
            factory(Option::class, mt_rand(2, 4))->create([
                'question_id' => $question->id,
            ]);
        });

        factory(Quiz::class, 10)->create()->each(function ($quiz) {

            factory(QuizQuestion::class, mt_rand(5, 10))->create();
        });


    }
}
