<?php
//	$user=@$_REQUEST["user"];
//	$pass=@$_REQUEST["pass"];
	$userL=@$_REQUEST["userL"];
	$passL=@$_REQUEST["passL"];
	$user="13852171360";
	$pass="123321a";
	
	if($user==$userL && $pass==$passL){
		echo $user;
		return null;
	}else{
		echo 0;
	}
//	if($user!=$userL || $pass!=$passL){
//		
//	}
	
?>