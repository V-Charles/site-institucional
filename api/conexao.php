<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

    if($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
        exit(0);
    }

    require 'config.php';

    try {
        $pdo = new PDO("mysql:host=$host;port=$port;dbname=$db_name", $user, $pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e){
        echo json_encode(["erro" => "Erro de conexão: " . $e->getMessage()]);
        exit;
    }
 ?>