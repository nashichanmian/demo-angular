
<?php
header("Content-type: text/html; charset=utf-8");



if(!empty($_POST["Url"]) && !empty($_POST["Title"]) && !empty($_POST["Cont"]) && !empty($_POST["Name"]));
 {
	include("conn.php");//引入链接数据库
	$Url=$_GET['Url'];
	$Title=$_GET['Title'];
	$Cont=$_GET['Cont'];
	$Name=$_GET['Name'];
	$Time=date('Y-m-d H:i:s',time());
	$result=mysql_query("insert into  `article` (`url`,`title`,`cont`,`name`,`time`) values('$Url','$Title','$Cont','$Name','$Time')");
    if($result){
     $jsona=json_encode(array("code"=>100,"des"=>"ok"));
    echo($jsona);
    }else{
      $jsonaa=json_encode(array("code"=>0,"des"=>"error"));
    echo($jsonaa);
    }
 }


