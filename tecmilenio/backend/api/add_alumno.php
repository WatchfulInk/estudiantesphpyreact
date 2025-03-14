<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once "../config/database.php";

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["nombre"]) && isset($data["edad"])) {
    $nombre = htmlspecialchars(strip_tags($data["nombre"]));
    $edad = intval($data["edad"]);

    try {
        $stmt = $pdo->prepare("INSERT INTO alumnos (nombre, edad) VALUES (:nombre, :edad)");
        $stmt->bindParam(":nombre", $nombre);
        $stmt->bindParam(":edad", $edad);
        $stmt->execute();

        echo json_encode(["status" => "success", "message" => "Alumno agregado correctamente"]);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Error en la inserción: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Faltan datos requeridos"]);
}
?>
