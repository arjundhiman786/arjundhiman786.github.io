<?php
date_default_timezone_set('America/Toronto');

try {
    $DB_HOST = 'arjund3866014.ipagemysql.com';
    $DB_NAME = 'slidechat';
    $DB_USER = 'slidechatdba';
    $DB_PASSWORD = 'gamer12345';

    $dbconn = mysqli_connect($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_NAME)  or die('Error connecting to MySQL server.');
} catch (Exception $e) {
    echo $e->getMessage();
}
