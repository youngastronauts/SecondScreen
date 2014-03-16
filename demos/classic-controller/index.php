<?php

	include("../../config.php");

	$title = "Classic Controller";
	$fullTitle = BASE_TITLE . " - " . $title; 

?>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<title><?php echo $fullTitle;?></title>

	<link rel="stylesheet" href="/shared/css/global.css" type="text/css"/>
	
<?php if(MOBILE): ?>
	<meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1.0, user-scalable=no">
	<link rel="stylesheet" href="/shared/css/normalize.css" type="text/css"/>
	<link rel="stylesheet" href="/shared/css/mobile.css" type="text/css"/>
	<link rel="stylesheet" href="mobile.css" type="text/css"/>
<?php else: ?>
	<link rel="stylesheet" href="/shared/css/reset.css" type="text/css"/>
	<link rel="stylesheet" href="/shared/css/desktop.css" type="text/css"/>
	<link rel="stylesheet" href="desktop.css" type="text/css"/>
<?php endif; ?>

	<script type="text/javascript">

	var Settings = {};

	Settings.socketScriptUrl = '<?php echo SOCKET_SCRIPT_URL; ?>';
	Settings.socketServer = '<?php echo SOCKET_SERVER; ?>';

	</script>

</head>
<body>



<?php if(MOBILE):?>

	<a href="/" id="mobile-back">Back</a>

	<div id="c">
		<div id="f">
			<h2>Nintendo <em>&#174;</em></h2>
			
			<ul id="dpad">
				<li id="d-up"><a href="#up" data-arrow="" title="Up"></a></li>
				<li id="d-right"><a href="#right" data-arrow="" title="Right"></a></li>
				<li id="d-down"><a href="#down" data-arrow="" title="Down"></a></li>
				<li id="d-left"><a href="#left" data-arrow="" title="Left"></a></li>
			</ul>
			
			<dl id="selectstart">
				<dt>Select</dt>
				<dd><a href="#select">Select</a></dd>
				<dt>Start</dt>
				<dd><a href="#start">Start</a></dd>
			</dl>
			
			<dl id="ba">
				<dt>B</dt>
				<dd><a href="#b">B</a></dd>
				<dt>A</dt>
				<dd><a href="#a">A</a></dd>
			</dl>
		</div>			
	</div>


<?php include(AUTH_PAGE); ?>
<?php else: ?>

	<?php include(HEADER); ?>

	<div class="container">

		<div id="passcodeLabel">Passcode: <span></span></div>

		<h1><?php echo $title; ?></h1>

		<div class="nes">Loading...</div>

	</div>

<?php endif;?>


<!-- FOOT -->

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo SOCKET_SCRIPT_URL;?>"></script>

<?php if(MOBILE):?>
	<script type="text/javascript" src="/shared/js/mobile.js" id="script-mobile-shared"></script>
	<script type="text/javascript" src="mobile.js" id="script-mobile"></script>
<?php else: ?>
	<script type="text/javascript" src="dynamicaudio.min.js"></script>
	<script type="text/javascript" src="jnes.js"></script>

	<script type="text/javascript" src="/shared/js/desktop.js" id="script-desktop-shared"></script>
	<script type="text/javascript" src="desktop.js" id="script-desktop"></script>
<?php endif; ?>
	

</body>
</html>