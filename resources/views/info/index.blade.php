@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-md-center"><strong>Info</strong>Finder</h1>
            </div>
            <div class="com-md-12">
                <div id="main"></div>
            </div>
        </div>
    </div>
@endsection
@push('js')
<script src="/js/infofinder/index.js"></script>
@endpush