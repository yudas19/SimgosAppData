<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SatusehatTindakanToLoincModel extends Model
{
    use HasFactory;
    public $connection = "mysql4";
    protected $table = 'tindakan_to_loinc';
}