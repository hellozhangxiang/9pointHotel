<?php
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
require("./innit.php");
$output=[];
@$pno=$_REQUEST["pno"];
@$price=$_REQUEST["price"];
@$pageSize=$_REQUEST["pageSize"];
/*if($price!=""){
	$output["price"]=sql_execute("select * from jd_room where price='$title'";)
}else $output["title"]="";*/
$output["pno"]=$pno;
$output["pageSize"]=$pageSize;
@$kw=urldecode($_REQUEST["kw"]);
$kws=explode(" ",$kw);
if(count($kws)>=0){
	for($i=0;$i<count($kws);$i++){
		$kws[$i]=" title like '%".$kws[$i]."%' ";//各个语句前后保证空格
	};
	$sql="select * from jd_room where ".implode(" and ",$kws);//各个语句前后保证空格
	$output["pageCont"]=count(sql_execute($sql));
	$sql.=" limit ".($pno*$output["pageSize"]).",".$pageSize;
	//$sql=$sql." limit ".($pno*$pageSize)",".$pageSize;
	$output["data"]=sql_execute($sql);
}else {$output["data"]=sql_execute("select * from jd_room limit ".($pno*$output["pageSize"]).",".($pageSize));}
echo json_encode($output);