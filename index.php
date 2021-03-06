<?php

if (strstr($_SERVER['REQUEST_URI'], '.png')) {
	$filename =  '/var/www/html/views/' . $_SERVER['REQUEST_URI'];
	$handle = fopen($filename, "rb");
	$contents = fread($handle, filesize($filename));
	fclose($handle);

	header("content-type: image/png");

	echo $contents;
	exit;
}

require_once 'vendor/autoload.php';

use Jadu\Pulsar\Twig\Extension\ArrayExtension;
use Jadu\Pulsar\Twig\Extension\AttributeParserExtension;
use Jadu\Pulsar\Twig\Extension\ConfigExtension;
use Jadu\Pulsar\Twig\Extension\ConstantDefinedExtension;
use Jadu\Pulsar\Twig\Extension\GetConstantExtension;
use Jadu\Pulsar\Twig\Extension\HelperOptionsModifierExtension;
use Jadu\Pulsar\Twig\Extension\RelativeTimeExtension;
use Jadu\Pulsar\Twig\Extension\UrlParamsExtension;
use Jadu\Pulsar\Twig\Extension\TabsExtension;

$loader = new Twig_Loader_Filesystem(__DIR__ . '/views');
$loader->addPath(__DIR__ . '/vendor/jadu/pulsar/views', 'pulsar');

$twig = new Twig_Environment(
    $loader,
	[
		'strict_variables' => true
    ]
);

$twig->addExtension(new ArrayExtension());
$twig->addExtension(new AttributeParserExtension());
$twig->addExtension(new ConfigExtension(__DIR__ . 'pulsar.json'));
$twig->addExtension(new ConstantDefinedExtension());
$twig->addExtension(new HelperOptionsModifierExtension());
$twig->addExtension(new GetConstantExtension());
$twig->addExtension(new RelativeTimeExtension());
$twig->addExtension(new UrlParamsExtension($_GET));
$twig->addExtension(new TabsExtension());
$twig->addExtension(new Twig_Extension_StringLoader());
$twig->addExtension(new Twig_Extension_Debug());

if (isset($_SERVER['PATH_INFO']) && strpos($_SERVER['PATH_INFO'], '.html.twig') !== false) {
    $template = $twig->loadTemplate($_SERVER['PATH_INFO']);
} else {
    $template = $twig->loadTemplate($_SERVER['REQUEST_URI'] . '/index.html.twig');
}

// define('theme', 'projector');

print $template->render(array());
