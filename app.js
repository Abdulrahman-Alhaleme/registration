function saveData(event) {
    event.preventDefault();

    // Check if username exists in session storage
    const username = document.getElementById("username").value;
    const userData = sessionStorage.getItem(username);
    if (userData) {
        alert("Username already exists. Please choose a different username.");
        return;
    }

    // Save form data to session storage
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const data = {
        username,
        password,
        email,
        phone
    };
    sessionStorage.setItem(username, JSON.stringify(data));
    alert("Registration successful!");
    location.reload();
}