<?php

	include("../../config.php");

	$title = "Trivia";
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

	<!-- MOBILE HTML HERE -->

	<div class="game-info">
		<div id="total-players">Total Players: <span>0</span></div>
		<div id="question-counter">Question <span>0/0</span></div>
	</div>

	<div class="question-content">
		<div class="question"></div>
		<div class="media"></div>

		<ul class="answers"></ul>

	</div>


	<a href="/" id="mobile-back">Back</a>

<?php include(AUTH_PAGE); ?>


<?php else: ?>

	<?php include(HEADER); ?>

	<div id="passcodeLabel">Passcode: <span></span></div>

	<div class="container">
		<h1><?php echo $title; ?></h1>

		<div class="game-info">
			<h3>Game Info:</h3>
			<div id="total-players">Total Players: <span>0</span></div>
			<div id="question-counter">Question <span>0/0</span></div>
			<a href="#" id="newQuestionButton">Start Game</a>
		</div>

		<hr />

		<div class="question-content">
			<h3>Question:</h3>
			<div class="question"></div>
			<div class="media"></div>
			<ul class="answers"></ul>
		</div>

		<hr />

		<div class="response-content">
			<h3>Responses:</h3>
			<ul></ul>
		</div>

		<hr />

		<h3>Players:</h3>
		<ul id="player-list">
		
		</ul>

	</div>

	<?php include(FOOTER); ?>

<?php endif;?>




<!-- FOOT -->

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo SOCKET_SCRIPT_URL;?>"></script>
	<script type="text/javascript" src="classes.js"></script>

<?php if(MOBILE):?>
	<script type="text/javascript" src="/shared/js/mobile.js"></script>
	<script type="text/javascript" src="mobile.js"></script>
<?php else: ?>

	<script type="text/javascript" src="/shared/js/desktop.js"></script>
	<script type="text/javascript" src="desktop.js"></script>
<?php endif; ?>
	

</body>
</html>