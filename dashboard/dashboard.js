// Dynamically set the username (for now, just use a static value)
document.getElementById("user-name").innerText = "Nemo";  // Change this to the logged-in user's name

// Show the verification container and login requests
function showVerification() {
    document.getElementById("verification-container").style.display = "block";
}

// Hide the clicked request
function hideRequest(request) {
    request.style.display = "none";
}
