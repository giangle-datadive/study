@extends('layouts.app')
@push('css')
<link href="{{ asset('css/react/bootstrap/cover.css') }}" rel="stylesheet">
@endpush
@section('content')
    <div id="main" class="container">

    </div>
@endsection
@push('js')
<script src="{{ asset('js/github/index.js') }}"></script>
@endpush