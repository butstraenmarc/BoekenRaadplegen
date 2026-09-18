<?php

// --- CORS headers ---
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Password, Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");

// --- Preflight request ---
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// --- Wachtwoordcontrole ---
$correctPassword = "jouwWachtwoordHier";

if (!isset($_SERVER['HTTP_X_PASSWORD']) || $_SERVER['HTTP_X_PASSWORD'] !== $correctPassword) {
    http_response_code(403);
    echo json_encode(["error" => "Wachtwoord ongeldig"]);
    exit;
}

// --- JSON inlezen ---
$jsonPath = __DIR__ . "/boeken.json";

if (!file_exists($jsonPath)) {
    http_response_code(500);
    echo json_encode(["error" => "JSON-bestand niet gevonden"]);
    exit;
}

$json = file_get_contents($jsonPath);

// --- JSON teruggeven ---
header("Content-Type: application/json");
echo $json;