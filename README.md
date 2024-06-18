# EridAI

<!DOCTYPE HTML>
<html lang="pl">
<head>
  <meta charset="utf-8"/>
  <title>EridAI</title>

  <!--<link rel="stylesheet" href="css/bootstrap/bootstrap.min.css" media="screen">-->
  <link href="http://fonts.googleapis.com/css?family=Lato:300,400,700,900,300italic,400italic,700italic,900italic&subset=latin,latin-ext"
      rel="stylesheet">
  <link rel="stylesheet" href="css/style.css" media="screen">

  <script src="js/math.js"></script>
  <script src="js/plexus.js"></script>

</head>

<body>
<div class="top-center">
  <h1>Erida</h1>
</div>

<div class="middle">
  <div class="panel" onclick="location.href='kalm.html'">KaLM</div>
  <div class="panel" onclick="location.href='pro.html'">Pro</div>
  <div class="panel" onclick="location.href='fractal.html'">Fractal</div>
</div>

<div class="controls" id="plexus-control">
  <form>
    <label>
      line distance
      <input type="range" data-plexus="lineDistance" value="100" step="10" max="400" min="0">
    </label>
    <label>
      speed
      <input type="range" data-plexus="pointsSpeed" value="0.5" step="0.2" max="5" min="0">
    </label>
  </form>
</div>

<div class="fullscreen">
  <canvas id="plexus-test" class="plexus"></canvas>
</div>

<script>
  var plexus = new Plexus("plexus-test", {
    pointsSpeed: 0.5,
    pointsRadius: 1.1,
    pointsStartDistance: 60
  });
  var controls = new Controls("plexus-control", plexus);
  var cursor = new Cursor(plexus, {pointsSpeed: 0.5});
</script>

</body>
</html>
