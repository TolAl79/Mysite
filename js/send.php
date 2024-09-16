<?php
$imya = $_POST['imya'];
$email = $_POST['email'];
$tema = $_POST['tema'];
$message = $_POST['message'];
$imya = htmlspecialchars($imya);
$email = htmlspecialchars($email);
$tema = htmlspecialchars($tema);
$message = htmlspecialchars($message);
$imya = urldecode($imya);
$email = urldecode($email);
$tema = urldecode($tema);
$message = urldecode($message);
$imya = trim($imya);
$email = trim($email);
$tema = trim($tema);
$message = trim($message);
if (mail("t0lax@mail.ru", "Форма зворотнього зв^язку", "Ім^я:".$imya.". E-mail: ".$email.".Тема:".$tema.".Текст:".$message ,"From: admin@gymn.zzz.com.ua \r\n"))
 {     echo "Повідомлення відправлене"; 
} else { 
    echo "Виникли помилки при відправці, спробуйте пізніше!";
}?>