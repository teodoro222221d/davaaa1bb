document.addEventListener("DOMContentLoaded", () => {
    const statusElement = document.getElementById("status");
    const toggleButton = document.getElementById("toggle-btn");

    // Función para obtener el estado del dispositivo
    async function getDeviceStatus() {
        try {
            const response = await fetch('server.php?action=status');
            const data = await response.json();
            statusElement.textContent = data.status ? 'Dispositivo Encendido' : 'Dispositivo Apagado';
        } catch (error) {
            console.error('Error al obtener el estado del dispositivo:', error);
            statusElement.textContent = 'Error al cargar el estado';
        }
    }

    // Función para cambiar el estado del dispositivo
    async function toggleDevice() {
        try {
            const response = await fetch('server.php?action=toggle', { method: 'POST' });
            const data = await response.json();
            statusElement.textContent = data.status ? 'Dispositivo Encendido' : 'Dispositivo Apagado';
        } catch (error) {
            console.error('Error al cambiar el estado del dispositivo:', error);
            statusElement.textContent = 'Error al cambiar el estado';
        }
    }

    // Evento para el botón
    toggleButton.addEventListener('click', toggleDevice);

    // Obtener el estado del dispositivo al cargar la página
    getDeviceStatus();
});
