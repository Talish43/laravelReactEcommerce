<?php

use Illuminate\Support\Facades\Route;

Route::get( '/admin', function() {
    return view( 'dashboard' );
});

Route::get( '/admin/{any?}', function() {
    return view( 'dashboard' );
});

Route::get( '/{any?}', function() {
    return view( 'welcome' );
});
