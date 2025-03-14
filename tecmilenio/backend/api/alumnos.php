<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once "../config/database.php";

try {
    $query = $pdo->query("SELECT * FROM alumnos");
    $alumnos = $query->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["status" => "success", "data" => $alumnos]);
    die();  // <--- Detiene la ejecución después de enviar JSON
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Error en la consulta: " . $e->getMessage()]);
    die();
}
?>