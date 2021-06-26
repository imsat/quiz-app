<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    protected $appends = ['total_mark', 'total_duration', 'total_question'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function quizQuestions()
    {
        return $this->hasMany(QuizQuestion::class);
    }


    /**
     * @return mixed
     */
    public function getTotalMarkAttribute()
    {
        return $this->quizQuestions->sum('mark');
    }

    /**
     * @return int
     */
    public function getTotalDurationAttribute()
    {
        $duration = 0;
        foreach ($this->quizQuestions as $quizQuestion) {
            if($quizQuestion->is_fixed_duration == 1){
                $duration += $quizQuestion->fixed_duration;
            }else{
                $duration += $quizQuestion->mark;
            }
        }

        return $duration;
    }

    /**
     * @return mixed
     */
    public function getTotalQuestionAttribute()
    {
        return $this->quizQuestions->count();
    }


}
