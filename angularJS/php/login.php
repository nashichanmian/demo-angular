<?php
/**
 * @Author: Marte
 * @Date:   2016-12-21 14:01:28
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-12-23 11:36:58
 */
header("Content-type: text/html; charset=utf-8");
include("conn.php");//引入链接数据库


if(!empty($_GET["name"])&& !empty($_GET["password"]))
{
     $name=$_GET["name"];
    $password=$_GET["password"];
    $query=@mysql_query("select * from `login` where `name`='$name' and `password`='$password'");
    $result=mysql_fetch_array($query);
    if($result){
        $Json = json_encode(array("code"=>100,"des"=>"ok"));
        echo($Json);
    }
    else{
        $Json = json_encode(array("code"=>0,"des"=>"error"));
        echo($Json);
    }
}



