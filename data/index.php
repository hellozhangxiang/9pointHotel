<?php
header("Access-Control-Allow-Origin:*");
header("Content-type:application/json");
require_once("../init.php");
$output=[];
$sql="SELECT * FROM jd_room";
$rooms=sql_execute($sql);
$output["rooms"]=$rooms;
$sql="SELECT nimg FROM jd_nav";
$nav=sql_execute($sql);
$output["nav"]=$nav;
$sql="SELECT himg,hcity,htittle FROM jd_hot";
$hot=sql_execute($sql);
$output["hot"]=$hot;
echo json_encode($output);