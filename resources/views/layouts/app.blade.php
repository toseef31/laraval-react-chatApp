<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    @viteReactRefresh
    @vite('resources/js/react/index.jsx')
</head>
<body>
  @yield('content')
  
</body>
</html>
