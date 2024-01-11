<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pizza extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'toppings' => 'array',
    ];

    protected $appends = [
        'chef',
        'last_updated'
    ];

    protected $hidden = [
        'user',
    ];

    public function user()
    {
        return $this->belongsTo(related: User::class);
    }

    public function getChefAttribute()
    {
        return $this->user->name;
    }

    public function getLastUpdatedAttribute()
    {
        return $this->updated_at->diffForHumans();
    }
}
