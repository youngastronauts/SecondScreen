<?php

include("config.php");

?>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	
	<link rel="stylesheet" href="/shared/css/reset.css" type="text/css"/>
	<link rel="stylesheet" href="/shared/css/global.css" type="text/css"/>
	<?php if(MOBILE):?>
	<link rel="stylesheet" href="/shared/css/mobile.css" type="text/css"/>
	<?php else: ?>
	<link rel="stylesheet" href="/shared/css/desktop.css" type="text/css"/>
	<?php endif;?>

	<title>Second Screen Demos</title>
</head>
<body>

	<?php include(HEADER); ?>
	<div class="container">
	<h1>Demos</h1>
	<div class="mega">
	<a class="mega-button" href="/demos/simple-demo">Day &amp; Night</a>
	<a class="mega-button" href="/demos/tilt">Tilt a' Rubiks</a>
	<a class="mega-button" href="/demos/draw-board">Draw Board</a>
	<a class="mega-button" href="/demos/closed-caption">Closed Caption</a>
	<a class="mega-button" href="/demos/trivia">Trivia</a>
	<a class="mega-button" href="/demos/classic-controller">Classic Controller</a>
	</div>
	</div>

	<?php include(FOOTER); ?>

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	<script type="text/javascript" src="/shared/menu.js"></script>

</body>
</html>
