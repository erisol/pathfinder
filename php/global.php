<?php

$siteTitle = "Vis Vei UiS";
$siteAcronym = "VVU";

// Can be turned to an array if this site were to expand to the other building at campus
$building = "Kj&oslash;lv Egeland\n";


if($_SESSION["language"] == "english") {

// General about the site
$siteDescription = "Bachelorthesis 2014: In-door navigation as a web application";
$authors = "Adam Johannsson and Erik Solhaug";
$creationDate = "2014";
$useMeToNavigate = "<img src=\"img/useMeEng.png\" height=\"79\" width=\"250\" alt=\"<- Use Me To Navigate\" />";
$floor = array( "1st. floor",
		"2nd. floor",
		"3rd. floor",
		"4th. floor",
		"5th. floor");

// Text on the website
$youAre = "You are here: <br />\n";
$yourRoute = "Your route: <br />\n";
$goingFrom = "From: \n";
$goingTo = "To: \n";
$disabilityHover = "Tick the box if you are movement impaired and in need of elevators to move around the different floors.";
$disability = "&emsp; <img src=\"img/h_icon.png\" width=\"15\" height=\"15\" alt=\"". $disabilityHover ."\" onmouseover=\"showDisabilityText()\" onmouseout=\"hideDisabilityText()\" /></a>\n";
$showWayButton = "Show me the way!";
$zoomIn = "Zoom In";
$zoomOut = "Zoom Out";
$floorUp = "Up floor";
$floorDown = "Down floor";



}

if ($_SESSION["language"] == "norsk") {

// General about the site
$siteDescription = "Bacheloroppgave 2014: Innend&oslash;rs navigasjon som webapplikasjon";
$authors = "Adam Johannsson og Erik Solhaug";
$creationDate = "2014";
$useMeToNavigate = "<img src=\"img/useMeNor.png\" height=\"79\" width=\"250\" alt=\"<- Bruk meg til &aring; navigere\" />";
$floor = array( "1. etasje\n",
		"2. etasje\n",
		"3. etasje\n",
		"4. etasje\n",
		"5. etasje\n");

// Text on the website
$youAre = "Du er her: <br />\n";
$yourRoute = "Din rute: <br />\n";
$goingFrom = "Fra: \n";
$goingTo = "Til: \n";
$disabilityHover = "Hvis du har behov for &aring; bruke heis istedet for trapper, vennligst kryss av boksen.";
$disability = "&emsp; <img src=\"img/h_icon.png\" width=\"15\" height=\"15\" alt=\"". $disabilityHover ."\" onmouseover=\"showDisabilityText()\"  onmouseout=\"hideDisabilityText()\" /></a>\n";
$showWayButton = "Vis Vei!";
$zoomIn = "Forst&oslash;rr";
$zoomOut = "Forminsk";
$floorUp = "Opp etg.";
$floorDown = "Ned etg.";



} 
?>