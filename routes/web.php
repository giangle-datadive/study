<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'design-pattern'], function () {
    Route::get('/decorator', 'DesignPattern\DecoratorController@index');
    Route::get('/adapter', 'DesignPattern\s@index');
    Route::get('/template', 'TemplateController@index');
    Route::get('/strategy', 'StrategyController@index');
    Route::get('/chain', 'DesignPattern\Chain@index');
});

Route::group(['prefix' => 'react'], function () {
    Route::get('bootstrap-component', 'React\BootstrapComponentController@index');
    Route::get('github-profile', 'React\GithubProfile@index');
    Route::get('counter', 'React\ReduxController@counter');
    Route::get('chat', 'React\ChatController@index');
    Route::get('chat/messages', 'React\ChatController@getMessages');
    Route::get('quiz', 'React\QuizController@index');
    Route::get('movie', 'React\MovieFindController@index');
    Route::get('contact', 'React\ContactListController@index');
    Route::get('sticky', 'React\StickyNoteController@index');
    Route::get('info', 'React\InfoFinderController@index');
    Route::get('sockchat', 'React\SockchatController@index');
    Route::get('flash-card', 'React\FlashcardController@index');

    Route::get('boi', 'React\BoiController@index');
    Route::get('boi/image', 'React\BoiController@image');
    Route::post('boi-result', 'React\BoiController@result');
});
Auth::routes();

Route::get('/home', 'HomeController@index');
