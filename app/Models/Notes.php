<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Notes extends Model
{
    use HasFactory;

    protected $fillable = ['name'];
    public $appends = ['updated_at_human'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($object) {
            $object->user_id = Auth::id();
        });

        static::addGlobalScope('user', function (Builder $builder) {
            $builder->where('user_id', Auth::id());
        });
    }

    public function getUpdatedAtHumanAttribute()
    {
        return Carbon::parse($this->updated_at)->format('Y');
    }
}
