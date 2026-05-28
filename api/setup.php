<?php
    require 'config.php';

    try {
        $pdo = new PDO("mysql:host=$host;port=$port", $user, $pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $pdo->exec("CREATE DATABASE IF NOT EXISTS agencia_db");
        $pdo->exec("USE agencia_db");
        
        $sql = "CREATE TABLE IF NOT EXISTS colaboradores (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            cargo VARCHAR(100) NOT NULL,
            departamento VARCHAR(100) NOT NULL
        )";
        
        $pdo->exec($sql);
        
        echo "Instalação concluída com sucesso! Banco de dados e tabela criados.";
    } catch (PDOException $e) {
        echo "Erro na instalação: " . $e->getMessage();
    }
?>