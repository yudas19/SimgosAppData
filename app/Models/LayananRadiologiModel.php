<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LayananRadiologiModel extends Model
{
    use HasFactory;
    public $connection = "mysql7";
    protected $table = 'order_rad';
}