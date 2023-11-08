<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Modernize Free</title>
    <link rel="shortcut icon" type="image/png" href="{{ asset('/assets/backend/assets/images/logos/favicon.png') }}" />
    <link rel="stylesheet" href="{{ asset('/assets/backend/assets/css/styles.min.css') }}" />
</head>
<body>
@vite('resources/css/app.css')
<div id="root"></div>
@viteReactRefresh
@vite('resources/js/backendApp.js')

<script src="{{ asset('/assets/backend/assets/libs/jquery/dist/jquery.min.js')}}"></script>
<script src="{{ asset('/assets/backend/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{ asset('/assets/backend/assets/js/sidebarmenu.js')}}"></script>
<script src="{{ asset('/assets/backend/assets/js/app.min.js')}}"></script>
{{--<script src="{{ asset('/assets/backend/assets/libs/apexcharts/dist/apexcharts.min.js')}}"></script>--}}
<script src="{{ asset('/assets/backend/assets/libs/simplebar/dist/simplebar.js')}}"></script>
<script src="{{ asset('/assets/backend/assets/js/dashboard.js')}}"></script>
</body>
</html>