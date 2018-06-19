<?php
	$user=@$_REQUEST["user"];
	$pass=@$_REQUEST["pass"];
	
	
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
	
	if($user!="" && $pass!=""){
		$mysql="INSERT info(user,pass) VALUES('".$user."','".$pass."')";
		$query=mysql_query($mysql);	
	}

?>