// Slider functionality
const slider = document.querySelector('.slider .list');
const items = document.querySelectorAll('.slider .list .item');
const dots = document.querySelectorAll('.slider .dots li');
const prev = document.querySelector('.slider .prev');
const next = document.querySelector('.next');

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})

window.onresize = function(event) {
    reloadSlider();
};

// Keep the rest of the JavaScript code (chatbot, map, and review functionality) as is
// ...

// Chatbot functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('chatbot-container');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatOutput = document.getElementById('chat-output');

chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('hidden');
});

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        appendMessage('You', message);
        // Here you would typically send the message to a backend for processing
        // For now, we'll just echo the message back
        setTimeout(() => {
            appendMessage('Bot', `You said: ${message}`);
        }, 1000);
        chatInput.value = '';
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

// Map functionality
function initMap() {
    const map = L.map('map').setView([26.2006, 92.9376], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers for each state (you can customize these)
    L.marker([26.2006, 92.9376]).addTo(map).bindPopup('Assam');
    L.marker([25.4670, 91.3662]).addTo(map).bindPopup('Meghalaya');
    L.marker([28.2180, 94.7278]).addTo(map).bindPopup('Arunachal Pradesh');
    L.marker([27.5330, 88.5122]).addTo(map).bindPopup('Sikkim');
}

// Initialize the map when the page loads
window.addEventListener('load', initMap);

// Review functionality
const reviewForm = document.getElementById('review-form');
const reviewsContainer = document.getElementById('reviews-container');

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reviewer-name').value;
    const review = document.getElementById('review-text').value;
    if (name && review) {
        addReview(name, review);
        reviewForm.reset();
    }
});

function addReview(name, review) {
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';
    reviewElement.innerHTML = `<strong>${name}:</strong> ${review}`;
    reviewsContainer.prepend(reviewElement);
}