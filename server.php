<?php
session_start();

// Inicializar el estado del dispositivo
if (!isset($_SESSION['device_status'])) {
    $_SESSION['device_status'] = false; // false = apagado, true = encendido
}

// Manejar la solicitud según la acción
if (isset($_GET['action'])) {
    if ($_GET['action'] == 'status') {
        // Devolver el estado del dispositivo
        echo json_encode(['status' => $_SESSION['device_status']]);
    } elseif ($_GET['action'] == 'toggle') {
        // Cambiar el estado del dispositivo
        $_SESSION['device_status'] = !$_SESSION['device_status'];
        echo json_encode(['status' => $_SESSION['device_status']]);
    }
} else {
    // Respuesta por defecto
    echo json_encode(['error' => 'Acción no válida']);
}
?>
