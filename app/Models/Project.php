<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;
    protected $guarded = ['user_id'];

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

    public function notulens(): HasMany
    {
        return $this->hasMany(Notulen::class);
    }
}
