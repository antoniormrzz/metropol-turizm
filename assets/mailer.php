<?php

//error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED ^ E_STRICT);

require_once "Mail.php";

$host = "smtp.yandex.com";
$username = "info@bananapublics.com";
$password = "zsggmkwcmesumxbb";
$port = "587";
$to = "info@bananapublics.com";
$email_from = "info@bananapublics.com";
$email_subject = $_POST['subject'];
$email_body = "Ad: " . $_POST['name'] . "\n" ."E-mail: " . $_POST['email'] . "\n\n" . $_POST['message'];
$email_address = $_POST['email'];

$headers = array ('From' => $email_from, 'To' => $to, 'Subject' => $email_subject, 'Reply-To' => $email_address);
$smtp = Mail::factory('smtp', array ('host' => $host, 'port' => $port, 'auth' => true, 'username' => $username, 'password' => $password));
$mail = $smtp->send($to, $headers, $email_body);


if (PEAR::isError($mail)) {
    echo("<p>" . $mail->getMessage() . "</p>");
    } else {
    echo("<p>Message successfully sent!</p>");
    }
    
?>
