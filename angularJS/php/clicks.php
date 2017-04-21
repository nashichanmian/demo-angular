<?php
/**
 * @Author: Marte
 * @Date:   2016-12-28 11:08:09
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-12-28 11:41:16
 */


header("Content-type: text/html; charset=utf-8");

    include("conn.php");//引入链接数据库
    $id=$_GET['id'];
    $clicks=$_GET['clicks'];
    $result=mysql_query("update `article` set clicks='$clicks' where id='$id'");
    echo ($clicks);


