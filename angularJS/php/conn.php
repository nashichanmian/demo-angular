<?php
	//链接数据库
	@mysql_connect("localhost:3306","root","")or die("mysql.shibai");
	@mysql_select_db("blog")or die("db.shibai");
	mysql_query("set names 'utf8'");
 ?>
