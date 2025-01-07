# **Safe Browsing Chrome Extension**

This Chrome extension checks the safety of the current website by leveraging the Google Safe Browsing API. It warns users about potentially harmful websites to ensure a secure browsing experience.

---

## **Features**
- **Real-time Website Safety Check**: Uses Google Safe Browsing API to detect malicious websites.
- **Dynamic Visual Feedback**: Displays appropriate icons (safe, warning, or neutral) based on the website's safety status.
- **User-Friendly Interface**: Simple popup UI with clear messages about website safety.

---

## **How It Works**
1. The extension fetches the current tab's URL.
2. Sends the URL to the Google Safe Browsing API for analysis.
3. Displays the website's safety status in the popup with appropriate feedback:
   - ✅ Safe websites.
   - ⚠️ Unsafe websites (malware, phishing, etc.).
   - ❌ Errors if API call fails.

---

---

## **Setup Instructions**
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/safe-browsing-extension.git
   cd safe-browsing-extension
   
2. Open the Google Cloud Console:
    - Create a new project.
    - Enable the Google Safe Browsing API.
    - Generate an API key and replace YOUR_API_KEY in the popup.js file.

3. Load the extension in Chrome:

    - Go to chrome://extensions/.
    - Enable Developer Mode (top-right corner).
    - Click Load unpacked and select the project directory.
## **Technologies Used**
- HTML, CSS, JavaScript: Frontend development for the popup.
- Google Safe Browsing API: Website safety checks.
- Chrome Extensions API: Interaction with the browser.

## **To Do**
- Add support for more threat types (e.g., unwanted software).
- Improve UI design with animations or more visuals.
- Implement user preferences for displaying warnings.

## **Contributing**
Contributions are welcome! Feel free to open issues or submit pull requests.

## **License**
This project is licensed under the MIT License.
