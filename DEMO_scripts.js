document.addEventListener('DOMContentLoaded', function() {
    // Dynamic Search
    const searchInput = document.getElementById('search');
    const destinationList = document.getElementById('destination-list');
    const items = destinationList.getElementsByTagName('li');

    searchInput.addEventListener('keyup', function() {
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

    // Leaflet Map Initialization
    const map = L.map('map').setView([26.2006, 92.9376], 7);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker for Assam
    L.marker([26.2006, 92.9376]).addTo(map)
        .bindPopup('Assam')
        .openPopup();

    // Optionally, add more markers or features
    const markers = [
        { lat: 25.1036, lng: 91.5834, title: 'Guwahati' },
        { lat: 26.1445, lng: 91.7362, title: 'Kaziranga' }
    ];

    markers.forEach(markerInfo => {
        L.marker([markerInfo.lat, markerInfo.lng]).addTo(map)
            .bindPopup(markerInfo.title);
    });

    // Chatbot Toggle
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');

    chatbotToggle.addEventListener('click', function() {
        if (chatbotContainer.classList.contains('hide')) {
            chatbotContainer.classList.remove('hide');
            chatbotContainer.classList.add('show');
        } else {
            chatbotContainer.classList.remove('show');
            chatbotContainer.classList.add('hide');
        }
    });

    // Handle chat input and send button functionality
    const sendButton = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const chatOutput = document.getElementById('chat-output');

    sendButton.addEventListener('click', function() {
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
    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission or other default behavior
            sendButton.click(); // Trigger the click event on the send button
        }
    });

    cards.forEach(card => {
        let title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

//  document.getElementById('search').addEventListener('keyup', function () {
//      let input = this.value.toLowerCase();
//      let cards = document.querySelectorAll('.destination-cards .card');
    
//      cards.forEach(card => {
//          let title = card.querySelector('h3').innerText.toLowerCase();
//          if (title.includes(input)) {
//              card.style.display = 'block';
//          } else {
//              card.style.display = 'none';
//          }
//      });

// });
