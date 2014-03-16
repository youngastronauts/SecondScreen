<?php

	include("../../config.php");

	$title = "Tilt a Whirl";
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

	<p>Just tilt your device!</p>

	<a href="/" id="mobile-back">Back</a>

<?php include(AUTH_PAGE); ?>
<?php else: ?>

	<?php include(HEADER); ?>

	<div id="passcodeLabel">Passcode: <span></span></div>

	<div class="container">
		<h1><?php echo $title; ?></h1>


		  <section id="rubik">
		  <div id="cube-container">
		      <div id="cube-viewport">
		          <div id="cube">
		          <!-- UP FACE -->            
		              <!-- LEFT COLUMN (L)  -->                
		              <div class="utl cubie up LM UE BS"><div><span>U1</span></div></div> 
		              <div class="ucl cubie up LM UE CS"><div><span>U2</span></div></div>
		              <div class="ubl cubie up LM UE FS"><div><span>U3</span></div></div>
		              <!-- CENTER COLUMN (C)  -->            
		              <div class="utc cubie up CM UE BS"><div><span>U4</span></div></div>
		              <div class="ucc cubie up CM UE CS"><div><span>U5</span></div></div>
		              <div class="ubc cubie up CM UE FS"><div><span>U6</span></div></div>
		              <!-- RIGHT COLUMN (R)  -->
		              <div class="utr cubie up RM UE BS"><div><span>U7</span></div></div>
		              <div class="ucr cubie up RM UE CS"><div><span>U8</span></div></div>
		              <div class="ubr cubie up RM UE FS"><div><span>U9</span></div></div>
		          <!-- END UP FACE -->  

		          <!-- FRONT FACE -->
		              <!-- LEFT COLUMN (L)  -->                
		              <div class="ftl cubie front LM UE FS"><div><span>F1</span></div></div>
		              <div class="fcl cubie front LM CE FS"><div><span>F2</span></div></div>
		              <div class="fbl cubie front LM DE FS"><div><span>F3</span></div></div>
		              <!-- CENTER COLUMN (C)  -->            
		              <div class="ftc cubie front CM UE FS"><div><span>F4</span></div></div>
		              <div class="fcc cubie front CM CE FS"><div><span>F5</span></div></div>
		              <div class="fbc cubie front CM DE FS"><div><span>F6</span></div></div>
		              <!-- RIGHT COLUMN (R)  -->
		              <div class="ftr cubie front RM UE FS"><div><span>F7</span></div></div>
		              <div class="fcr cubie front RM CE FS"><div><span>F8</span></div></div>
		              <div class="fbr cubie front RM DE FS"><div><span>F9</span></div></div>
		          <!-- END FRONT FACE -->
		          
		          <!--DOWN FACE -->
		              <!-- LEFT COLUMN (L)  -->                
		              <div class="dtl cubie down LM DE FS"><div><span>D1</span></div></div>
		              <div class="dcl cubie down LM DE CS"><div><span>D2</span></div></div>
		              <div class="dbl cubie down LM DE BS"><div><span>D3</span></div></div>
		              <!-- CENTER COLUMN (C)  -->                
		              <div class="dtc cubie down CM DE FS"><div><span>D4</span></div></div>
		              <div class="dcc cubie down CM DE CS"><div><span>D5</span></div></div>
		              <div class="dbc cubie down CM DE BS"><div><span>D6</span></div></div>
		              <!-- RIGHT COLUMN (R)  -->        
		              <div class="dtr cubie down RM DE FS"><div><span>D7</span></div></div>
		              <div class="dcr cubie down RM DE CS"><div><span>D8</span></div></div>
		              <div class="dbr cubie down RM DE BS"><div><span>D9</span></div></div>
		          <!-- END DOWN FACE -->
		          
		          <!--BACK FACE -->    
		              <!-- LEFT COLUMN (L)  -->           
		              <div class="btl cubie back LM DE BS"><div><span>B1</span></div></div>
		              <div class="bcl cubie back LM CE BS"><div><span>B2</span></div></div>
		              <div class="bbl cubie back LM UE BS"><div><span>B3</span></div></div>
		              <!-- CENTER COLUMN (C)  -->           
		              <div class="btc cubie back CM DE BS"><div><span>B4</span></div></div>
		              <div class="bcc cubie back CM CE BS"><div><span>B5</span></div></div>
		              <div class="bbc cubie back CM UE BS"><div><span>B6</span></div></div> 
		              <!-- RIGHT COLUMN (R)  -->    
		              <div class="btr cubie back RM DE BS"><div><span>B7</span></div></div>
		              <div class="bcr cubie back RM CE BS"><div><span>B8</span></div></div>
		              <div class="bbr cubie back RM UE BS"><div><span>B9</span></div></div> 
		          <!--END BOTTOM FACE --> 
		          
		          <!--LEFT FACE -->
		              <!-- LEFT COLUMN (L)  -->           
		              <div class="ltl cubie left LM UE BS"><div><span>L1</span></div></div>
		              <div class="lcl cubie left LM CE BS"><div><span>L2</span></div></div>
		              <div class="lbl cubie left LM DE BS"><div><span>L3</span></div></div>
		              <!-- CENTER COLUMN (C)  -->  
		              <div class="ltc cubie left LM UE CS"><div><span>L4</span></div></div>
		              <div class="lcc cubie left LM CE CS"><div><span>L5</span></div></div>
		              <div class="lbc cubie left LM DE CS"><div><span>L6</span></div></div>
		              <!-- RIGHT COLUMN (R)  -->    
		              <div class="ltr cubie left LM UE FS"><div><span>L7</span></div></div>
		              <div class="lcr cubie left LM CE FS"><div><span>L8</span></div></div>
		              <div class="lbr cubie left LM DE FS"><div><span>L9</span></div></div>
		          <!--END LEFT FACE -->   
		          
		          <!--RIGHT FACE -->
		              <!-- LEFT COLUMN (L)  -->           
		              <div class="rtl cubie right RM UE FS"><div><span>R1</span></div></div>
		              <div class="rcl cubie right RM CE FS"><div><span>R2</span></div></div>
		              <div class="rbl cubie right RM DE FS"><div><span>R3</span></div></div>
		              <!-- CENTER COLUMN (C)  -->  
		              <div class="rtc cubie right RM UE CS"><div><span>R4</span></div></div>
		              <div class="rcc cubie right RM CE CS"><div><span>R5</span></div></div>
		              <div class="rbc cubie right RM DE CS"><div><span>R6</span></div></div>
		              <!-- RIGHT COLUMN (R)  -->    
		              <div class="rtr cubie right RM UE BS"><div><span>R7</span></div></div>
		              <div class="rcr cubie right RM CE BS"><div><span>R8</span></div></div>
		              <div class="rbr cubie right RM DE BS"><div><span>R9</span></div></div>
		          <!--END LEFT FACE -->  
		                
		           </div>
		      </div>
		  </div>  
		    
		  </section>


		  <section id="control" style="display:none">

	  		  <p>X: <input id="rx" type="range" max="360" min="0" value="0" onchange="rotate()"></p>
	  	      <p>Y: <input id="ry" type="range" max="360" min="0" value="130" onchange="rotate()"></p>


		     
		  </p>
		  <script>
		   
            
              
		  </script>
		  </section>



	</div>

	<?php include(FOOTER); ?>

<?php endif;?>




<!-- FOOT -->

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo SOCKET_SCRIPT_URL;?>"></script>

<?php if(MOBILE):?>
	<script type="text/javascript" src="/shared/js/gyro.js"></script>
	<script type="text/javascript" src="/shared/js/mobile.js" id="script-mobile-shared"></script>
	<script type="text/javascript" src="mobile.js" id="script-mobile"></script>
<?php else: ?>
	<script type="text/javascript" src="/shared/js/desktop.js" id="script-desktop-shared"></script>
	<script type="text/javascript" src="http://yui.yahooapis.com/3.5.1/build/yui/yui-min.js"></script>
	<script type="text/javascript" src="rubik-simple.js"></script>
	<script>
	YUI().use('node','rubik-simple',function(Y){
	    var cube = window.cube = new Y.Rubik();
	    cube._disabledFLick = true;
	    cube.run();    
	});
	</script>
	<script type="text/javascript" src="desktop.js" id="script-desktop"></script>
<?php endif; ?>
	

</body>
</html>