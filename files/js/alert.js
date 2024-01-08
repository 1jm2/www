// Function to check if the alert can be shown
function canShowAlert() {
  // Check if the 'alertShownCount' cookie exists
  if (document.cookie.split(';').some((item) => item.trim().startsWith('alertShownCount='))) {
    // Retrieve the value of the 'alertShownCount' cookie
    const alertShownCount = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)alertShownCount\s*=\s*([^;]*).*$)|^.*$/, '$1'), 10);

    // Check if the alert has been shown less than 5 times today
    return alertShownCount < 5;
  }

  return true; // Show the alert if the cookie doesn't exist
}
// Close the alert box and hide the backdrop
function closeAlert() {
  document.getElementById('customAlert').style.display = 'none';
  document.getElementById('backdrop').style.display = 'none';
}

// Function to set the cookie indicating that the alert has been shown
function setAlertShownCookie() {
  // Set the 'alertShownCount' cookie with an expiration time of 1 day
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);
  document.cookie = `alertShownCount=1; expires=${expirationDate.toUTCString()}; path=/`;
}


// Function to show the alert box and backdrop after 2 seconds (if allowed)
setTimeout(function() {
  if (canShowAlert()) {
    document.getElementById('customAlert').style.display = 'block';
    document.getElementById('backdrop').style.display = 'block';
    setAlertShownCookie(); // Set the cookie after showing the alert
  }
}, 2000); // 2000 milliseconds = 2 seconds

// Rest of the existing JavaScript code
