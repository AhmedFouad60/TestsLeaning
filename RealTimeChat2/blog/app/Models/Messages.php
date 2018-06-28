<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{

    public function user(){
        return $this->belongsTo('App\User','user_id');
    }

    public function room(){
        return $this->belongsTo('App\Models\Rooms','room_id');
    }

}
