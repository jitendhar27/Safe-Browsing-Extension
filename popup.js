// Function to check website safety
function checkUrlSafety() {
    // Get the current tab's URL
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const url = tabs[0].url;
  
      fetch(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyDFIog35gDykUqAhomYUBHdsevEuFrl2H0`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client: { clientId: "safe-browsing-extension", clientVersion: "1.0" },
          threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [{ url }]
          }
        })
      })
        .then(response => response.json())
        .then(data => {
          const statusIcon = document.getElementById("statusIcon");
          const statusText = document.getElementById("status");
  
          if (data.matches) {
            statusIcon.src = "icons/icon-warning.png"; // Change to warning icon
            statusText.textContent = "⚠️ This site is unsafe!";
            statusText.style.color = "red";
          } else {
            statusIcon.src = "icons/icon-safe.png"; // Change to safe icon
            statusText.textContent = "✅ This site is safe!";
            statusText.style.color = "green";
          }
        })
        .catch(error => {
          console.error("Error:", error);
          const statusText = document.getElementById("status");
          statusText.textContent = "❌ Error checking site safety!";
          statusText.style.color = "red";
        });
    });
  }
  
  // Call the function when the popup loads
  document.addEventListener("DOMContentLoaded", checkUrlSafety);
  