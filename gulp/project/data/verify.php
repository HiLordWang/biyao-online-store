<?php
	$user=@$_POST["user"];
	$pass=@$_POST["pass"];

	
	$link=mysql_connect("localhost","root",123);
	if(!$link){
		echo mysql_error();
	}
	
	$gra=mysql_select_db("biyao");
	if(!$gra){
		echo mysql_error();
	}
	$utf=mysql_query("set names utf8");
	if(!$utf){
		echo mysql_error();
	}
	$query=mysql_query("SELECT * FROM info WHERE user=".$user);
	$row = mysql_fetch_array($query);
	$ls=$row["pass"];
	if($pass==$ls){
		echo 1;
	}else{
		echo 0;
	}


?>