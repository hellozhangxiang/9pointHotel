<?php
header("Content-Type:application/json;charset=utf-8");
header("Access-Control-Allow-Origin:*");
require("./innit.php");
@$name=$_REQUEST["name"];
@$upwd=$_REQUEST["upwd"];
$nPattern='/[a-z0-9]{3,12}/';
$pPattern='/[a-z0-9]{3,12}/';
/*if($name==""){
    echo '{"code":-2,"msg":"用户名不能为空"}';
    exit;
}
if(!preg_match($nPattern,$upwd)){
    echo '{"code":-1,"msg":"用户密码格式不正确"}';
    exit;
}*/
$sql="select * from jd_member where name='$name' and upwd='$upwd'";
$result=sql_execute($sql);
if(count($result)>0){
	//$_SESSION["mid"]=$result[0]["mid"];
	$mid=$result[0]["mid"];
	echo '{"code":1,"mname":"'.$name.'","msg":"登录成功","mid":'.$mid.'}';
}
else
	echo '{"code":0,"msg":"账户与密码不匹配！"}';
