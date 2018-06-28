<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadRequest;
use App\Product;
use App\ProductsPhoto;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function uploadForm()
    {
        return view('upload_form');
    }

    public function uploadSubmit(UploadRequest $request)
    {
        $product=Product::create($request->all());
        foreach ($request->photo as $photo){
            $filename=$photo->store('photos');
            ProductsPhoto::create([
                'product_id'=>$product->id,
                'filename'=>$filename
            ]);
        }
        return 'Upload successfull!';
    }
}
