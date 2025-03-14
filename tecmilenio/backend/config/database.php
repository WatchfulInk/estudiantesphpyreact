<?php
$host = "localhost";  
$dbname = "sirgeos";  
$user = "postgres";  
$password = "postgres";  

try {
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
} catch (PDOException $e) {
    die(json_encode(["status" => "error", "message" => "Error en la conexión: " . $e->getMessage()]));
}
?>