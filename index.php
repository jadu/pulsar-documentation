<?php

require_once 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

$webroot = getenv('WEBROOT');

use Jadu\Pulsar\Twig\Extension\ArrayExtension;
use Jadu\Pulsar\Twig\Extension\AttributeParserExtension;
use Jadu\Pulsar\Twig\Extension\ConfigExtension;
use Jadu\Pulsar\Twig\Extension\ConstantDefinedExtension;
use Jadu\Pulsar\Twig\Extension\GetConstantExtension;
use Jadu\Pulsar\Twig\Extension\HelperOptionsModifierExtension;
use Jadu\Pulsar\Twig\Extension\RelativeTimeExtension;
use Jadu\Pulsar\Twig\Extension\UrlParamsExtension;
use Jadu\Pulsar\Twig\Extension\TabsExtension;

$loader = new Twig_Loader_Filesystem($webroot . '/views');
$loader->addPath($webroot . '/vendor/jadu/pulsar/views', 'pulsar');

$twig = new Twig_Environment($loader,
	array(
		'debug' => true,
		'strict_variables' => true
	)
);

$twig->addExtension(new ArrayExtension());
$twig->addExtension(new AttributeParserExtension());
$twig->addExtension(new ConfigExtension($webroot . 'pulsar.json'));
$twig->addExtension(new ConstantDefinedExtension());
$twig->addExtension(new HelperOptionsModifierExtension());
$twig->addExtension(new GetConstantExtension());
$twig->addExtension(new RelativeTimeExtension());
$twig->addExtension(new UrlParamsExtension($_GET));
$twig->addExtension(new TabsExtension());
$twig->addExtension(new Twig_Extension_StringLoader());
$twig->addExtension(new Twig_Extension_Debug());

if (strstr($_SERVER['PATH_INFO'], '.html.twig')) {
    $template = $twig->loadTemplate($_SERVER['PATH_INFO']);
} else {
    $template = $twig->loadTemplate($_SERVER['REQUEST_URI'] . '/index.html.twig');
}

// define('theme', 'projector');

print $template->render(array());
