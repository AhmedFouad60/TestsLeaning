<?php
/**
 * Created by PhpStorm.
 * User: foush
 * Date: 16/05/18
 * Time: 08:55 م
 */

use Prettus\Repository\Eloquent\BaseRepository;
class PostRepository extends BaseRepository
{

    /**
     * Specify Model class name
     *
     * @return string
     */
    function model()
    {
        return "App\\Post";
    }
}