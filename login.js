document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('https://your-backend-url.onrender.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('login-message').textContent = 'Login successful!';
            document.getElementById('login-message').style.color = 'green';

            // Save the token (optional) and redirect
            localStorage.setItem('token', data.token);
            setTimeout(() => {
                window.location.href = '/dashboard'; // Change to your intended page
            }, 1000);
        } else {
            document.getElementById('login-message').textContent = data.error || 'Login failed!';
            document.getElementById('login-message').style.color = 'red';
        }
    } catch (error) {
        document.getElementById('login-message').textContent = 'An error occurred. Please try again.';
        document.getElementById('login-message').style.color = 'red';
    }
});
