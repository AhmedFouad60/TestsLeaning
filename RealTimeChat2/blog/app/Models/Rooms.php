<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rooms extends Model
{

    public function messages(){
        return $this->hasMany('App\Models\Messages','room_id');
    }
}
