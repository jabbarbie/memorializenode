<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notes extends Model
{
    use HasFactory;

    protected $fillable = ['name'];
    public $appends = ['updated_at_human'];

    public function getUpdatedAtHumanAttribute()
    {
        return Carbon::parse($this->updated_at)->format('Y');
    }

}
