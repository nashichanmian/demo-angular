<?php
/**
 * @Author: Marte
 * @Date:   2016-12-26 14:21:59
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-01-04 14:42:57
 */
header("Content-type: text/html; charset=utf-8");
    include("conn.php");//引入链接数据库
$sql=mysql_query("select * from `article`");
$Json=array();
while($row=mysql_fetch_array($sql)){
      $Json[]=array("Url"=>$row['url'],"Title"=>$row['title'],"Cont"=>$row['cont'],"Name"=>$row['name'],"Time"=>$row['time'],"ID"=>$row['id'],"clicks"=>$row['clicks']);
}
$Json2=array(
    "code"=>100,
    "data"=>$Json
    );
 echo(json_encode($Json2));