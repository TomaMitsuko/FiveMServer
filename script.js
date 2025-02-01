// This is a placeholder for fetching your server's real-time status.
// Replace the URL and parsing logic with your actual server API details.
document.addEventListener('DOMContentLoaded', function() {
  const statusDiv = document.getElementById('server-status');

  // Example function to simulate a server status check
  function checkServerStatus() {
    // Replace this timeout with a real fetch call to your server's API
    setTimeout(() => {
      // Sample status data (you would get this from your server)
      const serverData = {
        online: true,
        players: 12,
        maxPlayers: 64
      };

      statusDiv.innerHTML = `
        <p>Status: <strong>${serverData.online ? 'Online' : 'Offline'}</strong></p>
        <p>Players: ${serverData.players} / ${serverData.maxPlayers}</p>
      `;
    }, 1000);
  }

  checkServerStatus();
});
