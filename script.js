// Wait until the DOM content is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
  // Get the div where the server status will be displayed
  const statusDiv = document.getElementById('server-status');

  // Function to simulate a server status check
  function checkServerStatus() {
    // Use setTimeout to mimic an API call delay
    setTimeout(() => {
      // Sample data: Replace this with a real API call to your FiveM server
      const serverData = {
        online: true,
        players: 12,
        maxPlayers: 64
      };

      // Update the inner HTML of the server status div with live data
      statusDiv.innerHTML = `
        <p>Status: <strong>${serverData.online ? 'Online' : 'Offline'}</strong></p>
        <p>Players: ${serverData.players} / ${serverData.maxPlayers}</p>
      `;
    }, 1000); // Delay of 1 second
  }

  // Call the function to check server status when the page loads
  checkServerStatus();
});
