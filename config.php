<?php

define("ENV", $_SERVER['SERVER_NAME']);


define('DS', DIRECTORY_SEPARATOR);
define('DOCUMENT_ROOT', dirname(__FILE__).DS);

define("AUTH_PAGE", DOCUMENT_ROOT . 'shared' . DS . "authorize.html");
define("HEADER", DOCUMENT_ROOT . 'shared' . DS . "header.html");
define("FOOTER", DOCUMENT_ROOT . 'shared' . DS . "footer.html");


switch(ENV){
	case "localhost":
	case "192.168.1.105":
		define("SOCKET_HOST", "192.168.1.105");
		define("SOCKET_PORT", "7777");
		break;
	case "192.168.2.21":
		define("SOCKET_HOST", "192.168.2.21");
		define("SOCKET_PORT", "7777");
		break;
	case "secondscreen.dev":
		define("SOCKET_HOST", "secondscreen.dev");
		define("SOCKET_PORT", "7777");
		break;
	case "secondscreen.theyoungastronauts.com":
		define("SOCKET_HOST", "secondscreen.theyoungastronauts.com");
		define("SOCKET_PORT", "7777");
		break;
	case "ss.theyoungastronauts.com":
		define("SOCKET_HOST", "ss.theyoungastronauts.com");
		define("SOCKET_PORT", "7777");
		break;
}


define("SOCKET_SCRIPT", "socket.io/socket.io.js");
define("SOCKET_SCRIPT_URL", "http://" . SOCKET_HOST . ":" . SOCKET_PORT . "/" . SOCKET_SCRIPT);
define("SOCKET_SERVER", "http://" . SOCKET_HOST . ":" . SOCKET_PORT);




define("BASE_TITLE", "The Second Screen");



//Mobile Detection
$iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");

if ($iphone || $android || $palmpre || $ipod || $berry == true || isset($_GET['m']) ) { 
    define("MOBILE", 1);
} else {
	define("MOBILE", 0);
}