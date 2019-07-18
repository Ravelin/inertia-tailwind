<?php

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', ['foo' => 'bar']);
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});
