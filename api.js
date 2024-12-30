import axios from 'axios';

const apiUrl = 'https://my-backend.onrender.com'; // Replace with your Render URL

// Example: Register a new user
axios.post(`${apiUrl}/register`, {
    username: 'testuser',
    password: 'testpassword',
})
.then(response => console.log(response.data))
.catch(error => console.error('Error registering user:', error));

// Example: Fetch destinations
axios.get(`${apiUrl}/destinations`)
.then(response => console.log(response.data))
.catch(error => console.error('Error fetching destinations:', error));
