@extends('layouts.react')
@push('css')
<link href="{{ asset('css/react/bootstrap/cover.css') }}" rel="stylesheet">
@endpush
@section('content')
    <div id="main" class="site-wrapper">

    </div>
@endsection
@push('js')
<script src="{{ asset('js/bootstrap/index.js') }}"></script>
@endpush