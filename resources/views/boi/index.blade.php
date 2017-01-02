@extends('layouts.app')
@section('content')
    <div id="main" class="container"></div>
@endsection
@push('js')
<script>
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '155329891611556',
            xfbml      : true,
            version    : 'v2.8'
        });
        FB.AppEvents.logPageView();
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>
<script src="/js/boi/index.js"></script>
@endpush
