<?php

	include("../../config.php");

	$title = "Close Caption";
	$fullTitle = BASE_TITLE . " - " . $title; 

?>
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<title><?php echo $fullTitle;?></title>

	<!--<link rel="stylesheet" href="/shared/css/normalize.css" type="text/css"/>-->
	
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

	<!-- MOBILE HTML HERE -->
	<a href="/" id="mobile-back">Back</a>

	<div class="cc"></div>


<?php include(AUTH_PAGE); ?>


<?php else: ?>

	<?php include(HEADER); ?>

	<div id="passcodeLabel">Passcode: <span></span></div>

	<div class="container">
		<h1><?php echo $title; ?></h1>

		<!-- DESKTOP HTML HERE -->
		<a href="#" id="start" style="text-align:center; font-size:30px; text-decoration:none; color:#000; display:block">Start</a>
		<div id="video" style="width: 720px; height: 500px; margin:10px auto;" ></div>

	</div>

<?php endif;?>




<!-- FOOT -->

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo SOCKET_SCRIPT_URL;?>"></script>

<?php if(MOBILE):?>
	<script type="text/javascript" src="/shared/js/mobile.js"></script>
	<script type="text/javascript" src="mobile.js"></script>
<?php else: ?>
	<script src="http://popcornjs.org/code/dist/popcorn-complete.min.js"></script>
	<script type="text/javascript" src="/shared/js/desktop.js"></script>
	<script type="text/javascript" src="desktop.js"></script>
<?php endif; ?>
	

</body>
</html>