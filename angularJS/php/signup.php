<?php
/**
 * @Author: Marte
 * @Date:   2016-12-22 18:03:37
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-12-23 12:12:44
 */
header("Content-type: text/html; charset=utf-8");
if(!empty($_GET["name"])&&!empty($_GET["password"]))
    include("conn.php");
    $name=$_GET['name'];
    $password=$_GET['password'];
    $query=mysql_query("select * from `login` where `name`='$_GET[name]'");
    $result=mysql_num_rows($query);
    if($result){
        $Json = json_encode(array("code"=>1,"des"=>"error"));
        echo($Json);
    }
    else{
        $result2 = mysql_query("insert into `login` (`name`,`password`) values ('$name','$password')");
        $Json = json_encode(array("code"=>100,"des"=>"ok"));
        echo($Json);
    }

