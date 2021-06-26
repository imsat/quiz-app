<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Option;
use Faker\Generator as Faker;

$factory->define(Option::class, function (Faker $faker) {
    return [
        'title' => $faker->word,
        'question_id' => 1,
        'is_answer' => $faker->randomElement([0,1]),
    ];
});
