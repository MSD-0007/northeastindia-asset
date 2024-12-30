document.addEventListener('DOMContentLoaded', function () {
    // Dynamic Search
    const searchInput = document.getElementById('search');
    const destinationList = document.getElementById('destination-list');
    const items = destinationList.getElementsByTagName('li');

    searchInput.addEventListener('keyup', function () {
        const filter = searchInput.value.toLowerCase();

        for (const item of items) {
            const text = item.textContent || item.innerText;
            if (text.toLowerCase().indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    });

    // Google Maps API Initialization
    function initMap() {
        // Center the map over Northeast India
        const northeastIndia = { lat: 26.2006, lng: 92.9376 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: northeastIndia,
            disableDefaultUI: true,
        });

        // Marker data for different states in Northeast India
        const states = [
            { name: "Assam", position: { lat: 26.2006, lng: 92.9376 }, description: "Gateway to the Northeast" },
            { name: "Meghalaya", position: { lat: 25.467, lng: 91.3662 }, description: "Where Clouds Whisper" },
            { name: "Arunachal Pradesh", position: { lat: 27.0952, lng: 93.3624 }, description: "Spiritual Haven" },
            { name: "Sikkim", position: { lat: 27.5330, lng: 88.6139 }, description: "Nature's Paradise" }
        ];

        // Add markers for each state
        states.forEach((state) => {
            const marker = new google.maps.Marker({
                position: state.position,
                map: map,
                title: state.name,
            });

            const infoWindow = new google.maps.InfoWindow({
                content: `<h3>${state.name}</h3><p>${state.description}</p>`,
            });

            // Open info window on marker click
            marker.addListener("click", () => {
                infoWindow.open(map, marker);
            });
        });
    }

    // Load Google Maps API on window load
    window.initMap = initMap;

    // Chatbot Toggle
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');

    chatbotToggle.addEventListener('click', function () {
        if (chatbotContainer.classList.contains('hidden')) {
            chatbotContainer.classList.remove('hidden');
            chatbotContainer.classList.add('show');
        } else {
            chatbotContainer.classList.remove('show');
            chatbotContainer.classList.add('hidden');
        }
    });

    // Handle chat input and send button functionality
    const sendButton = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const chatOutput = document.getElementById('chat-output');

    sendButton.addEventListener('click', function () {
        const userInput = chatInput.value.trim();
        if (userInput) {
            const userMessage = document.createElement('div');
            userMessage.textContent = `You: ${userInput}`;
            chatOutput.appendChild(userMessage);
            chatInput.value = '';
            chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the bottom
        }
    });

    // Handle Enter key in chat input
    chatInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission or other default behavior
            sendButton.click(); // Trigger the click event on the send button
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const dropdownTrigger = document.querySelector('.nav-links li .dropdown-container');
    const dropdownMenu = document.querySelector('.dropdown');

    if (dropdownTrigger && dropdownMenu) {
        dropdownTrigger.addEventListener('click', function (event) {
            event.stopPropagation();
            dropdownMenu.classList.toggle('show'); // Toggle the 'show' class
        });

        // Close the dropdown if clicking outside
        document.addEventListener('click', function (event) {
            if (!dropdownTrigger.contains(event.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const destinationsToggle = document.getElementById('destinations-toggle');
    const dropdown = document.querySelector('.dropdown');

    if (destinationsToggle && dropdown) {
        destinationsToggle.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            dropdown.classList.toggle('show'); // Toggle dropdown visibility
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (event) {
            if (!destinationsToggle.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const navLinks = document.querySelector('.nav-links');

    hamburgerToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show'); // Toggle visibility of nav links
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!hamburgerToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('show'); // Hide nav links
        }
    });
});
