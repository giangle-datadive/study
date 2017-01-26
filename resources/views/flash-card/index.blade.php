@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div id="main">

                </div>
            </div>
        </div>
    </div>
@endsection
@push('js')
<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.min.js"></script>
<script src="/js/flash-card/index.js"></script>
@endpush