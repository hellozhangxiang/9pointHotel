<?php
header("Content-Type:application/json,charset=utf-8");
header("Access-Control-Allow-Origin:*");
require("./innit.php");
$runame=$_REQUEST["runame"];
$rupwd=$_REQUEST["rupwd"];
$email=$_REQUEST["email"];
$phone=$_REQUEST["phone"];
$sql="SELECT * FROM jd_member WHERE name='$runame'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($result,MYSQLI_ASSOC);
if(count($row)>0){die ('{"code":-1,"msg":"用户名已被注册"}');};
$sql="SELECT * FROM jd_member WHERE eamile='$email'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_ALL($result,MYSQLI_ASSOC);
if(count($row)>0){die ('{"code":-2,"msg":"邮箱已被使用"}');};
$sql="SELECT * FROM jd_member WHERE phnone='$phone'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_ALL($result,MYSQLI_ASSOC);
if(count($row)>0){die ('{"code":-3,"msg":"电话已被使用"}');};
$sql="INSERT INTO jd_member VALUES(NULL,'$runame','$rupwd','$phone','$email',NULL,0)";
$result=mysqli_query($conn,$sql);
$row=mysqli_affected_rows($conn);
if($row>0){
	echo '{"code":1,"msg":"注册成功"}';
}else{
	echo '{"code":0,"msg":"注册失败，请检查"}';
}