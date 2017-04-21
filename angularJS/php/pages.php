<?php
/**
 * @Author: Marte
 * @Date:   2016-12-30 11:01:02
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-01-04 14:48:36
 */
header("Content-type: text/html; charset=utf-8");
    include("conn.php");//引入链接数据库
$id=$_GET["id"];
$sql=mysql_query("select * from `article` where `id`='$id'");
$Json=array();
$row=mysql_fetch_array($sql);
$Json[]=array("Url"=>$row['url'],"Title"=>$row['title'],"Cont"=>$row['cont'],"Name"=>$row['name'],"Time"=>$row['time'],"ID"=>$row['id'],"clicks"=>$row['clicks']);

$Json2=array(
    "code"=>100,
    "data"=>$Json
    );
 echo (json_encode($Json2));