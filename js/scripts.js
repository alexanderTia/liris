const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// Bonus: responsive recalculation
window.addEventListener('resize', updateCarousel);



function filterArticles(category) {
  const cards = document.querySelectorAll('.blog-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

    const toggleBtn = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');

    toggleBtn.addEventListener('click', () => {
        chatbotWindow.classList.toggle('hidden');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = input.value;
        appendMessage('Vous', userMessage);
        input.value = '';

        setTimeout(() => {
            const response = getBotResponse(userMessage);
            appendMessage('LIRISS BOT', response);
        }, 500);
    });

    function appendMessage(sender, text) {
        const msg = document.createElement('div');
        msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
    }

    function getBotResponse(input) {
        input = input.toLowerCase();
        if (input.includes("service")) return "Nous proposons des services immobiliers, éducatifs, logistiques et plus.";
        if (input.includes("contact")) return "Écrivez-nous sur WhatsApp ou à groupliriss@gmail.com.";
        if (input.includes("rendez-vous")) return "Vous pouvez prendre rendez-vous via notre page dédiée.";
        return "Merci pour votre message. Un conseiller vous répondra sous peu.";
    }

