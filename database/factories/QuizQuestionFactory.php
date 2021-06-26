<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\QuizQuestion;
use Faker\Generator as Faker;

$factory->define(QuizQuestion::class, function (Faker $faker) {
    $is_fixed_duration = $faker->randomElement([0,1]);
    $mark_wise_duration = !$is_fixed_duration;
    return [
        'is_fixed_duration' => $is_fixed_duration,
        'fixed_duration' => $is_fixed_duration ? 1 : 0,
        'mark_wise_duration' => $mark_wise_duration,
        'mark' => mt_rand(1, 10),
        'quiz_id' => mt_rand(1, 10),
        'question_id' => mt_rand(1, 100),
    ];
});
