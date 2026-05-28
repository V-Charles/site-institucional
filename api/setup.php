<?php
    require 'config.php';

    try {
        $pdo = new PDO("mysql:host=$host;port=$port;dbname=$db_name", $user, $pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $sql = "CREATE TABLE IF NOT EXISTS colaboradores (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            cargo VARCHAR(100) NOT NULL,
            departamento VARCHAR(100) NOT NULL
        )";
        
        $pdo->exec($sql);
        
        echo "Instalação concluída com sucesso! Tabela criada no banco de dados nas nuvens.";
    } catch (PDOException $e) {
        echo "Erro na instalação: " . $e->getMessage();
    }
?>