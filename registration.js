document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    try {
        const response = await fetch('https://your-backend-url.onrender.com/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('register-message').textContent = 'Registration successful! You can now log in.';
            document.getElementById('register-message').style.color = 'green';
        } else {
            document.getElementById('register-message').textContent = data.error || 'Registration failed!';
            document.getElementById('register-message').style.color = 'red';
        }
    } catch (error) {
        document.getElementById('register-message').textContent = 'An error occurred. Please try again.';
        document.getElementById('register-message').style.color = 'red';
    }
});
