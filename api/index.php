<?php
require_once 'conexao.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT * FROM colaboradores");
    $colaboradores = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($colaboradores);
} 
elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $stmt = $pdo->prepare("INSERT INTO colaboradores (nome, cargo, departamento) VALUES (:nome, :cargo, :departamento)");
    $stmt->execute([
        ':nome' => $data['nome'],
        ':cargo' => $data['cargo'],
        ':departamento' => $data['departamento']
    ]);
    
    $data['id'] = $pdo->lastInsertId();
    echo json_encode($data);
} 
elseif ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $stmt = $pdo->prepare("UPDATE colaboradores SET nome = :nome, cargo = :cargo, departamento = :departamento WHERE id = :id");
    $stmt->execute([
        ':nome' => $data['nome'],
        ':cargo' => $data['cargo'],
        ':departamento' => $data['departamento'],
        ':id' => $data['id']
    ]);
    
    echo json_encode($data);
} 
elseif ($method === 'DELETE') {
    $id = $_GET['id'] ?? null;
    
    if ($id) {
        $stmt = $pdo->prepare("DELETE FROM colaboradores WHERE id = :id");
        $stmt->execute([':id' => $id]);
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["error" => "ID não fornecido"]);
    }
}
?>